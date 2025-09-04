<?php
/**
 * Youkyouk Notification Model
 */

require_once __DIR__ . "/../config/db.php";

class Notification {
    public $id;
    public $user_id;
    public $type;
    public $message;
    public $status;
    public $created_at;

    public function __construct($id, $user_id, $type, $message, $status, $created_at) {
        $this->id = $id;
        $this->user_id = $user_id;
        $this->type = $type;
        $this->message = $message;
        $this->status = $status;
        $this->created_at = $created_at;
    }

    public static function allByUser($user_id) {
        global $pdo;
        $stmt = $pdo->prepare("SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC");
        $stmt->execute([$user_id]);
        return $stmt->fetchAll(PDO::FETCH_CLASS, "Notification");
    }

    public static function find($id) {
        global $pdo;
        $stmt = $pdo->prepare("SELECT * FROM notifications WHERE id = ?");
        $stmt->execute([$id]);
        $stmt->setFetchMode(PDO::FETCH_CLASS, "Notification");
        return $stmt->fetch();
    }
}
