<html>
<head>
	<title>chatbox</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	<script type="text/javascript">

		// POST data
		$(document).ready(function(){
			 $('#send').on('click',function(event){
			 	//event.preventDefault();
				var msg=$("#chattext").val();
				$.ajax({
				type: "POST",
				url: "insertchat.php",
				data: {"message": msg},
				success: function(response){
					
			  		}
				});
			});
		});

		// GET data
		$(document).ready(function(){
				//var msg=$("#chattext").val();
				//setInterval(function(){
				$.ajax({
				type: "GET",
				url: "getchat.php",
				success: function(response){
					//console.log(response);
					//alert("kamini");
					$("#insert").append(response);

			  		}
				});
				//},2000);
			
		});
		

		
	</script>
</head>

<body>


<table align="center" style="margin-top:20px;" border="1">
<tr><th style="background-color: green;"><h4>Chatbox</h4></th></tr>
<tr><td>
<p id="insert" style="height: 250px;"> 
<?php
// while($result=mysqli_fetch_array($qex1)){
// 	//echo $result;
//   echo $result['chattext'].$result['currenttime']."<br>"; 
// }
?>
</p>
</td></tr>
<tr><td>

<form>
<input type="text" id="chattext" name="chattext">
<button type="submit" id="send" name="send">Submit</button>
</form>

</td>
</tr>
</table>

</body>
</html>