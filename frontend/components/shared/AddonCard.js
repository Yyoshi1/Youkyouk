import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function AddonCard({ addon }) {
  const { language } = useLanguage();
  const [favorite, setFavorite] = useState(addon.isFavorite || false);

  const toggleFavorite = () => setFavorite(!favorite);

  const dropdownLabels = {
    fr: { help: "Aide", settings: "Paramètres", demo: "Données demo", layouts: "Layouts" },
    en: { help: "Help", settings: "Settings", demo: "Demo Data", layouts: "Layouts" },
    ar: { help: "مساعدة", settings: "الإعدادات", demo: "بيانات تجريبية", layouts: "التخطيطات" },
  };

  return (
    <div className="addon-card">
      <div className="top-row">
        <span onClick={toggleFavorite} className={`star ${favorite ? "gold" : ""}`}>★</span>
        <img src={addon.logo} alt={addon.name} />
      </div>
      <h3>{addon.name}</h3>
      <p>{addon.description}</p>
      <span className="author">Youkyouk</span>
      <div className="dropdown">
        <button>Open</button>
        <ul>
          <li>{dropdownLabels[language].help}</li>
          <li>{dropdownLabels[language].settings}</li>
          <li>{dropdownLabels[language].demo}</li>
          <li>{dropdownLabels[language].layouts}</li>
        </ul>
      </div>
    </div>
  );
}
