<?php

$destination="doz1010@gmail.com";


//Variables are denoted by the '$' sign.  The POST method
//takes the 'names' from the form in your html and assigns
//them to the variables here.  The $newMes variable takes
//the info and combines it to make up the messege that will
//be sent to you.

$name=$_POST['name']; 				
$company=$_POST['company'];
$email=$_POST['email'];
$phone=$_POST['phone'];		
$url=$_POST['url'];	
$seo=$_POST['seo'];	
$joomla=$_POST['joomla'];	
$wordpress=$_POST['wordpress'];
$website=$_POST['website'];		
$logo=$_POST['logo'];	
$other=$_POST['other'];	
$mobileSelect = $_POST['options'];
$info=$_POST['info'];
$from ="New Portfolio Comment";
$header="From: $name";			
$newMes="Name: $name\n				
Company: $company\n
Email: $email\n
Phone: $phone\n
Url: $url\n
SEO: $seo\n
Joomla: $joomla\n
Wordpress: $wordpress\n
Website: $website\n
Logo: $logo\n
Other: $other\n
Mobile Options: $mobileSelect\n
Message: $info\n";


ini_set('sendmail_from', 'doz1010@gmail.com'); //Suggested by "Some Guy"


//The 'Mail' method is what sends the email.  Notice the
//parameters are in a specific order:	(destination, 
//from, email content, header)

	mail($destination,$from,$newMes,"From: Comment about Portfolio");

//This line sends you to the thank you page
header( 'Location: http://www.richardrblake.com/#thanks' ) ;
?>

