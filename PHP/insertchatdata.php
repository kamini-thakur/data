<?php
$con=mysqli_connect("localhost","root","esfera","chatbox");
if(mysqli_connect_errno())
{
	echo "connection failed";
}
if(isset($_GET['message']))
{
	$mssg=$_GET['message'];
	$sql="INSERT INTO chat(chattext)VALUES('".$mssg."')";
	$qex=mysqli_query($con,$sql);
	if(!$qex)
	{
	    echo "Something wrong";
	}	
}
$sql1="SELECT * FROM chat";
$qex1=mysqli_query($con,$sql1);	

