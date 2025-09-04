<?php
/**
 * Youkyouk Authentication Controller
 * Handles login, logout, and session management
 */

session_start();
require_once __DIR__ . "/../config/db.php";
require_once __DIR__ . "/../config/license.php";

function login($email, $password) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['role'] = $user['role'];
        return true;
    }
    return false;
}

function logout() {
    session_destroy();
}
