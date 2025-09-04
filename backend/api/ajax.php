<?php
/**
 * Youkyouk AJAX API
 * Handles asynchronous requests from frontend
 */

require_once __DIR__ . "/../config/db.php";
require_once __DIR__ . "/../config/license.php";
require_once __DIR__ . "/../controllers/users.php";
require_once __DIR__ . "/../controllers/projects.php";
require_once __DIR__ . "/../controllers/tasks.php";
require_once __DIR__ . "/../controllers/notifications.php";
require_once __DIR__ . "/../controllers/updates.php";
require_once __DIR__ . "/../controllers/email.php";

// Set JSON header
header('Content-Type: application/json');

// Get request type
$action = $_POST['action'] ?? $_GET['action'] ?? null;

if (!$action) {
    echo json_encode(['error' => 'No action specified']);
    exit;
}

// -----------------------------
// Users actions
// -----------------------------
if ($action === 'get_users') {
    echo json_encode(getUsers());
    exit;
}

if ($action === 'get_user' && isset($_GET['id'])) {
    echo json_encode(getUser($_GET['id']));
    exit;
}

// -----------------------------
// Projects actions
// -----------------------------
if ($action === 'get_projects') {
    echo json_encode(getProjects());
    exit;
}

if ($action === 'get_project' && isset($_GET['id'])) {
    echo json_encode(getProject($_GET['id']));
    exit;
}

// -----------------------------
// Tasks actions
// -----------------------------
if ($action === 'get_tasks') {
    echo json_encode(getTasks());
    exit;
}

if ($action === 'get_task' && isset($_GET['id'])) {
    echo json_encode(getTask($_GET['id']));
    exit;
}

// -----------------------------
// Notifications actions
// -----------------------------
if ($action === 'get_notifications' && isset($_GET['user_id'])) {
    echo json_encode(getNotifications($_GET['user_id']));
    exit;
}

// -----------------------------
// Updates actions
// -----------------------------
if ($action === 'check_updates') {
    echo json_encode(checkUpdates());
    exit;
}

if ($action === 'apply_update' && isset($_POST['version'])) {
    echo json_encode(['success' => applyUpdate($_POST['version'])]);
    exit;
}

// -----------------------------
// Email actions
// -----------------------------
if ($action === 'send_email' && isset($_POST['to'], $_POST['subject'], $_POST['message'])) {
    $success = sendEmail($_POST['to'], $_POST['subject'], $_POST['message']);
    echo json_encode(['success' => $success]);
    exit;
}

// If action not matched
echo json_encode(['error' => 'Invalid action']);
