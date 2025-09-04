<?php
/**
 * Youkyouk Projects Controller
 * Handles CRUD operations for projects
 */

require_once __DIR__ . "/../config/db.php";
require_once __DIR__ . "/../config/license.php";

// Get all projects
function getProjects() {
    global $pdo;
    $stmt = $pdo->query("SELECT * FROM projects");
    return $stmt->fetchAll();
}

// Get single project by ID
function getProject($id) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM projects WHERE id = ?");
    $stmt->execute([$id]);
    return $stmt->fetch();
}

// Create project
function createProject($name, $description, $created_by) {
    global $pdo;
    $stmt = $pdo->prepare("INSERT INTO projects (name, description, created_by) VALUES (?, ?, ?)");
    return $stmt->execute([$name, $description, $created_by]);
}

// Update project
function updateProject($id, $name, $description) {
    global $pdo;
    $stmt = $pdo->prepare("UPDATE projects SET name = ?, description = ? WHERE id = ?");
    return $stmt->execute([$name, $description, $id]);
}

// Delete project
function deleteProject($id) {
    global $pdo;
    $stmt = $pdo->prepare("DELETE FROM projects WHERE id = ?");
    return $stmt->execute([$id]);
}
