<?php
include("instagram_config.php");






$code = $_GET['code'];

// Check whether the user has granted access
if (true === isset($code))
{

	// Receive OAuth token object
	$data = $instagram->getOAuthToken($code);

	if(empty($data->user->username))
	{
			header('Location: login.php');
	}
	else
	{
		session_start();
		$_SESSION['userdetails']=$data;
		$user=$data->user->username;
		$bio=$data->user->bio;
		$website=$data->user->website;
		$profile_picture=$data->user->profile_picture;
		$fullname=$data->user->full_name;
		$id=$data->user->id;
		

	}
?>