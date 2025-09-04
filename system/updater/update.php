<?php
/**
 * System Updater
 * Handles version updates for Youkyouk
 */

$versionFile = __DIR__ . '/version.json';
$remoteVersionUrl = "https://yourserver.com/youkyouk/version.json"; // رابط نسخة مركزية

// 
$currentVersion = json_decode(file_get_contents($versionFile), true)['version'];

// 
$latestVersionData = json_decode(file_get_contents($remoteVersionUrl), true);
$latestVersion = $latestVersionData['version'];

if (version_compare($latestVersion, $currentVersion, '>')) {
    echo "Update available: $latestVersion<br>";
    echo "<button onclick='performUpdate()'>Update Now</button>";

    echo "<script>
        function performUpdate() {
            alert('Updating system... (mock)'); 
            // 
        }
    </script>";
} else {
    echo "Your system is up to date (Version $currentVersion).";
}
