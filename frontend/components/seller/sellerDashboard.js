import React from "react";
import SellerSidebar from "../../components/seller/SellerSidebar";
import SellerHeader from "../../components/seller/SellerHeader";

export default function SellerDashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <SellerSidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <SellerHeader />
        <main style={{ padding: "20px", backgroundColor: "#f1f3f5", flex: 1 }}>
          <h1>Welcome to Seller Dashboard</h1>

          {/* Dashboard Blocks Example */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "20px" }}>
            <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h3>Total Products</h3>
              <p>25</p>
            </div>
            <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h3>New Orders</h3>
              <p>5</p>
            </div>
            <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h3>Pending Messages</h3>
              <p>3</p>
            </div>
            <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
              <h3>Store Rating</h3>
              <p>4.8/5</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
