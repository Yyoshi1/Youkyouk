<?php
/**
 * Youkyouk Install Script - Corrected
 * Creates database, tables, initial admin user, version & license files
 */

$host = "localhost";
$dbname = "youkyouk_db";
$user = "root";
$pass = "";

try {
    // Connect without specifying DB (so we can create it)
    $pdo = new PDO("mysql:host=$host", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create database if not exists
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$dbname` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci");
    $pdo->exec("USE `$dbname`");

    echo "Database created or selected successfully.<br>";

    // -----------------------------
    // Tables
    // -----------------------------
    $tables = [

        // Users table
        "CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(50) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB;",

        // Roles table
        "CREATE TABLE IF NOT EXISTS roles (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL UNIQUE,
            permissions TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB;",

        // Teams table
        "CREATE TABLE IF NOT EXISTS teams (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB;",

        // Team members
        "CREATE TABLE IF NOT EXISTS team_members (
            id INT AUTO_INCREMENT PRIMARY KEY,
            team_id INT NOT NULL,
            user_id INT NOT NULL,
            role VARCHAR(50) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        ) ENGINE=InnoDB;",

        // Projects table
        "CREATE TABLE IF NOT EXISTS projects (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT,
            created_by INT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL
        ) ENGINE=InnoDB;",

        // Tasks table
        "CREATE TABLE IF NOT EXISTS tasks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            project_id INT NOT NULL,
            title VARCHAR(150) NOT NULL,
            description TEXT,
            assigned_team_id INT NULL,
            assigned_user_id INT NULL,
            status VARCHAR(50) DEFAULT 'To Do',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
            FOREIGN KEY (assigned_team_id) REFERENCES teams(id) ON DELETE SET NULL,
            FOREIGN KEY (assigned_user_id) REFERENCES users(id) ON DELETE SET NULL
        ) ENGINE=InnoDB;",

        // Notifications table
        "CREATE TABLE IF NOT EXISTS notifications (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            type VARCHAR(50) NOT NULL,
            message TEXT NOT NULL,
            status VARCHAR(20) DEFAULT 'unread',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        ) ENGINE=InnoDB;",

        // System version table
        "CREATE TABLE IF NOT EXISTS system_version (
            id INT AUTO_INCREMENT PRIMARY KEY,
            version VARCHAR(20) NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB;"
    ];

    foreach ($tables as $sql) {
        $pdo->exec($sql);
    }
    echo "All tables created successfully.<br>";

    // -----------------------------
    // Initial admin
    // -----------------------------
    $adminName = "Administrator";
    $adminEmail = "admin@youkyouk.com";
    $adminPass = password_hash("Admin@123", PASSWORD_BCRYPT);
    $adminRole = "superadmin";

    $stmt = $pdo->prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)");
    $stmt->execute([$adminName, $adminEmail, $adminPass, $adminRole]);
    echo "Admin user created successfully.<br>";

    // -----------------------------
    // version.json
    // -----------------------------
    $versionData = [
        "version" => "1.0.0",
        "installed_at" => date("Y-m-d H:i:s")
    ];
    file_put_contents(__DIR__ . "/../version.json", json_encode($versionData, JSON_PRETTY_PRINT));
    echo "Version file created.<br>";

    // -----------------------------
    // license.json
    // -----------------------------
    $licenseData = [
        "license_key" => "",
        "activated" => false,
        "activated_at" => null
    ];
    file_put_contents(__DIR__ . "/../license.json", json_encode($licenseData, JSON_PRETTY_PRINT));
    echo "License file created.<br>";

    echo "<br><strong>Youkyouk installed successfully! Login: admin@youkyouk.com / Admin@123</strong>";

} catch (PDOException $e) {
    die("Installation error: " . $e->getMessage());
}
