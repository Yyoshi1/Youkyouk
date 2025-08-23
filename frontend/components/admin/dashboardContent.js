import React from "react";

export default function DashboardContent({ currentTab = "Dashboard" }) {
  // Simple placeholder content for each tab
  return (
    <div style={{ padding: "20px", flex: 1 }}>
      <h1>{currentTab}</h1>
      <p>This is the content for the {currentTab} tab.</p>
    </div>
  );
}
