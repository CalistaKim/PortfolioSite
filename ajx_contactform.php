<?php 

$name=$_GET['name'];
$email=$_GET['email'];
$message=$_GET['message'];

$leaddate=time();

// values for detecting spambots 
// $filledvalue=$_GET['filledvalue'];
// $emptyvalue=$_GET['emptyvalue'];

// if ($emptyvalue || $filledvalue != 'changed'){
// 	die('xxx');
// }


// send email
$message = wordwrap($message,70);

$subject='name: '.$name;

mail("calistakim99@gmail.com",$subject, $message, $email);


?>
	<div class="successmsg center"><h1>Message sent at the speed of light !</h1> <span>Looking forward to reading it, chat soon!</span></div>
<?php 
?>