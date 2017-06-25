<?php
header('Content-type: application/json');
$errors = '';
if(empty($errors))
{
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$message = $request->message;
	$telnumber = $request->telephon;
	$from_name = $request->name;
	$to_email = 'slippa.87@gmail.com';
	$contact = "<p><strong>Name:</strong> $from_name</p>
							<p><strong>Tel:</strong> $telnumber</p>";
	$content = "<p>$message</p>";
	$website = 'Мои Перевозки';

	$email_subject = "$website: Alex Huvalot $from_name ";
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';

	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	mail($to_email,$email_subject,$email_body,$headers);
	$response_array['status'] = 'success';
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>
