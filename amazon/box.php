<?php
//https://chardikala.box.com/shared/static/po0zio4ojdz3p2dcf2wsbny2yw4648fl.csv

	
		//$fileName='tmp/'.$sql_row['supplier_code'].'_inv_qnt.csv';
		$url='https://chardikala.box.com/shared/static/po0zio4ojdz3p2dcf2wsbny2yw4648fl.csv';
		$return = array();
        $dest = 'tmp/box.csv';

        $fp = fopen ($dest, 'w+');
        echo "File opening here";
        var_dump($fp);
        echo "<pre>File openeing process finished here.";
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
       
      
    	?>
        
     