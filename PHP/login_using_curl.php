


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




/*
$post_data['username']="php";
$post_data['password']="admin";
//$post_data['send']="submit";

foreach($post_data as $key => $value)
{
	$post_items[]=$key.'='.$value;
}
$post_string=implode('&',$post_items);

$url="localhost/showdata.php";
$ch=curl_init($url);



curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);

$result=curl_exec($ch);

//print_r(curl_getinfo($ch));
echo curl_errno($ch)."-".curl_error($ch);

 
curl_close($ch);

*/


?>
