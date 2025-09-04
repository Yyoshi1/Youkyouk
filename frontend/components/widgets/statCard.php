<?php
/**
 * StatCard - Youkyouk
 */
?>

<div class="card stat-card">
    <div class="card-body d-flex align-items-center justify-content-between">
        <div>
            <h6 class="text-muted"><?= $title ?? 'Title' ?></h6>
            <h3 class="stat-value"><?= $value ?? 0 ?></h3>
        </div>
        <div class="stat-icon">
            <img src="<?= $icon ?? '/frontend/assets/icons/dashboard.svg' ?>" alt="icon" width="40">
        </div>
    </div>
</div>

<style>
.stat-card {
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    cursor: default;
}
.stat-card:hover {
    transform: translateY(-2px);
}
.stat-value {
    font-weight: bold;
}
.stat-icon img {
    opacity: 0.7;
}
</style>
