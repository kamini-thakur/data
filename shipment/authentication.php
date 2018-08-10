<?php
//echo phpinfo();
error_reporting(E_ALL);

$xml='<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <iMalca_CheckUserAuthentication xmlns="http://tempuri.org/">
      <LoginName>NYVinod12</LoginName>
      <Password>Shop#23</Password>
    </iMalca_CheckUserAuthentication>
  </soap:Body>
</soap:Envelope>';


$host='my.malca-amit.us';
$url= $host.'/MyMABookingWebService/MalcaAmitServices.asmx';

$ch=curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);  
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, Array('Content-Type: application/soap+xml'));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_HEADER, 1);
$response = curl_exec($ch);
//return $response;
print_r($response);
/*
if(curl_errno($ch))
   echo curl_error($ch);
else */
    curl_close($ch);
//echo $response;
   

      

/*
$host='my.malca-amit.us';
$path='/MyMABookingWebService/MalcaAmitServices.asmx';
$posturl = "https://".$host.$path;
$content='<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <iMalca_CheckUserAuthentication xmlns="http://tempuri.org/">
      <LoginName>NYVinod12</LoginName>
      <Password>Shop#23</Password>
    </iMalca_CheckUserAuthentication>
  </soap12:Body>
</soap12:Envelope>';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $posturl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, Array("Content-Type: application/soap+xml"));
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $content);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);


 // if (curl_errno($ch)) 
 //    {
        
 //          echo curl_error($ch);
 //    } 
 //    else 
 //    {
        $response = curl_exec($ch);
		return $response;
		 curl_close($ch);
  //  }
*/

?>