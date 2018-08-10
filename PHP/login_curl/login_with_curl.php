<?php


$post_data = array(
        'username' => 'php',
        'password' => 'admin'
    );
   
$url="localhost/showdata.php";
$ch=curl_init($url);

curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);    
curl_exec($ch);
curl_close($ch);

?>