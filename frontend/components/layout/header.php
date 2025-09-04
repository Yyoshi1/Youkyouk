<?php
/**
 * Header Component - Youkyouk
 * يحتوي على: شعار، قائمة تنقل، أيقونات، إشعارات، لغة، وضع فاتح/داكن، ملف المستخدم
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Youkyouk Dashboard</title>
    <!-- الخطوط -->
    <link rel="stylesheet" href="../../assets/styles/main.css">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="../../assets/vendor/bootstrap.min.css">
    <!-- أيقونات -->
    <link rel="stylesheet" href="../../assets/vendor/bootstrap-icons.css">
</head>
<body>
<header class="youkyouk-header">
    <div class="logo-container">
        <img src="../../assets/images/logo.png" alt="Youkyouk Logo" class="logo">
    </div>
    <nav class="main-nav">
        <ul>
            <li><img src="../../assets/icons/home.svg" alt="Home"></li>
            <li><img src="../../assets/icons/dashboard.svg" alt="Dashboard"></li>
            <li><img src="../../assets/icons/notification.svg" alt="Notifications"></li>
            <li><img src="../../assets/icons/chat.svg" alt="Chat"></li>
        </ul>
    </nav>
    <div class="header-actions">
        <!--  -->
        <input type="text" placeholder="Search..." class="search-input">
        <img src="../../assets/icons/search.svg" alt="Search Icon" class="search-icon">

        <!--  -->
        <select class="language-select">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="ar">AR</option>
        </select>

        <!-- -->
        <button id="theme-toggle">🌙</button>

        <!-- -->
        <div class="user-profile">
            <img src="../../assets/images/placeholders/user.png" alt="User Avatar">
            <span>Admin</span>
        </div>
    </div>
</header>

<script src="../../assets/vendor/jquery.min.js"></script>
<script src="../../assets/vendor/bootstrap.min.js"></script>
<script src="../../assets/js/helpers.js"></script>
<script src="../../assets/js/main.js"></script>
<script src="../../assets/js/api.js"></script>
</body>
</html>
