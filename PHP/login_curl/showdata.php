
<?php


$user1=$_POST['username'];
$pass=$_POST['password'];
if(($user1=='esfera') && ($pass=='admin'))
{
	echo "welcome $user1";
}
else
{
	echo "wrong username or password";
}


?>