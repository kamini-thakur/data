<?php
error_reporting(E_ALL);

$content='<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <CreateMAEXDomesticShipment xmlns="http://tempuri.org/">
      <UserAuthentication>
        <UserName>NYVinod12</UserName>
        <UserPassword>Shop#23</UserPassword>
        <UserStationCode>NYC</UserStationCode>
      </UserAuthentication>
      <ShipmentDetails>
        <CourierType>Fedex or UPS or USPS</CourierType>
        <ServiceType>PriorityOvernight or StandartOvernight or FedexFirstOvernight or FedexPriorityOvernight or FedexStandardOvernight or Fedex2Day or Fedex2DayAM or Fedex3DaySaver or FedexGround or UpsNextDayAir or UpsNextDayAirEarlyAM or UpsNextDayAirSaver or Ups2DayAir or Ups3DaySelect or UpsGround or UspsPriorityMail or UspsExpressMail</ServiceType>
        <PackageType>YourPackaging or Envelope or FedexBox or FedexYourPackaging or FedexEnvelope or UpsExpressBox or UpsCustomerPackage or UspsPackage</PackageType>
        <SignatureOption>DirectSignature or AdultSignature</SignatureOption>
        <IsCODShipment>boolean</IsCODShipment>
        <CODValueUSD>double</CODValueUSD>
        <CODPaymentMethod>Any or GuaranteedFunds</CODPaymentMethod>
        <ConsigneeName>string</ConsigneeName>
        <ConsigneeCompanyName>string</ConsigneeCompanyName>
        <ConsigneeNameOnLabel>string</ConsigneeNameOnLabel>
        <ConsigneeAddress1>string</ConsigneeAddress1>
        <ConsigneeAddress2>string</ConsigneeAddress2>
        <ConsigneeZipCode>string</ConsigneeZipCode>
        <ConsigneePhoneCountryCode>string</ConsigneePhoneCountryCode>
        <ConsigneePhoneAreaCode>string</ConsigneePhoneAreaCode>
        <ConsigneePhoneNumber>string</ConsigneePhoneNumber>
        <ConsigneeReference>string</ConsigneeReference>
        <ConsigneeEmail>string</ConsigneeEmail>
        <AdditionalEmailForPickupAndDelivery>string</AdditionalEmailForPickupAndDelivery>
        <Remarks>string</Remarks>
        <IsSaturdayDelivery>boolean</IsSaturdayDelivery>
        <IsResidentialAddress>boolean</IsResidentialAddress>
        <PackageWeight>double</PackageWeight>
        <LiabilityValueUSD>double</LiabilityValueUSD>
        <PickUpDateTime>dateTime</PickUpDateTime>
        <PackageLength>double</PackageLength>
        <PackageWidth>double</PackageWidth>
        <PackageHeight>double</PackageHeight>
        <PickupMethod>PickupByCourier or DropShipmentAtCourierBranch</PickupMethod>
        <ShipperReference>string</ShipperReference>
        <PickupAddress>string</PickupAddress>
        <PickupZipCode>string</PickupZipCode>
        <PickupCity>string</PickupCity>
        <PickupState>string</PickupState>
        <PickupPhoneNumber>string</PickupPhoneNumber>
      </ShipmentDetails>
    </CreateMAEXDomesticShipment>
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
/*
if(curl_errno($ch))
   echo curl_error($ch);
else */

curl_close($ch);

?>