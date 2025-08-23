import React, { useState } from "react";
import AddonCard from "../../shared/AddonCard";
import { useLanguage } from "../../context/LanguageContext";

export default function AdminAddonsPage({ addons }) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const filterAddons = () => {
    switch (activeTab) {
      case "recent": return addons.filter(a => a.isRecent);
      case "favorites": return addons.filter(a => a.isFavorite);
      case "updates": return addons.filter(a => a.hasUpdate);
      default: return addons.sort((a, b) => b.isFavorite - a.isFavorite);
    }
  };

  const tabLabels = {
    fr: { all: "Tous", recent: "Recently installed", favorites: "Favorites", updates: "Mises à jour" },
    en: { all: "All", recent: "Recently installed", favorites: "Favorites", updates: "Updates" },
    ar: { all: "الكل", recent: "الجديد", favorites: "المفضلة", updates: "التحديثات" },
  };

  return (
    <div className="admin-addons-page">
      <div className="tabs">
        <button onClick={() => setActiveTab("all")}>{tabLabels[language].all}</button>
        <button onClick={() => setActiveTab("recent")}>{tabLabels[language].recent}</button>
        <button onClick={() => setActiveTab("favorites")}>{tabLabels[language].favorites}</button>
        <button onClick={() => setActiveTab("updates")}>{tabLabels[language].updates}</button>
      </div>
      <div className="addons-grid">
        {filterAddons().map(addon => <AddonCard key={addon.id} addon={addon} />)}
      </div>
    </div>
  );
}
