<?php
require_once __DIR__ . '/../models/Vendor.php';

class VendorController {
    public function listVendors() {
        return Vendor::all();
    }

    public function getVendor($id) {
        return Vendor::find($id);
    }

    public function createVendor($data) {
        return Vendor::create($data);
    }

    public function updateVendor($id, $data) {
        $vendor = Vendor::find($id);
        return $vendor->update($data);
    }
}
