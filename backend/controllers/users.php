<?php
/**
 * Youkyouk Users Controller
 * Handles user management: CRUD operations
 */

require_once __DIR__ . "/../config/db.php";
require_once __DIR__ . "/../config/license.php";

// Get all users
function getUsers() {
    global $pdo;
    $stmt = $pdo->query("SELECT id, name, email, role, created_at FROM users");
    return $stmt->fetchAll();
}

// Get single user by ID
function getUser($id) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT id, name, email, role, created_at FROM users WHERE id = ?");
    $stmt->execute([$id]);
    return $stmt->fetch();
}

// Create user
function createUser($name, $email, $password, $role) {
    global $pdo;
    $hashed = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $pdo->prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)");
    return $stmt->execute([$name, $email, $hashed, $role]);
}

// Update user
function updateUser($id, $name, $email, $role) {
    global $pdo;
    $stmt = $pdo->prepare("UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?");
    return $stmt->execute([$name, $email, $role, $id]);
}

// Delete user
function deleteUser($id) {
    global $pdo;
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
    return $stmt->execute([$id]);
}
