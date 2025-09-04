<?php
/**
 * Youkyouk License Verification
 * Checks the purchase license for the project
 */

$licenseFile = __DIR__ . "/../../license.json";

// Check if license file exists
if (!file_exists($licenseFile)) {
    die("License file not found. Please run the installer first.");
}

// Read license data
$licenseData = json_decode(file_get_contents($licenseFile), true);

// Check if license is activated
if (!isset($licenseData['activated']) || $licenseData['activated'] !== true) {
    die("License not activated. Please enter a valid license key.");
}

// License is valid
// echo "License verified successfully";
