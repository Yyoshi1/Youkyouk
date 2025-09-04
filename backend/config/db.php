<?php
/**
 * Youkyouk Database Connection
 * Handles connection to MySQL using PDO
 */

$host = "localhost";        // Database server
$dbname = "youkyouk_db";    // Database name
$user = "root";             // Database username
$pass = "";                 // Database password

try {
    // Create PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // Connection successful
    // echo "Database connected successfully";

} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
