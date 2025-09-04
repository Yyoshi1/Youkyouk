<?php
require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../models/Role.php';

class AccountController {
    public function login($email, $password) {
        $user = User::findByEmail($email);
        if (!$user || !password_verify($password, $user->password)) {
            return ['status' => false, 'message' => 'Invalid credentials'];
        }
        $_SESSION['user_id'] = $user->id;
        return ['status' => true, 'message' => 'Login successful', 'user' => $user];
    }

    public function logout() {
        session_destroy();
        return ['status' => true, 'message' => 'Logged out'];
    }

    public function register($data) {
        $user = User::create($data);
        return ['status' => true, 'message' => 'User registered', 'user' => $user];
    }
}
