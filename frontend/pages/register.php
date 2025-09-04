<?php
/**
 * Register - Youkyouk
 */
include '../components/layout/Header.php';
?>

<div class="auth-container">
    <h2>Register</h2>
    <form id="registerForm" method="POST" action="../api/ajax.php">
        <input type="hidden" name="action" value="register">
        <div class="form-group">
            <label>Name</label>
            <input type="text" name="name" required class="form-control">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" required class="form-control">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" required class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</div>

<?php include '../components/layout/Footer.php'; ?>
