<?php
/**
 * NotificationAlert - Youkyouk
 * نظام عرض التنبيهات داخل لوحة التحكم
 */
?>

<div id="notificationContainer" class="notification-container">
    <!-- -->
</div>

<style>
.notification-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1050;
    width: 300px;
}

.notification {
    background-color: #fff;
    border-left: 5px solid #007bff;
    padding: 15px 20px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
}

.notification.success { border-color: #28a745; }
.notification.error { border-color: #dc3545; }
.notification.info { border-color: #17a2b8; }

.notification .closeBtn {
    cursor: pointer;
    font-weight: bold;
}
</style>

<script>
// 
function addNotification(message, type = 'info', duration = 5000) {
    const container = $('#notificationContainer');
    const id = 'notif_' + Date.now();
    const notif = $(`
        <div id="${id}" class="notification ${type}">
            <span>${message}</span>
            <span class="closeBtn">&times;</span>
        </div>
    `);
    container.append(notif);

    // 
    notif.find('.closeBtn').on('click', function() {
        notif.remove();
    });

    // 
    setTimeout(() => { notif.fadeOut(300, () => notif.remove()); }, duration);
}
</script>
