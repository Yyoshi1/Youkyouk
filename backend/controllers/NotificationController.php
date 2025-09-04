<?php
require_once __DIR__ . '/../models/Notification.php';

class NotificationController {
    public function sendNotification($userId, $title, $message) {
        return Notification::create([
            'user_id' => $userId,
            'title' => $title,
            'message' => $message,
            'read' => 0,
            'created_at' => date('Y-m-d H:i:s')
        ]);
    }

    public function listNotifications($userId) {
        return Notification::where('user_id', $userId)->orderBy('created_at', 'DESC')->get();
    }
}
