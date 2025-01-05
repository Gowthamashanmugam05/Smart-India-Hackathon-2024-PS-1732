<?php
session_start();

// Get the user input from the form
$userid = $_POST['userid'];
$password = $_POST['password'];
$captcha = $_POST['captcha'];

// Retrieve CAPTCHA from session or storage
$storedCaptcha = $_SESSION['captcha'] ?? '';

// Validate CAPTCHA
if ($captcha === $storedCaptcha) {
    // CAPTCHA is correct, proceed with further login processing

    // Hardcoded user ID and password for demonstration purposes
    $correctUserID = "admin";
    $correctPassword = "password123";

    // Validate User ID and Password
    if ($userid === $correctUserID && $password === $correctPassword) {
        echo "Login successful!";
        // Redirect to the dashboard or another page
        // header('Location: dashboard.php');
    } else {
        echo "Invalid User ID or Password.";
    }
} else {
    echo "CAPTCHA does not match. Please try again.";
}
?>
