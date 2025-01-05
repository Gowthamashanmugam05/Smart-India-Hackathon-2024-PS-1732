<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userId = $_POST['userId'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $issueType = $_POST['issueType'];
    $description = $_POST['description'];

    // Handle file upload
    if (isset($_FILES['screenshot']) && $_FILES['screenshot']['error'] == 0) {
        $screenshot = $_FILES['screenshot']['name'];
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($screenshot);
        move_uploaded_file($_FILES['screenshot']['tmp_name'], $uploadFile);
    } else {
        $screenshot = 'No file uploaded';
    }

    // Email setup
    $to = 'denikrido18@gmail.com'; // Replace with your email
    $subject = 'New Issue Reported';
    $message = "
    User ID: $userId\n
    Email: $email\n
    Phone: $phone\n
    Issue Type: $issueType\n
    Screenshot: $screenshot\n
    Description:\n$description
    ";

    $headers = "From: denkrido17@gmail.com";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Issue reported successfully!";
    } else {
        echo "Failed to report issue. Please try again.";
    }
}
?>
