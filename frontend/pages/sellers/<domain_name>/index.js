import React, { useState } from "react";

// Props 
export default function SellerDashboard({ domainName, modelType }) {
  const [activeBlock, setActiveBlock] = useState("dashboard");

  // 
  const menuItems = {
    b2c: [
      { id: 1, label: "Dashboard" },
      { id: 2, label: "Products" },
      { id: 3, label: "Orders" },
      { id: 4, label: "Chat" },
    ],
    b2b: [
      { id: 1, label: "Dashboard" },
      { id: 2, label: "Products" },
      { id: 3, label: "Bulk Orders" },
      { id: 4, label: "Invoices" },
    ],
    c2c: [
      { id: 1, label: "Dashboard" },
      { id: 2, label: "My Products" },
      { id: 3, label: "Sales" },
      { id: 4, label: "Messages" },
    ],
  };

  const currentMenu = menuItems[modelType] || menuItems.b2c;

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* */}
      <aside style={{ width: "220px", backgroundColor: "#343a40", color: "white", padding: "20px" }}>
        <h2 style={{ color: "#fff", marginBottom: "30px" }}>{domainName}</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {currentMenu.map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveBlock(item.label.toLowerCase())}
              style={{
                padding: "10px",
                marginBottom: "8px",
                cursor: "pointer",
                backgroundColor: activeBlock === item.label.toLowerCase() ? "#007bff" : "transparent",
                borderRadius: "4px",
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>

      {/* */}
      <main style={{ flex: 1, padding: "20px" }}>
        <h1>{activeBlock.charAt(0).toUpperCase() + activeBlock.slice(1)}</h1>
        <p>Model Type: {modelType}</p>

        {/* */}
        {activeBlock === "products" && (
          <div>
            <h3>Products Block</h3>
            <p>Here you can add/edit products. Limited blocks depending on model type.</p>
          </div>
        )}

        {activeBlock === "orders" && (
          <div>
            <h3>Orders Block</h3>
            <p>View and manage orders.</p>
          </div>
        )}

        {activeBlock === "bulk orders" && (
          <div>
            <h3>Bulk Orders Block</h3>
            <p>Manage B2B bulk orders here.</p>
          </div>
        )}

        {activeBlock === "chat" || activeBlock === "messages" ? (
          <div>
            <h3>Chat Block</h3>
            <p>Direct communication with customers or buyers.</p>
          </div>
        ) : null}
      </main>
    </div>
  );
}
