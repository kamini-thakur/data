

<?php

$filename='tmp/userdata'.date("F")."-".date("d").'.csv';
$filename= fopen($filename, "w+") or die("Unable to open file!");
$header = array("username","bio","website","profile_picture","full_name","id");
fwrite($filename , implode(",",$header)."\n");
fclose($filename);


/*
if (($handle = fopen($filename, "w")) !== FALSE)
    {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE)
        {

        }
    }
*/

/*
session_start();
if(!empty($_SESSION['userdetails']))
{
	//header('Location:');
}

require 'instagram_config.php';

$loginurl=$instagram->getLoginUrl();
echo "<a href="$loginurl">sign in with instagram</a>"

*/
?>