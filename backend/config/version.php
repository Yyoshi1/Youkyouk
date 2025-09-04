<?php
/**
 * Youkyouk System Version
 * Handles current system version and updates
 */

$versionFile = __DIR__ . "/../../version.json";

// Check if version file exists
if (!file_exists($versionFile)) {
    die("Version file not found. Please run the installer first.");
}

// Read version data
$versionData = json_decode(file_get_contents($versionFile), true);

// Function to get current version
function getCurrentVersion() {
    global $versionData;
    return $versionData['version'] ?? '1.0.0';
}

// Function to update version
function updateVersion($newVersion) {
    global $versionData, $versionFile;
    $versionData['version'] = $newVersion;
    $versionData['updated_at'] = date("Y-m-d H:i:s");
    file_put_contents($versionFile, json_encode($versionData, JSON_PRETTY_PRINT));
}

// Example usage:
// echo "Current version: " . getCurrentVersion();
