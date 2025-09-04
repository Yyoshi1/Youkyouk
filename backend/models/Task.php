<?php
/**
 * Youkyouk Task Model
 */

require_once __DIR__ . "/../config/db.php";

class Task {
    public $id;
    public $title;
    public $description;
    public $project_id;
    public $assigned_team_id;
    public $assigned_user_id;
    public $status;
    public $created_at;

    public function __construct($id, $title, $description, $project_id, $assigned_team_id, $assigned_user_id, $status, $created_at) {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->project_id = $project_id;
        $this->assigned_team_id = $assigned_team_id;
        $this->assigned_user_id = $assigned_user_id;
        $this->status = $status;
        $this->created_at = $created_at;
    }

    public static function all() {
        global $pdo;
        $stmt = $pdo->query("SELECT * FROM tasks");
        return $stmt->fetchAll(PDO::FETCH_CLASS, "Task");
    }

    public static function find($id) {
        global $pdo;
        $stmt = $pdo->prepare("SELECT * FROM tasks WHERE id = ?");
        $stmt->execute([$id]);
        $stmt->setFetchMode(PDO::FETCH_CLASS, "Task");
        return $stmt->fetch();
    }
}
