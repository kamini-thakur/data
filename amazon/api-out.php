<?php

        function getAmzOrders($_params,$upc,$filename1)
    {
        $sku="FC02".substr($upc,-6);
        $params = array(
                    'Action' => "ListInventorySupply",
                    'Version'=>'2010-10-01',
                    'SignatureMethod' => "HmacSHA256",
                    'SignatureVersion' => "2",
                    #'Signature'=>'ZRA9DR5rveSuz%2F1D18AHvoipg2BAev8yblPQ1BbEbfU%3D',
                    'Timestamp'=> gmdate("Y-m-d\TH:i:s.\\0\\0\\0\\Z", time()),
                    'ResponseGroup'=>'Detailed',
                     'SellerSkus.member.1'=>$sku
                     
                    // ''=>          
                           
                );

        //$params = array_merge($params,$final);

        $params = array_merge($params,$_params);
        print_r($params);
       //$params = array_merge($params,$final);
        
        unset($params['SecretKey']);
        unset($params['MarketplaceId']);

        $url_parts = array();
        foreach(array_keys($params) as $key)
            $url_parts[] = $key . "=" . str_replace('%7E', '~', rawurlencode($params[$key]));
        sort($url_parts);
         $url_string = implode("&", $url_parts);
        //die;
        $string_to_sign = "GET\nmws.amazonservices.com\n/FulfillmentInventory/2010-10-01\n" . $url_string;
        $signature = hash_hmac("sha256", $string_to_sign,$_params['SecretKey'], TRUE);
        $signature = urlencode(base64_encode($signature));
        $url = "https://mws.amazonservices.com/FulfillmentInventory/2010-10-01" . '?' . $url_string . "&Signature=" . $signature;
        echo "<br>";
        echo ($url);
        //die;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        $response = curl_exec($ch);
       $row=array();
        $response_header = curl_getinfo($ch);
        curl_close($ch);
        if ($response_header["http_code"] == 200)
        {           
            $responseDoc =new DOMDocument();
            $responseDoc->loadXML($response);
            $response = simplexml_import_dom($responseDoc);             
            echo "<pre>";
            print_r($response);
            $qt=($response->ListInventorySupplyResult->InventorySupplyList->member->TotalSupplyQuantity);

            $asin=($response->ListInventorySupplyResult->InventorySupplyList->member->ASIN);
            $sellersku=($response->ListInventorySupplyResult->InventorySupplyList->member->SellerSKU);
            $row[]=$sellersku;
            $row[]=$asin;
            $row[]=$upc;
            if($qt>0)
                $row[]='Yes';
            else
                $row[]='';

            if($qt>0)
                $row[]='';
            else
                $row[]='Yes'; 
           fwrite($filename1 , implode(",",$row)."\n");
        
            
        echo "</pre>";
            return array("err"=>0,"orders"=>$response->ListOrdersResult->Orders);
        }
        return array("err"=>1);
    }
?>