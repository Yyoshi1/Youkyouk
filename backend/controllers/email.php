<?php
/**
 * Youkyouk Email Controller
 * Handles internal email sending without third-party services
 */

require_once __DIR__ . "/../config/license.php";

// Simple mail function using PHP mail()
function sendEmail($to, $subject, $message) {
    $headers = "From: no-reply@youkyouk.com\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    return mail($to, $subject, $message, $headers);
}
