import React from "react";
import { NavLink } from "react-router-dom";

export default function SellerSidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/seller/dashboard" },
    { name: "Products", path: "/seller/products" },
    { name: "Orders", path: "/seller/orders" },
    { name: "Messages", path: "/seller/messages" },
    { name: "Store Settings", path: "/seller/settings" },
    { name: "Reports", path: "/seller/reports" },
  ];

  return (
    <aside style={{ width: "250px", backgroundColor: "#f8f9fa", height: "100vh", padding: "20px", boxShadow: "2px 0 5px rgba(0,0,0,0.1)" }}>
      <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "20px" }}>Seller Menu</div>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              padding: "10px",
              borderRadius: "4px",
              textDecoration: "none",
              color: isActive ? "#fff" : "#333",
              backgroundColor: isActive ? "#0d6efd" : "transparent",
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
