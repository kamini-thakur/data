<?php

for($i=5; $i>1; $i++)
{

	for($j=5; $j>=$i;$j--)
	{

		echo "&nbsp";
	}
	for($k=5; $k<=$i-5;$k--)
	{
		echo "&nbsp*";
	}
	echo "<br>";
}
for($i=1; $i<=5; $i++)
{

	for($j=1; $j<=$i;$j++)
	{

		echo "&nbsp";
	}
	for($k=1; $k<=5-$i;$k++)
	{
		echo "&nbsp*";
	}
	echo "<br>";
}

?>