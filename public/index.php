<?php
/**
 * Index Page - Youkyouk
 * يشمل: Header, Sidebar, Footer, Main Content
 */

// تضمين الهيدر
include __DIR__ . '/../frontend/components/layout/Header.php';

// تضمين الشريط الجانبي (Sidebar)
include __DIR__ . '/../frontend/components/layout/sidebar.php';
?>

<!-- محتوى الصفحة الرئيسية -->
<main class="main-content">
    <h1>Welcome to Youkyouk</h1>
    <p>Your platform is up and running!</p>
</main>

<?php
// تضمين الفوتر
include __DIR__ . '/../frontend/components/layout/Footer.php';
?>
