import React, { useState } from "react";
import SellerSidebar from "../../components/seller/SellerSidebar";
import SellerHeader from "../../components/seller/SellerHeader";
import SellerContent from "../../components/seller/SellerContent";

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SellerSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <SellerHeader />
        <main style={{ padding: "20px", backgroundColor: "#f1f3f5", flex: 1 }}>
          <SellerContent activeTab={activeTab} />
        </main>
      </div>
    </div>
  );
}
