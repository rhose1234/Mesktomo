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

$formType = htmlspecialchars($data['formType'] ?? 'individual');

$mail = new PHPMailer(true);

try {
    // SMTP Settings
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
    $mail->addReplyTo($data['email'], $data['name'] ?? $data['contactPerson']);

    // Email content
    $mail->isHTML(true);

    if ($formType === 'company') {
        $companyName = htmlspecialchars($data['companyName']);
        $contactPerson = htmlspecialchars($data['contactPerson']);
        $email = htmlspecialchars($data['email']);
        $message = htmlspecialchars($data['message']);

        $mail->Subject = "🏢 New Contact from $companyName";
        $mail->Body = "
            <h3>New Company Contact:</h3>
            <p><strong>Company Name:</strong> $companyName</p>
            <p><strong>Contact Person:</strong> $contactPerson</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong><br>$message</p>
        ";
    } else {
        $name = htmlspecialchars($data['name']);
        $email = htmlspecialchars($data['email']);
        $message = htmlspecialchars($data['message']);

        $mail->Subject = "✉️ New Message from $name";
        $mail->Body = "
            <h3>New Individual Contact:</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong><br>$message</p>
        ";
    }

    $mail->send();
    echo json_encode(["success" => true, "message" => "Message sent successfully!"]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Mailer Error: {$mail->ErrorInfo}"]);
}
