<?php
require_once('config.php');

$query="Select * FROM suppliers where supplier_code like '%yaley%' ";
$result=mysqli_query($con,$query);
$sku_pos=1;
while($sql_row=mysqli_fetch_array($result))
    {	
     	
		
		$fileName='tmp/'.$sql_row['supplier_code'].'_inv_qnt.csv';
		$url=$sql_row['box_inventory_file'];
		$return = array();
        $dest = 'tmp/box.csv';
        $fp = fopen ($dest, 'w+');
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_TIMEOUT, 50);
        curl_setopt($ch, CURLOPT_FILE, $fp); 
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        $response = curl_exec($ch); 
        //var_dump($response);
        $content_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
        curl_close($ch);
        fclose($fp);
       
        $upc=array();
        $fba_sku=array();
        if($content_type == "text/csv")
        {
    $header = array("Seller_sku","asin","UPC","Merchant_Active","Merchant_Inactive_because_of_quantity_0","New_Asin_to_be_added","Duplicate_values_in_database");
		    echo $filename='csvs/Merchant_Yaley_'.date("F")."-".date("d").'.csv';
			$filename = fopen($filename, "a+") or die("Unable to open file!");
			 fwrite($filename , implode(",",$header)."\n");
	  			
            if (($handle = fopen($dest, "r")) !== FALSE)
            {
                while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) 
	                {
	                		if(trim($data[0])==='seller_sku' )
	                			continue;
	                		else
		                		{
		                			$upc[]="'".$data[1]."'";
		                		}
			             
	                }
	                echo "<pre>";
	              //  print_r($upc);
                $duplicate_upc=array_unique(array_diff_assoc($upc,array_unique($upc)));	
                

                /*=============get asins from database==============*/
                $asin=array();
 				$found_upcs=array();
 				
 				$get_asin="select asin,upc,sku from sku_asin_upc where upc in (".implode(',', $upc).")";
 				$result=mysqli_query($con,$get_asin);
 				while ($row=mysqli_fetch_array($result)) 
	 				{
	 					$asin[]="'".$row['asin']."'";
	 					$found_upcs[]="'".$row['upc']."'";
	 					
	 				}
	 				/*print_r($asin);
	 				print_r($found_upcs);
	 				die;*/
	 				/*=======Get new upcs to be added to database*/

	 				$asin_to_be_added_to_database=array_diff($upc, $found_upcs);
	 				$asin_to_be_added=implode(", ",str_replace("'","", $asin_to_be_added_to_database));
	 			/*====================Asins found=========================*/	
	 			$total=count($upc);//Total records in file
	 			
	 			/*=============Merchant Active-Inactive====================== */
	 			$qry="select * from Ec_inventory where asin in (".implode(',', $asin).") and qt!=0" ; 				
				$result=mysqli_query($con,$qry);
				$rows=array();	
				
				while($row=mysqli_fetch_array($result))
					{
						$rows[]=$row['sku'];
						$rows[]=$row['asin'];
						$getupc=getupc_yaley($row['asin']);
						$rows[]=$getupc;
						$rows[]='Yes';
						$rows[]='';
						$rows[]='';
						
						$rows[]='';
						create_csv_yaley($rows,$filename);
	                    $rows=array();	
						//print_r($rows);
							
					}
				$qry="select * from Ec_inventory where asin in (".implode(',', $asin).") and qt=0" ; 				
				$result=mysqli_query($con,$qry);
				$rows=array();	
				
				while($row=mysqli_fetch_array($result))
					{
						$rows[]=$row['sku'];
						$rows[]=$row['asin'];
						$getupc=getupc_yaley($row['asin']);
						$rows[]=$getupc;
						$rows[]='';
						$rows[]='Yes';
						$rows[]='';
						
						$rows[]='';
						create_csv_yaley($rows,$filename);
	                    $rows=array();	
						//print_r($rows);
							
					}
			/*
				Add duplicate values in File
			*/	$rows=array();	
				foreach ($duplicate_upc  as $value) 
					{
						$rows[]='';
						$rows[]='';
						$rows[]='';
						$rows[]='';
						$rows[]='';
						$rows[]='';
						
						
						$rows[]=str_replace("'", "", $value);
						create_csv_yaley($rows,$filename);
	                    $rows=array();							
					}
					/*
				Add new upc to database
			*/	$rows=array();	
				foreach ($asin_to_be_added_to_database  as $value) 
					{
						$rows[]='';
						$rows[]='';
						$rows[]='';
						$rows[]='';
						$rows[]='';
						
						$rows[]=str_replace("'", "", $value);
						$rows[]='';
						create_csv_yaley($rows,$filename);
	                    $rows=array();							
					}
					
            }
    	}
    }	
    function getupc_yaley($asin)
    	{
    		global $con;
    		$qry="select upc from sku_asin_upc where asin='$asin'";
    		$result=mysqli_query($con,$qry);
    		if($row=mysqli_fetch_array($result))
    			return $row['upc'];
    	}
    function create_csv_yaley($row,$filename)
		{
			/*print_r($row);
			die;*/
			fwrite($filename , implode(",",$row)."\n");
		}
?>