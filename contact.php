<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid data"]);
    exit;
}

// Sanitize input
$type = isset($data['type']) ? htmlspecialchars($data['type']) : "individual"; // default individual
$name = isset($data['name']) ? htmlspecialchars($data['name']) : "";
$email = isset($data['email']) ? htmlspecialchars($data['email']) : "";
$messageContent = isset($data['message']) ? htmlspecialchars($data['message']) : "";

// Extra fields for company
$companyName = isset($data['companyName']) ? htmlspecialchars($data['companyName']) : "";
$companySize = isset($data['companySize']) ? htmlspecialchars($data['companySize']) : "";
$serviceNeeded = isset($data['serviceNeeded']) ? htmlspecialchars($data['serviceNeeded']) : "";

// Prepare subject
$subject = ($type === "company") 
    ? "🏢 Company Inquiry via MESKTOMO Website - $companyName" 
    : "📩 Contact Message via MESKTOMO Website - $name";

// Build message
$message = "You have a new contact message:\n\n";

if ($type === "company") {
    $message .= "Company Name: $companyName\n";
    $message .= "Company Size: $companySize\n";
    $message .= "Service Needed: $serviceNeeded\n";
    $message .= "Contact Person: $name\n";
    $message .= "Email: $email\n\n";
    $message .= "Message:\n$messageContent\n";
} else {
    $message .= "Name: $name\n";
    $message .= "Email: $email\n\n";
    $message .= "Message:\n$messageContent\n";
}

// Email settings
$to = "sales@mesktomolog.com"; 
$headers = "From: sales@mesktomolog.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send mail
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["success" => true, "message" => "Contact email sent"]);
} else {
    echo json_encode(["success" => false, "message" => "Contact email failed"]);
}
?>
