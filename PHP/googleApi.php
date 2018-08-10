<?php

$ch = curl_init();

$url= 'https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford&key=AIzaSyCZLcSJaMtjlfWilLho-h5U0VeewTvaAcw';

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);

$output=curl_exec($ch);
//print_r($output);

// $out=json_encode($output);
// var_dump($out);
$result=json_decode($output);
// echo '<pre>';
// print_r($result);
// echo '</pre>';

echo '<pre>';
print_r($result->routes[0]->legs[0]->distance->value);
echo '</pre>';
curl_close($ch);



?>

