<?php
include "mail/class.phpmailer.php";
//include("mail/class.smtp.php");
/*if(isset($_POST['submit']))	
{*/

	$Name = $_POST["Name"];
	$Mobile_No = $_POST["Mobile_No"];
	$EMail = $_POST["EMail"];
	$Message = $_POST["Message"];
	

		$Comments = "	<table>
					<tr>
						<td>Name</td><td> : </td><td>$Name</td>
					</tr>
					<tr>
						<td>Mobile No</td><td> : </td><td>$Mobile_No</td>
					</tr>
					
					<tr>
						<td>EMail</td><td> : </td><td>$EMail</td>
					</tr>
					<tr>
						<td>Message</td><td> : </td><td>$Message</td>
					</tr>
									
				</table>
						";	

	$mail = new PHPMailer(); // create a new object
	$mail->IsSMTP(); // enable SMTP
	$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
	$mail->SMTPAuth = true; // authentication enabled
	$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
	$mail->Host = "mail.velloretravels.com";
	$mail->Port = 25; // or 465
	$mail->Username = "noreply@velloretravels.com";
	$mail->Password = "0p,20m9Z9.k8";
	$mail->Priority = 1; // Highest priority - Email priority (1 = High, 3 = Normal, 5 = low)
	$mail->CharSet = 'UTF-8';
	$mail->Encoding = '8bit';
	$mail->ContentType = 'text/html; charset=utf-8\r\n';
	//$mail->AddAddress("deivakanni@jbcs.co.in");//andal@vastushastram.com gd.generaldrive@gmail.com
	$mail->AddAddress("admin@vellorecity.com");//pchockalingam@gmail.com
	$mail->AddReplyTo($EMail, $Name); 
	$mail->SetFrom('noreply@velloretravels.com', $Name); //admin@generaldrive.in
	$mail->Subject = "Velloretravels.com contact form";
	$mail->Body = $Comments;
	$mail->IsHTML(true);
	 if(!$mail->Send()){

           // echo "<script>window.location.href='contact.php?error=There was an error trying to send your message. Please try again later.  ';</script>"; /*. 
	 	$mail->ErrorInfo; 
	}
	else{
		echo "<script>window.location.href='thanks.php?msg=Thank you for your message. It has been sent. ';</script>";
	}
	$mail->SmtpClose();

?>
