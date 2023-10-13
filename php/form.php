<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérez les données soumises par le formulaire
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Vous pouvez maintenant utiliser ces données comme vous le souhaitez, par exemple, les envoyer par e-mail
    $destinataire = "assendir99@gmail.com";
    $sujet = "Nouveau message de contact de $nom";
    $corpsMessage = "Nom : $nom\n";
    $corpsMessage .= "Email : $email\n";
    $corpsMessage .= "Message :\n$message";

    // Utilisez la fonction mail() pour envoyer le message
    ini_set($destinataire,  $corpsMessage);

    // Redirigez l'utilisateur vers une page de confirmation
    header("Location: ../index.html");
    
    exit;
    
}
