<?php

$f1=0;
$f2=1;
$f3=$f1+$f2;
$num=10;
echo $f1."<br>".$f2."<br>";
for($i=0;$i<=$num;$i++)
{

	echo $f3."<br>";
	$f1=$f2;
	$f2=$f3;
	$f3=$f1+$f2;

}


?>