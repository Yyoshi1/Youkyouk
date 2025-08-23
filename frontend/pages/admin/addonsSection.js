import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AddonsSection.css"; // يمكنك إنشاء ملف CSS خاص بالتصميم

export default function AddonsSection() {
  const [addons, setAddons] = useState([]);
  const [activeTab, setActiveTab] = useState("Tous"); // Tous, Recently Installed, Favorites, Available Upgrade

  useEffect(() => {
    fetchAddons();
  }, []);

  const fetchAddons = async () => {
    try {
      const response = await axios.get("/api/addons"); // GET all addons
      setAddons(response.data);
    } catch (err) {
      console.error("Failed to fetch addons:", err);
    }
  };

  const toggleFavorite = (id) => {
    setAddons((prev) =>
      prev.map((addon) =>
        addon.id === id ? { ...addon, favorite: !addon.favorite } : addon
      )
    );
  };

  const filteredAddons = () => {
    switch (activeTab) {
      case "Recently Installed":
        return addons.sort((a, b) => new Date(b.installedAt) - new Date(a.installedAt));
      case "Favorites":
        return addons.filter((addon) => addon.favorite);
      case "Available Upgrade":
        return addons.filter((addon) => addon.needsUpdate);
      default:
        return addons;
    }
  };

  return (
    <div className="addons-section">
      <h1>Admin Addons</h1>

      {/* Tabs */}
      <div className="tabs">
        {["Tous", "Recently Installed", "Favorites", "Available Upgrade"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Addons Grid */}
      <div className="addons-grid">
        {filteredAddons().map((addon) => (
          <div key={addon.id} className="addon-card">
            <div className="addon-header">
              <span
                className={`favorite-star ${addon.favorite ? "active" : ""}`}
                onClick={() => toggleFavorite(addon.id)}
              >
                ★
              </span>
              <img src={addon.logo} alt={addon.name} className="addon-logo" />
            </div>
            <h3>{addon.name}</h3>
            <p>{addon.description}</p>
            <p className="addon-author">By {addon.author || "Youkyouk"}</p>

            {/* Dropdown */}
            <div className="addon-dropdown">
              <button>Open</button>
              <div className="dropdown-content">
                <p>Help</p>
                <p>Settings</p>
                <p>Demo Data</p>
                <p>Layouts</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
