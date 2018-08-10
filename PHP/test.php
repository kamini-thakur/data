<?php

phpinfo();
//1 2 -3 -4 5 6 -7 -8 9 10

// $n=100;
// $n++;
// for($i=1; $i < $n ; $i++)
// {	
// 	echo '&nbsp'.$i;
	
// 	if($i%2 == 0)
// 	{
// 		$i++;
// 		echo '&nbsp'.'-'.$i;
// 		$i++;
// 		echo '&nbsp'.'-'.$i;
// 	}	
// }

$n=100;

for($i=1,$j=2,$k=2; $i < $n ; $i+=2,$j+=2,$k++)
{ 
	echo pow(-1,$k)*$i." &nbsp;".pow(-1,$k)*$j."&nbsp;";

}

// $product = array( "product" => array(
//  	"id" => $PlatformProductId, "published" => false ));
//  echo "<pre>";
//  print_r($product);
//  echo "</pre>";

$meta = array( "product" => array( "metafields"=> array(
	      		"key"=> "AddedInMVP",
	            "value"=> "Fashioncircle-".$vendorName,
	            "value_type"=> "string",
	            "namespace"=> "AddedToFashionCircle"
		    ), 
			array(
	            "key"=> "FCProductPrice",
	            "value"=> $data['selling_price'],
	            "value_type"=> "string",
	            "namespace"=> "FashionCirclePrice"
          	),
          	array(
	            "key"=> "FCPDropshippingPrice",
	            "value"=> $data['dropshipping_price'],
	            "value_type"=> "string",
	            "namespace"=> "FashionCircleDropPrice"
	        )
  )
);




 $meta = array( "product" =>array("metafields"=> array(
          '0' => array(
            "key"=> "AddedInMVP",
            "value"=> "Fashioncircle-".$vendorName,
            "value_type"=> "string",
            "namespace"=> "AddedToFashionCircle"
          ),
          '1' => array(
            "key"=> "FCProductPrice",
            "value"=> $data['selling_price'],
            "value_type"=> "string",
            "namespace"=> "FashionCirclePrice"
          ),
          '2' => array(
            "key"=> "FCPDropshippingPrice",
            "value"=> $data['dropshipping_price'],
            "value_type"=> "string",
            "namespace"=> "FashionCircleDropPrice"
          )
        )
      )
 );

 echo "<pre>";
 print_r($meta);
 echo "</pre>";

?>