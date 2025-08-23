import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function AdminSidebar({ addons }) {
  const { language } = useLanguage();
  const [openAddons, setOpenAddons] = useState(false);

  const toggleAddons = () => setOpenAddons(!openAddons);

  const labels = {
    fr: { addons: "Addons", all: "Tous", updates: "Mises à jour" },
    en: { addons: "Addons", all: "All", updates: "Updates" },
    ar: { addons: "الإضافات", all: "الكل", updates: "التحديثات" },
  };

  return (
    <aside className="admin-sidebar">
      <ul>
        <li>Markets</li>
        <li>Models</li>
        <li>Sellers</li>
        <li>Users</li>
        <li>
          <button onClick={toggleAddons}>{labels[language].addons}</button>
          {openAddons && (
            <ul>
              <li>{labels[language].all}</li>
              <li>{labels[language].updates}</li>
            </ul>
          )}
        </li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}
