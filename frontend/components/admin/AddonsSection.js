import React, { useState } from "react";

export default function AddonsSection({ mainAddon, language }) {
  const [selectedTab, setSelectedTab] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const tabs = {
    fr: ["Tous", "Recently installed", "Favorites", "Available upgrade"],
    en: ["All", "Recently installed", "Favorites", "Available upgrade"],
    ar: ["الكل", "المثبتة حديثا", "المفضلة", "التحديثات المتاحة"],
  };

  const filteredSubAddons = () => {
    switch (selectedTab) {
      case "Favorites":
        return mainAddon.subAddons.filter((s) => favorites.includes(s.id));
      case "Recently installed":
        return mainAddon.subAddons.filter((s) => s.recent);
      case "Available upgrade":
        return mainAddon.subAddons.filter((s) => s.upgrade);
      default:
        return mainAddon.subAddons;
    }
  };

  return (
    <div className="addons-section">
      <h2>{mainAddon.name}</h2>
      <div className="tabs">
        {tabs[language].map((tab) => (
          <button
            key={tab}
            className={selectedTab === tab ? "active" : ""}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="subaddons-grid">
        {filteredSubAddons().map((sub) => (
          <div key={sub.id} className="subaddon-card">
            <span
              className={`star ${favorites.includes(sub.id) ? "fav" : ""}`}
              onClick={() => toggleFavorite(sub.id)}
            >
              ★
            </span>
            <img src={sub.logo} alt={sub.name} />
            <h3>{sub.name}</h3>
            <p>{sub.description}</p>
            <span className="author">by {sub.author}</span>
            <div className="dropdown">
              <button>{language === "fr" ? "Ouvrir" : language === "en" ? "Open" : "فتح"}</button>
              <div className="dropdown-content">
                <a href="#">Help</a>
                <a href="#">Settings</a>
                <a href="#">Demo Data</a>
                <a href="#">Layouts</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
