<?php
/**
 * Youkyouk Tasks Controller
 * Handles CRUD operations for tasks
 */

require_once __DIR__ . "/../config/db.php";
require_once __DIR__ . "/../config/license.php";

// Get all tasks
function getTasks() {
    global $pdo;
    $stmt = $pdo->query("SELECT * FROM tasks");
    return $stmt->fetchAll();
}

// Get single task by ID
function getTask($id) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM tasks WHERE id = ?");
    $stmt->execute([$id]);
    return $stmt->fetch();
}

// Create task
function createTask($title, $description, $project_id, $assigned_team_id = null, $assigned_user_id = null, $status = 'To Do') {
    global $pdo;
    $stmt = $pdo->prepare("INSERT INTO tasks (title, description, project_id, assigned_team_id, assigned_user_id, status) VALUES (?, ?, ?, ?, ?, ?)");
    return $stmt->execute([$title, $description, $project_id, $assigned_team_id, $assigned_user_id, $status]);
}

// Update task
function updateTask($id, $title, $description, $assigned_team_id, $assigned_user_id, $status) {
    global $pdo;
    $stmt = $pdo->prepare("UPDATE tasks SET title = ?, description = ?, assigned_team_id = ?, assigned_user_id = ?, status = ? WHERE id = ?");
    return $stmt->execute([$title, $description, $assigned_team_id, $assigned_user_id, $status, $id]);
}

// Delete task
function deleteTask($id) {
    global $pdo;
    $stmt = $pdo->prepare("DELETE FROM tasks WHERE id = ?");
    return $stmt->execute([$id]);
}
