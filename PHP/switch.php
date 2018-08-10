<form>
<!-- <input type="text" name="value">
<button type="submit" name="sub">Submit</button> -->
</form>


<?php

phpinfo();

//use of switch case

// if(isset($_GET['sub']))
// {
// 	$val=$_GET['value'];
// 	//echo $val;

// switch($val)
// {
// 	case '1':
// 	 		echo "i am $val";
// 			break;
// 	case '2': 
// 			echo "i am $val";
// 			break;

// 	default:
// 		echo "wrong choice";
// }

// }

/*===============================*/
//addition,deletion,multiply using switch case

// $a=5;
// $b=10;
// "Please enter 1 to add";
// "Please enter 2 to sub";
// "Please enter 3 to mul";
// if(isset($_GET['sub']))
// {
// $val=$_GET['value'];
// //echo $val;
// switch($val)
// {
// 	case '1': echo $res=$a+$b;
// 	break;
// 	case '2': echo $res=$a-$b;
// 	break;
// 	case '3': echo $res=$a*$b;
// 	break;
	
// 	default: "wrong";
// }
// }

?>

<p id="demo"></p>
<script>
/*===============================*/
// display today using switch case

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;
</script>

