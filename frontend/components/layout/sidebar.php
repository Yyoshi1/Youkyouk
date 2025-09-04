<?php
/**
 * Sidebar Component - Youkyouk
 */
?>

<aside class="youkyouk-sidebar">
    <div class="sidebar-header">
        <img src="../../assets/images/logo.png" alt="Youkyouk Logo" class="sidebar-logo">
        <button id="sidebar-toggle">☰</button>
    </div>
    <nav class="sidebar-nav">
        <ul>
            <li>
                <img src="../../assets/icons/dashboard.svg" alt="Dashboard Icon">
                <span>Dashboard</span>
            </li>
            <li>
                <img src="../../assets/icons/home.svg" alt="Home Icon">
                <span>Home</span>
            </li>
            <li>
                <img src="../../assets/icons/settings.svg" alt="Settings Icon">
                <span>Settings</span>
            </li>
            <li>
                <img src="../../assets/icons/user.svg" alt="Users Icon">
                <span>Users</span>
            </li>
            <li>
                <img src="../../assets/icons/notification.svg" alt="Notifications Icon">
                <span>Notifications</span>
            </li>
            <li>
                <img src="../../assets/icons/chat.svg" alt="Chat Icon">
                <span>Chat</span>
            </li>
        </ul>
    </nav>
</aside>

<script>
    // Toggle sidebar
    $('#sidebar-toggle').on('click', function() {
        $('.youkyouk-sidebar').toggleClass('collapsed');
    });
</script>
