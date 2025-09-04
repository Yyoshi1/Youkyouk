<?php
/**
 * Youkyouk User Model
 * Represents a user in the system
 */

require_once __DIR__ . "/../config/db.php";

class User {
    public $id;
    public $name;
    public $email;
    public $role;
    public $created_at;

    public function __construct($id, $name, $email, $role, $created_at) {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
        $this->role = $role;
        $this->created_at = $created_at;
    }

    // Get all users
    public static function all() {
        global $pdo;
        $stmt = $pdo->query("SELECT * FROM users");
        return $stmt->fetchAll(PDO::FETCH_CLASS, "User");
    }

    // Find user by ID
    public static function find($id) {
        global $pdo;
        $stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
        $stmt->execute([$id]);
        $stmt->setFetchMode(PDO::FETCH_CLASS, "User");
        return $stmt->fetch();
    }
}
