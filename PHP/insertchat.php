<?php
$con=mysqli_connect("localhost","root","esfera","chatbox");
if(mysqli_connect_errno())
{
	echo "connection failed";
}

//$time= new Date();
//$time = date('H:i', time());
$time=date('l jS \of F Y h:i:s A');
echo $time;
//$mssg=$_POST['message'];
if(isset($_POST['message']))
{
	$mssg=$_POST['message'];
	//echo $mssg;
	$sql="INSERT INTO chat(chattext,currenttime)VALUES('".$mssg."','".$time."')";
	//echo $sql;
	$qex=mysqli_query($con,$sql);
	if(!$qex)
	{
	    echo "Something wrong";
	}	
}
$sql1="SELECT chattext FROM chat where currenttime='$time'";
//echo $sql1;
$qex1=mysqli_query($con,$sql1);	



?>