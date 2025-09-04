<?php
/**
 * AdminDashboard - Youkyouk
 */
include '../components/layout/Header.php';
include '../components/layout/Sidebar.php';
?>

<div class="main-content">
    <h1>Admin Dashboard</h1>
    <div class="dashboard-widgets">
        <?php include '../components/widgets/StatCard.php'; ?>
    </div>
</div>

<?php include '../components/layout/Footer.php'; ?>
