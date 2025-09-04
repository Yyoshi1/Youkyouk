<?php
/**
 * Youkyouk Public Entry
 * Main page loader
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Youkyouk Dashboard</title>
    <link rel="stylesheet" href="assets/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="assets/styles/main.css">
    <link rel="icon" href="logo.png">
</head>
<body>
    <?php include_once '../frontend/components/layout/Header.php'; ?>
    
    <main id="app">
        <!--  -->
        <h1>Welcome to Youkyouk</h1>
    </main>
    
    <?php include_once '../frontend/components/layout/Footer.php'; ?>

    <script src="assets/vendor/jquery.min.js"></script>
    <script src="assets/vendor/bootstrap.min.js"></script>
    <script src="assets/js/helpers.js"></script>
    <script src="assets/js/api.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>
