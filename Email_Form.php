<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $subject = $_POST['fname'];
    $email = $_POST['email'];
    $content = $_POST['text'];

    // Basic email format validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Hunter.io API key and endpoint
    $api_key = '7827702030069245f9f6085362f405abe8f2c08a'; 
    $url = "https://api.hunter.io/v2/email-verifier?email=$email&api_key=$api_key";

    // Initialize cURL to send the request to Hunter.io
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute cURL request and get the response
    $response = curl_exec($ch);
    curl_close($ch);

    // Decode the JSON response
    $data = json_decode($response, true);

    // Check if the email is valid
    if ($data['data']['result'] == 'valid') {
        // Email is valid, proceed to send the email

        // Set up email parameters
        $to = "yanickvc33@gmail.com";
        $headers = "From: " . $email;
        $message = "Subject: " . $subject . "\n\n" . $content;

        // Send the email using PHP's mail() function
        if (mail($to, $subject, $message, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email.";
        }
    } else {
        echo "Invalid email address.";
    }
}
?>