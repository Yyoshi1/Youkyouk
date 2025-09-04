<?php
/**
 * Simple Mailer
 * Sends email notifications without third-party service
 */

function sendMail($to, $subject, $message, $headers = '') {
    if(mail($to, $subject, $message, $headers)) {
        return true;
    } else {
        return false;
    }
}

// مثال
// sendMail("user@example.com", "Test", "This is a test message");
