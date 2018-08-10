<?php

//include('config.php');
// if (isset($_POST['receiver_data'])) {

//   $pay_array = unserialize($_POST['receiver_data']);
//   # code...
// }

if (isset($_POST['receiver_data'])) {

  $pay_array = $_POST['receiver_data'];
}

// print_r($pay_array);
// die();

// eMail subject to receivers
$vEmailSubject = 'Chris Payment Details';

/** MassPay NVP example.
 *
 *  Pay one or more recipients. 
*/

$environment = 'sandbox'; // or 'beta-sandbox' or 'live'.

/**
 * Send HTTP POST Request
 *
 * @param string The API method name
 * @param string The POST Message fields in &name=value pair format
 * @return array Parsed HTTP Response body
 */
function PPHttpPost($methodName_, $nvpStr_)
{
 global $environment;

 // Set up your API credentials, PayPal end point, and API version.
 // How to obtain API credentials:
 // https://cms.paypal.com/us/cgi-bin/?cmd=_render-content&content_ID=developer/e_howto_api_NVPAPIBasics#id084E30I30RO
 $API_UserName = urlencode('kamini12_api1.esferasoft.com');
 $API_Password = urlencode('BVXUADL3LNR8DS9Q');
 $API_Signature = urlencode('An5ns1Kso7MWUdW4ErQKJJJ4qi4-Aav8vR6EmQGCf34IWpf.hhmWME.M');
 $API_Endpoint = "https://api-3t.paypal.com/nvp";
 if("sandbox" === $environment || "beta-sandbox" === $environment)
 {
  $API_Endpoint = "https://api-3t.$environment.paypal.com/nvp";
 }
 $version = urlencode('51.0');

 // Set the curl parameters.
 $ch = curl_init();
 curl_setopt($ch, CURLOPT_URL, $API_Endpoint);
 curl_setopt($ch, CURLOPT_VERBOSE, 1);

 // Turn off the server and peer verification (TrustManager Concept).
 curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
 curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

 curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
 curl_setopt($ch, CURLOPT_POST, 1);

 // Set the API operation, version, and API signature in the request.

 $nvpreq = "METHOD=$methodName_&VERSION=$version&PWD=$API_Password&USER=$API_UserName&SIGNATURE=$API_Signature$nvpStr_";

 // Set the request as a POST FIELD for curl.
 curl_setopt($ch, CURLOPT_POSTFIELDS, $nvpreq."&".$nvpStr_);

 // Get response from the server.
 $httpResponse = curl_exec($ch);

 if( !$httpResponse)
 {
  echo $methodName_ . ' failed: ' . curl_error($ch) . '(' . curl_errno($ch) .')';
 }

 // Extract the response details.
 $httpResponseAr = explode("&", $httpResponse);

 $httpParsedResponseAr = array();
 foreach ($httpResponseAr as $i => $value)
 {
  $tmpAr = explode("=", $value);
  if(sizeof($tmpAr) > 1)
  {
   $httpParsedResponseAr[$tmpAr[0]] = $tmpAr[1];
  }
 }

 if((0 == sizeof($httpParsedResponseAr)) || !array_key_exists('ACK', $httpParsedResponseAr))
 {
  exit("Invalid HTTP Response for POST request($nvpreq) to $API_Endpoint.");
 }
//print_r($httpParsedResponseAr);

 echo json_encode($httpParsedResponseAr);

 return $httpParsedResponseAr;
}

// Set request-specific fields.
$emailSubject = urlencode($vEmailSubject);
$receiverType = urlencode('EmailAddress');
$currency = urlencode('USD'); // or other currency ('GBP', 'EUR', 'JPY', 'CAD', 'AUD')

//$receivers = $pay_array;

$receivers = array(
  0 => array(
    'receiverEmail' => "kamini_thakur-buyer@esferasoft.com", 
    'amount' => "100",
    'uniqueID' => "id_001",
    'note' => "chris"),
  1 => array(
    'receiverEmail' => "kamini_thakur-buyer@esferasoft.com",
    'amount' => "10",
    'uniqueID' => "id_002", 
    'note' => "chris"  
  ),
  2 => array(
    'receiverEmail' => "kamini123@gmail.com",
    'amount' => "50",
    'uniqueID' => "id_003", 
    'note' => "chris"  
  )
);
$receiversLenght = count($receivers);

// Add request-specific fields to the request string.
$nvpStr="&EMAILSUBJECT=$emailSubject&RECEIVERTYPE=$receiverType&CURRENCYCODE=$currency";

$receiversArray = array();

for($i = 0; $i < $receiversLenght; $i++)
{
 $receiversArray[$i] = $receivers[$i];
}

foreach($receiversArray as $i => $receiverData)
{
 $receiverEmail = urlencode($receiverData['receiverEmail']);
 $amount = urlencode($receiverData['amount']);
 $uniqueID = urlencode($receiverData['uniqueID']);
 $note = urlencode($receiverData['note']);
 $nvpStr .= "&L_EMAIL$i=$receiverEmail&L_Amt$i=$amount&L_UNIQUEID$i=$uniqueID&L_NOTE$i=$note";
}

// Execute the API operation; see the PPHttpPost function above.
$httpParsedResponseAr = PPHttpPost('MassPay', $nvpStr);

if("SUCCESS" == strtoupper($httpParsedResponseAr["ACK"]) || "SUCCESSWITHWARNING" == strtoupper($httpParsedResponseAr["ACK"]))
{
echo 'MassPay Completed Successfully: ' . $httpParsedResponseAr;

  // for ($i=0; $i < count($pay_array); $i++) { 

  //   $sql = "UPDATE payout_request SET paid_status = 1 , payment_datetime = '".date('Y-m-d h:i:s')."' where id = '".$pay_array[$i]['uniqueID']."'";
  //   $retval = mysql_query( $sql, $conn );   

  //   $to = $pay_array[$i]['receiverEmail'];
  //   $subject = "Whydio Payments";
  //   $txt = "You have received payment of $".$pay_array[$i]['amount']."in your paypal account";
  //   $headers = "From: info@whydio.com" . "\r\n" .
  //   "CC: sonu179208@gmail.com";

  //   mail($to,$subject,$txt,$headers);
  // }
  
}


?>