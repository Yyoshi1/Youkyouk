import React from "react";

const menuItems = [
  { name: "Dashboard", link: "/admin/dashboard" },
  { name: "Users", link: "/admin/users" },
  { name: "Vendors", link: "/admin/vendors" },
  { name: "Domains", link: "/admin/domains" },
  { name: "Settings", link: "/admin/settings" },
];

export default function Sidebar({ activeLink = "/admin/dashboard" }) {
  return (
    <aside
      style={{
        width: "250px",
        backgroundColor: "#f1f1f1",
        padding: "20px",
        height: "100vh",
        boxSizing: "border-box"
      }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item) => (
          <li key={item.link} style={{ margin: "10px 0" }}>
            <a
              href={item.link}
              style={{
                textDecoration: "none",
                color: activeLink === item.link ? "#007bff" : "#333",
                fontWeight: activeLink === item.link ? "bold" : "normal"
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
