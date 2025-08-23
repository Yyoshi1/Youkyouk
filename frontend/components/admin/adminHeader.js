import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function AdminHeader({ notifications, profile }) {
  const { language, changeLanguage } = useLanguage();

  return (
    <header className="admin-header">
      <div className="logo">Youkyouk</div>
      <div className="search">
        <input placeholder={language === "fr" ? "Rechercher..." : language === "en" ? "Search..." : "ابحث..."} />
      </div>
      <div className="actions">
        <button className="help-btn">?</button>
        <button className="notifications-btn">{notifications.length} 🔔</button>
        <div className="profile-menu">
          <img src={profile.avatar} alt="Admin" />
          <div className="dropdown">
            <p>{profile.email}</p>
            <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
            <button>Dark/Light</button>
            <button>Profile</button>
            <button>Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
}
