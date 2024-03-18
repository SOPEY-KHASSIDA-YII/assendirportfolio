<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $subject = $_POST['subject'];
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $adresse = $_POST['adresse'];
    $number = $_POST['number'];
    $message = $_POST['message'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = 0; // Enable verbose debug output if needed
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Set your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'assendir99@gmail.com'; // SMTP username
        $mail->Password = 'unpv ompb fuhc ribn'; // SMTP password
        $mail->SMTPSecure = 'TLS'; // Enable TLS encryption, 'ssl' also accepted
        $mail->Port = 587; // TCP port to connect to
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        // Recipients
        $mail->setFrom($email, $nom);
        $mail->addAddress('assendir99@gmail.com'); // Add recipient email

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "Name: $nom<br>Email: $email<br>Address: $adresse<br>Phone Number: $number<br>Message: $message";

        // var_dump($mail);
        // Send email
        $mail->send();
        echo "Message has been sent successfully!";
        
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    // Handle non-POST requests
    echo "Invalid request method.";
}
