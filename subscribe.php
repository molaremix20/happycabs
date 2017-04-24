<?php

$email = $_POST['email'];
$to  = 'gilsontomy@gmail.com';
$subject = 'New newsletter subscription';
$body = $email;
if(mail( $recipient, $subject, $body, "From:gilsontomy@gmail.com" )){
	$array = array('status'=>'true');
}else{
	$array = array('status'=>'false');
}
print json_encode($array);
