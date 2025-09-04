<?php
/**
 * Login - Youkyouk
 */
include '../components/layout/Header.php';
?>

<div class="auth-container">
    <h2>Login</h2>
    <form id="loginForm" method="POST" action="../api/ajax.php">
        <input type="hidden" name="action" value="login">
        <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" required class="form-control">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" required class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</div>

<?php include '../components/layout/Footer.php'; ?>
