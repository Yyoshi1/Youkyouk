import React, { useState } from "react";

// Example notifications and languages
const notificationsExample = [
  { id: 1, type: "join_request", message: "New join request", link: "/admin/join-requests" },
  { id: 2, type: "new_order", message: "New order", link: "/admin/orders" },
];

const languages = ["Arabic", "French", "English"];

export default function AdminHeader({ adminEmail = "admin@example.com" }) {
  const [showHelp, setShowHelp] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: darkMode ? "#1c1c1c" : "#f8f9fa",
        color: darkMode ? "#fff" : "#000",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>Youkyouk Admin</div>

      {/* Search bar */}
      <div style={{ flex: 1, margin: "0 20px" }}>
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: "4px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {/* Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Help icon */}
        <div style={{ position: "relative" }}>
          <button onClick={() => setShowHelp(!showHelp)}>❓</button>
          {showHelp && (
            <div style={{
              position: "absolute",
              top: "30px",
              right: 0,
              width: "300px",
              backgroundColor: darkMode ? "#333" : "#fff",
              color: darkMode ? "#fff" : "#000",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              padding: "10px",
              zIndex: 100
            }}>
              <h4>How to use the dashboard</h4>
              <p>Quick guide with video tutorials.</p>
              <video width="100%" controls>
                <source src="/help-video.mp4" type="video/mp4" />
              </video>
            </div>
          )}
        </div>

        {/* Notifications icon */}
        <div style={{ position: "relative" }}>
          <button onClick={() => setShowNotifications(!showNotifications)}>🔔</button>
          {showNotifications && (
            <div style={{
              position: "absolute",
              top: "30px",
              right: 0,
              width: "300px",
              backgroundColor: darkMode ? "#333" : "#fff",
              color: darkMode ? "#fff" : "#000",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              padding: "10px",
              zIndex: 100
            }}>
              {notificationsExample.map((n) => (
                <div key={n.id} style={{ padding: "5px", cursor: "pointer" }}
                     onClick={() => window.location.href = n.link}>
                  {n.message}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Admin profile */}
        <div style={{ position: "relative" }}>
          <img
            src="/admin-avatar.png"
            alt="Admin"
            style={{ width: "32px", height: "32px", borderRadius: "50%", cursor: "pointer" }}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          />
          {showProfileMenu && (
            <div style={{
              position: "absolute",
              top: "40px",
              right: 0,
              width: "220px",
              backgroundColor: darkMode ? "#333" : "#fff",
              color: darkMode ? "#fff" : "#000",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              padding: "10px",
              zIndex: 100
            }}>
              <p>Logged in as: {adminEmail}</p>

              {/* Change language */}
              <div>
                <label>Change Language:</label>
                <select
                  value={currentLanguage}
                  onChange={(e) => setCurrentLanguage(e.target.value)}
                  style={{ width: "100%", marginTop: "5px" }}
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              {/* Dark/Light mode toggle */}
              <div style={{ marginTop: "10px" }}>
                <label>
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  Dark Mode
                </label>
              </div>

              {/* Login as */}
              <div style={{ marginTop: "10px" }}>
                <label>Login as:</label>
                <select style={{ width: "100%", marginTop: "5px" }}>
                  <option value="market">Market</option>
                  <option value="model">Model</option>
                  <option value="seller">Seller</option>
                </select>
              </div>

              {/* Profile & Logout */}
              <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                <button style={{ flex: 1 }}>Profile</button>
                <button style={{ flex: 1, backgroundColor: "#dc3545", color: "#fff" }}>Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
