<?php
$con=mysqli_connect("localhost","root","esfera","chatbox");
if(mysqli_connect_errno())
{
	echo "connection failed";
}

//$time= new Date();
//$time = date('H:i', time());
$time=date('l jS \of F Y h:i:s A');
//echo $time;
//$mssg=$_POST['message'];
$sql1="SELECT * FROM chat where currenttime='$time'";
//echo $sql1;
$qex1=mysqli_query($con,$sql1);	
while($result=mysqli_fetch_array($qex1)){
	//echo $result;
  echo $result['chattext'].$result['currenttime']."<br>"; 
}


?>