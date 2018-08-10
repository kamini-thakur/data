<?php
//https://chardikala.box.com/shared/static/po0zio4ojdz3p2dcf2wsbny2yw4648fl.csv

	
		//$fileName='tmp/'.$sql_row['supplier_code'].'_inv_qnt.csv';

require_once('api.php');    

		$url='https://chardikala.box.com/shared/static/po0zio4ojdz3p2dcf2wsbny2yw4648fl.csv';
		$return = array();
        $dest = 'tmp/box.csv';

        $fp = fopen ($dest, 'w+');
        //echo "File opening here";
        var_dump($fp);
        //echo "<pre>File openeing process finished here.";
        chmod($dest, 0777);
        $ch = curl_init($url);
        echo "<pre>";
        var_dump($ch);
        curl_setopt($ch, CURLOPT_TIMEOUT, 50);
        curl_setopt($ch, CURLOPT_FILE, $fp); 
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        $response = curl_exec($ch); 
        var_dump($response);
        $content_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
        curl_close($ch);
        fclose($fp);
   //  die;
     if (($handle = fopen($dest, "r")) !== FALSE)
            {
                echo "<pre>";
       $data = fgetcsv($handle, 1000, ",");
       print_r($data);
       $pos= array_search('upc', $data);
       
    
   }
       
   $filename='tmp/new'.date("F")."-".date("d").'.csv';
   $filename = fopen($filename, "a+") or die("Unable to open file!");
  
  
    $upc=array();
    $counter=0;
    if (($handle = fopen($dest, "r")) !== FALSE)
    {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE)
        {
          $upc[]=$data[$pos];
        }
        array_shift($upc);
   /* print_r($final);
   die;*/
    fclose($handle);

  
    }
    $params = array(
            "AWSAccessKeyId" => 'AKIAJBBEFLQZXZD2EBRQ',
            "MarketplaceId" => 'ATVPDKIKX0DER',
            "SellerId" => 'A2J5IFJG6W8TUT',
            "SecretKey" => 'dYSmQj61w1fO/X0rMGbAIx+ej9Bwvf7KHimqBib0'
        );
      
      $filename1='tmp/active'.date("F")."-".date("d").'.csv';
            $filename1 = fopen($filename1, "a+") or die("Unable to open file!");
            $header = array("Seller_sku","asin","UPC","Fba_Active","Fba_Inactive_because_of_quantity_0");
            fwrite($filename1 , implode(",",$header)."\n");
            
 /*echo "<pre>";
 print_r($params);*/
 foreach($upc as $value)
getAmzOrders($params,$value,$filename1);
//  getAmzOrders();            


?>
        
     