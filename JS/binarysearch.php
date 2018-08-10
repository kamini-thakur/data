<?php


if(isset($_GET['submit']))
{
	$num=$_GET['name'];
	echo $num."<br>";

	$time_start = microtime(true);
	
	$values=array("ishitasood","kamini","rahul","rashi","shalini","tia","vihan");
	
	echo "<pre>";
	print_r($values);
	echo "</pre>";
	$beg=0;
	$end=count($values)-1;
	$mid=ceil(($beg+$end)/2);

	while($beg <= $end)
	{
		if($num == $values[$mid])
		{
			$loc=$mid;
			break;
		}
		else
		{
			if($values[$mid] < $num)
			{	
				$big=$mid+1;
			}
			else
			{
				$end=$mid-1;
			}
			$mid=ceil(($big+$end)/2);
		}
	}
	if($loc > 0)
	{
		 
		echo "Element is stored at location".$loc.'<br>';
		$time_end = microtime(true);
		$time = $time_end - $time_start;
		echo "Time taken to search:".$time;
	}
	else
	{
		echo "Element not found";
	}

}

?>

<form>
<input type="text" name="name">
<button type="submit" name="submit">Search</button>
</form>