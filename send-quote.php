<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid data"]);
    exit;
}

$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$phone = htmlspecialchars($data['phone']);
$weight = htmlspecialchars($data['weight']);
$description = htmlspecialchars($data['description']);
$pickup = htmlspecialchars($data['pickup']);
$destination = htmlspecialchars($data['destination']);
$transport = htmlspecialchars($data['transport']);
$date = htmlspecialchars($data['date']);
$notes = htmlspecialchars($data['notes']);

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.zoho.com'; 
    $mail->SMTPAuth   = true;
    $mail->Username   = 'sales@mesktomolog.com';
    $mail->Password   = 'Fortsungil@33';     
    $mail->SMTPSecure = 'tls'; 
    $mail->Port       = 587;   

    // Recipients
    $mail->setFrom('sales@mesktomolog.com', 'MESKTOMO Website');
    $mail->addAddress('sales@mesktomolog.com'); 
    $mail->addReplyTo($email, $name);            

    // Content
    $mail->isHTML(true);
    $mail->Subject = "🚚 New Quote Request from $name";
    $mail->Body    = "
        <h3>You have a new quote request:</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Weight:</strong> $weight KG</p>
        <p><strong>Description:</strong> $description</p>
        <p><strong>Pickup Location:</strong> $pickup</p>
        <p><strong>Destination:</strong> $destination</p>
        <p><strong>Transport Mode:</strong> $transport</p>
        <p><strong>Pickup Date:</strong> $date</p>
        <p><strong>Notes:</strong> $notes</p>
    ";

    $mail->send();
    echo json_encode(["success" => true, "message" => "Quote email sent via Zoho"]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Mailer Error: {$mail->ErrorInfo}"]);
}
