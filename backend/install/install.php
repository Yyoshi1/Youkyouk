<?php
/**
 * Youkyouk Install Script (Simplified)
 * Creates database, tables, admin user, version and license files
 */

$host = "localhost";        // Database server
$dbname = "youkyouk_db";   // Database name
$user = "root";             // Database username
$pass = "";                 // Database password

try {
    // Create PDO connection
    $pdo = new PDO("mysql:host=$host", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create database if not exists
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$dbname` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci");
    $pdo->exec("USE `$dbname`");

    echo "Database created or found successfully.<br>";

    // -----------------------------
    // Create core tables
    // -----------------------------
    $tables = [
        // Users table
        "CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role_id INT NOT NULL DEFAULT 2,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB;",

        // Roles table
        "CREATE TABLE IF NOT EXISTS roles (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL UNIQUE,
            permissions TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB;",

        // Notifications table
        "CREATE TABLE IF NOT EXISTS notifications (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            title VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            read TINYINT(1) DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        ) ENGINE=InnoDB;",

        // Chat table
        "CREATE TABLE IF NOT EXISTS chat (
            id INT AUTO_INCREMENT PRIMARY KEY,
            from_id INT NOT NULL,
            to_id INT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (from_id) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY (to_id) REFERENCES users(id) ON DELETE CASCADE
        ) ENGINE=InnoDB;"
    ];

    foreach ($tables as $sql) {
        $pdo->exec($sql);
    }

    echo "All core tables created successfully.<br>";

    // -----------------------------
    // Create initial admin user
    // -----------------------------
    $adminName = "Administrator";
    $adminEmail = "admin@youkyouk.com";
    $adminPass = password_hash("Admin@123", PASSWORD_BCRYPT);
    $adminRoleId = 1;

    // Insert admin role first
    $pdo->exec("INSERT INTO roles (name) VALUES ('superadmin')");

    $stmt = $pdo->prepare("INSERT INTO users (name, email, password, role_id) VALUES (?, ?, ?, ?)");
    $stmt->execute([$adminName, $adminEmail, $adminPass, $adminRoleId]);

    echo "Admin user created successfully.<br>";

    // -----------------------------
    // Create version.json file
    // -----------------------------
    $versionData = [
        "version" => "1.0.0",
        "installed_at" => date("Y-m-d H:i:s")
    ];
    file_put_contents(__DIR__ . "/../version.json", json_encode($versionData, JSON_PRETTY_PRINT));
    echo "Version file created.<br>";

    // -----------------------------
    // Create license.json file
    // -----------------------------
    $licenseData = [
        "license_key" => "",
        "activated" => false,
        "activated_at" => null
    ];
    file_put_contents(__DIR__ . "/../license.json", json_encode($licenseData, JSON_PRETTY_PRINT));
    echo "License file created.<br>";

    echo "<br><strong>Youkyouk has been installed successfully! Login with email: admin@youkyouk.com and password: Admin@123</strong>";

} catch (PDOException $e) {
    die("Installation error: " . $e->getMessage());
}
