import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header */}
      <Header />

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <Sidebar activeLink={`/admin/${activeTab.toLowerCase()}`} />

        {/* Main content */}
        <DashboardContent currentTab={activeTab} />
      </div>
    </div>
  );
}
