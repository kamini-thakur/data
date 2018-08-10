<?php
//header('Content-Type: application/json');
//echo phpinfo();

$url='http://myapps-2.myshopify.com/collections/all/XXL?view=json';
$ch = curl_init();


curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);

$output=curl_exec($ch);
//print_r($output);

// $out=json_encode($output);
// var_dump($out);
$result=json_decode($output);
 var_dump($result);

//echo $result->'2';
//echo $output->TotalProductCount;

// foreach ($output->Product_Items as $key => $value) {
// 	echo $val->id;
// }

curl_close($ch);



// function httpGet($url)
// {
// $ch = curl_init(); 

// curl_setopt($ch,CURLOPT_URL,$url);
// curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
// // curl_setopt($ch,CURLOPT_HEADER, false); 

// $output=curl_exec($ch);

// curl_close($ch);
// return $output;
// }

// var_dump(json_decode(httpGet("http://myapps-2.myshopify.com/collections/all/XXL?view=json"),true));

?>