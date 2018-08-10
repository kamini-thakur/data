<?php
error_reporting(E_ALL);

$content='<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetMAEXDocument xmlns="http://tempuri.org/">
      <UserAuthentication>
        <UserName>NYVinod12</UserName>
        <UserPassword>Shop#23</UserPassword>
        <UserStationCode>NYC</UserStationCode>
      </UserAuthentication>
      <TrackingNumber>7838 5606 9128</TrackingNumber>
      <DocumentType>Label</DocumentType>
    </GetMAEXDocument>
  </soap:Body>
</soap:Envelope>';


$host='my.malca-amit.us';
$path='/MyMABookingWebService/MalcaAmitServices.asmx';
$url= 'https://'.$host.$path;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, Array("Content-Type: text/xml"));
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $content);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
$response = curl_exec($ch);
return $response;

if(curl_errno($ch))
   echo curl_error($ch);
else 

curl_close($ch);

?>