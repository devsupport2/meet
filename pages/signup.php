<?php
// require ReCaptcha class
require('recaptcha-master/src/autoload.php');

$toemail = Trim(stripslashes($_POST['email']));



// configure
// an email address that will be in the From field of the email.

$from = 'Request for Demo Sign Up <info@vatchit.in>';
$bcc = 'Vat Chit <thakor1988@gmail.com>, <designsupport@ultrainfotech.net>';

// an email address that will receive the email with the output of the form
$sendTo = $toemail;


// subject of the email
$subject = 'New message from Request for Sign Up VatChit.in';



// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message');




// message that will be displayed when everything is OK :)
$okMessage = 'Sign Up Request for vatchit.in form successfully submitted. Thank you, I will get back to you soon!';

// If something goes wrong, we will display this message.
$errorMessage = 'There was an error while submitting the form. Please try again later';




// ReCaptch Secret
$recaptchaSecret = '6Lc7SvgUAAAAADBgQ44RkRE95oPG4uGhA180AVY4';

// let's do the sending

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

try {
if (!empty($_POST)) {

// validate the ReCaptcha, if something is wrong, we throw an Exception,
// i.e. code stops executing and goes to catch() block

if (!isset($_POST['g-recaptcha-response'])) {
throw new \Exception('ReCaptcha is not set.');
}

// do not forget to enter your secret key from https://www.google.com/recaptcha/admin

$recaptcha = new \ReCaptcha\ReCaptcha($recaptchaSecret, new \ReCaptcha\RequestMethod\CurlPost());

// we validate the ReCaptcha field together with the user's IP address

$response = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);

if (!$response->isSuccess()) {
throw new \Exception('ReCaptcha was not validated.');
}

    
    
    
// everything went well, we can compose the message, as usually
//$emailText = "You have a new message from your contact form\n=============================\n";

    
    
//foreach ($_POST as $key => $value) {
// If the field exists in the $fields array, include it in the email
/*if (isset($fields[$key])) {
$emailText .= "$fields[$key]: $value\n";
}
}*/


$name = Trim(stripslashes($_POST['name']));
$email = Trim(stripslashes($_POST['email']));
$phone = Trim(stripslashes($_POST['phone']));
$message = Trim(stripslashes($_POST['message']));



$emailText = 
'<html>
<head>
<title>HTML email</title>
</head>
<body>



<table style="border:solid 1px #bcc2cf; font-family: Arial,Helvetica,sans-serif;" align="center" width="750" cellspacing="0" cellpadding="0" border="0">
<tbody>

<tr> 
<td style="padding:15px 0px;  font-size: 14px;  color: #373737; background-color: #ffffff;" align="center" valign="middle">
<a href="#"> <img border="0" src="http://ultrasmartwebdesigns.com/VatChit/assets/images/Email-Logo-VatChit.jpg"/></a> 
</td>
</tr>


<tr>
<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px; color:#373737; background-color: #eee; padding:20px;" align="left" valign="top">

<table width="100%" cellspacing="0" cellpadding="0" border="0">
<tbody>
<tr>
<td style="background-color:#fff; padding:15px; border:solid 1px #dbdfe6" align="left" valign="top">

<table width="100%" cellspacing="0" cellpadding="0" border="0">
<tbody>

<tr>
<td align="left" valign="top" width="412">

<table width="100%" cellspacing="0" cellpadding="4" border="0">

<tbody>
<tr>
<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top" width="12%">
<strong> Name:</strong>
</td>

<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top" width="77%">
'.$name. ' 
</td>
</tr>

<tr>
<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top" width="12%"><strong> Email: </strong></td>

<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top"> '.$email.' </td>
</tr>

<tr>
<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top" width="12%"><strong> Mobile No.: </strong></td>

<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top"> '.$phone.' </td>
</tr>



<tr>
<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top">
<strong>Message:</strong></td>
<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top">
'.$message.'
</td>
</tr>



</tbody>
</table>
</td>

</tr>
</tbody>
</table>




<table width="100%" cellspacing="0" cellpadding="0" border="0">
<tbody>

<tr>
<td colspan="3" style="font-family:Arial,Helvetica,sans-serif; font-size:14px;color:#373737; border-bottom:solid 1px #dbdfe6" align="left" valign="top" height="25">
&nbsp;
</td>
</tr>

<tr>
<td colspan="3" align="left" valign="top" height="10"></td>
</tr>


<tr>
<td colspan="3" align="left" valign="top"> <b>If you have any questions, please fell free to cantact us.</b> </td>
</tr>

<tr>
<td colspan="3" align="left" valign="top" height="5"></td>
</tr>


<tr>
<td align="left" valign="top" width="412">

<table width="100%" cellspacing="0" cellpadding="4" border="0">

<tbody>
<tr>
<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top" width="12%">
<strong> Address: </strong></td>

<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top"> 
507 Sears, Gotri Road, Sevasi, Vadodara, Gujarat 390021 IN
</td>
</tr>

<tr>
<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top"><strong> Mobiel: </strong></td>

<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top"> 
+91 94 27 61 13 04 </td>
</tr>


<tr>
<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top" ><strong> Email:</strong></td>

<td style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#373737" align="left" valign="top">
<a href="mailto:info@vatchit.in"> info@vatchit.in </a> </td>
</tr>


</tbody>
</table>
</td>

</tr>
</tbody>
</table>

</td>


</tr>
</tbody>
</table>


</td>
</tr>
</tbody>
</table>



</body></html>';




// All the neccessary headers for the email.
$headers = array('Content-Type: text/html; charset="UTF-8";',
'From: ' . $from,
'Reply-To: ' . $from,
'Return-Path: ' . $from,
'Bcc: ' . $bcc
);





// Send email
mail($sendTo, $subject, $emailText, implode("\n", $headers));

    
    
$responseArray = array('type' => 'success', 'message' => $okMessage);
}
} catch (\Exception $e) {
$responseArray = array('type' => 'danger', 'message' => $e->getMessage());
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
$encoded = json_encode($responseArray);

header('Content-Type: application/json');

echo $encoded;
} else {
echo $responseArray['message'];
}
