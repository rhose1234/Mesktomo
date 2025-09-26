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
$phone = htmlspecialchars($data['phone']);
$weight = htmlspecialchars($data['weight']);
$description = htmlspecialchars($data['description']);
$pickup = htmlspecialchars($data['pickup']);
$destination = htmlspecialchars($data['destination']);
$transport = htmlspecialchars($data['transport']);
$date = htmlspecialchars($data['date']);
$notes = htmlspecialchars($data['notes']);

$to = "sales@mesktomolog.com"; 
$subject = "🚚 New Quote Request from $name";

$message = "
You have a new quote request:

Name: $name
Email: $email
Phone: $phone
Weight: $weight KG
Description: $description
Pickup Location: $pickup
Destination: $destination
Transport Mode: $transport
Pickup Date: $date
Notes: $notes
";

$headers = "From: sales@mesktomolog.com\r\n"; 
$headers .= "Reply-To: $email\r\n"; 
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["success" => true, "message" => "Quote email sent"]);
} else {
    echo json_encode(["success" => false, "message" => "Quote email failed"]);
}
?>
