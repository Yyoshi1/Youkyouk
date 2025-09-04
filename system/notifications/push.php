<?php
/**
 * Simple Push Notifications
 * Stores notifications in database for retrieval
 */

include_once __DIR__ . '/../../backend/api/ajax.php';

function sendPush($userId, $message, $type = 'info') {
    global $pdo;
    $stmt = $pdo->prepare("INSERT INTO notifications (user_id, type, message) VALUES (?, ?, ?)");
    $stmt->execute([$userId, $type, $message]);
}
