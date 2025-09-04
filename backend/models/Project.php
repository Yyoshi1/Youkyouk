<?php
/**
 * Youkyouk Project Model
 */

require_once __DIR__ . "/../config/db.php";

class Project {
    public $id;
    public $name;
    public $description;
    public $created_by;
    public $created_at;

    public function __construct($id, $name, $description, $created_by, $created_at) {
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->created_by = $created_by;
        $this->created_at = $created_at;
    }

    public static function all() {
        global $pdo;
        $stmt = $pdo->query("SELECT * FROM projects");
        return $stmt->fetchAll(PDO::FETCH_CLASS, "Project");
    }

    public static function find($id) {
        global $pdo;
        $stmt = $pdo->prepare("SELECT * FROM projects WHERE id = ?");
        $stmt->execute([$id]);
        $stmt->setFetchMode(PDO::FETCH_CLASS, "Project");
        return $stmt->fetch();
    }
}
