<?php
/**
 * Youkyouk Notifications Controller
 * Handles user notifications
 */

require_once __DIR__ . "/../config/db.php";
require_once __DIR__ . "/../config/license.php";

// Get notifications for a user
function getNotifications($user_id) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC");
    $stmt->execute([$user_id]);
    return $stmt->fetchAll();
}

// Create notification
function createNotification($user_id, $type, $message) {
    global $pdo;
    $stmt = $pdo->prepare("INSERT INTO notifications (user_id, type, message) VALUES (?, ?, ?)");
    return $stmt->execute([$user_id, $type, $message]);
}

// Mark notification as read
function markAsRead($id) {
    global $pdo;
    $stmt = $pdo->prepare("UPDATE notifications SET status = 'read' WHERE id = ?");
    return $stmt->execute([$id]);
}

// Delete notification
function deleteNotification($id) {
    global $pdo;
    $stmt = $pdo->prepare("DELETE FROM notifications WHERE id = ?");
    return $stmt->execute([$id]);
}
