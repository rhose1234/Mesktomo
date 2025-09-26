<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid data"]);
    exit;
}

$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$messageContent = htmlspecialchars($data['message']);

$to = "sales@mesktomolog.com"; 
$subject = "📩 Contact Message via MESKTOMO Website - $name";

$message = "
You have a new contact message:

Name: $name
Email: $email

Message:
$messageContent
";

$headers = "From: sales@mesktomolog.com\r\n"; 
$headers .= "Reply-To: $email\r\n"; 
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["success" => true, "message" => "Contact email sent"]);
} else {
    echo json_encode(["success" => false, "message" => "Contact email failed"]);
}
?>
