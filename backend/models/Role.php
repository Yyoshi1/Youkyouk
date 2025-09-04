<?php
/**
 * Youkyouk Role Model
 * Represents a role and its permissions
 */

require_once __DIR__ . "/../config/db.php";

class Role {
    public $id;
    public $name;
    public $permissions;
    public $created_at;

    public function __construct($id, $name, $permissions, $created_at) {
        $this->id = $id;
        $this->name = $name;
        $this->permissions = $permissions;
        $this->created_at = $created_at;
    }

    public static function all() {
        global $pdo;
        $stmt = $pdo->query("SELECT * FROM roles");
        return $stmt->fetchAll(PDO::FETCH_CLASS, "Role");
    }

    public static function find($id) {
        global $pdo;
        $stmt = $pdo->prepare("SELECT * FROM roles WHERE id = ?");
        $stmt->execute([$id]);
        $stmt->setFetchMode(PDO::FETCH_CLASS, "Role");
        return $stmt->fetch();
    }
}
