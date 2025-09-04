<?php
// index.php 

// 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// 
$headerPath = __DIR__ . '/../frontend/components/layout/Header.php';
if (file_exists($headerPath)) {
    include_once $headerPath;
} else {
    echo "<p style='color:red;'>Header file not found: $headerPath</p>";
}

// --- ---
?>

<div style="text-align:center; margin-top:50px;">
    <h1>Welcome to Youkyouk</h1>
    <p>Your platform is up and running!</p>
</div>

<?php
// 
$footerPath = __DIR__ . '/../frontend/components/layout/Footer.php';
if (file_exists($footerPath)) {
    include_once $footerPath;
} else {
    echo "<p style='color:red;'>Footer file not found: $footerPath</p>";
}
?>
