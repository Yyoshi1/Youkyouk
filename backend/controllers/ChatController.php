<?php
require_once __DIR__ . '/../models/User.php';

class ChatController {
    public function sendMessage($fromId, $toId, $message) {
        $stmt = Database::getConnection()->prepare(
            "INSERT INTO chat (from_id, to_id, message, created_at) VALUES (?, ?, ?, NOW())"
        );
        $stmt->execute([$fromId, $toId, $message]);
        return ['status' => true, 'message' => 'Message sent'];
    }

    public function getMessages($userId1, $userId2) {
        $stmt = Database::getConnection()->prepare(
            "SELECT * FROM chat WHERE (from_id=? AND to_id=?) OR (from_id=? AND to_id=?) ORDER BY created_at ASC"
        );
        $stmt->execute([$userId1, $userId2, $userId2, $userId1]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
