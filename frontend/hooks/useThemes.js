import { useState } from "react";
import medusa from "../store/medusaClient";

export default function useThemes() {
  const [theme, setTheme] = useState({ primaryColor: "#000000", font: "Arial" });

  const saveTheme = async () => {
    try {
      // 
      await medusa.admin.regions.update("region_id_here", {
        metadata: theme
      });
      alert("Theme saved successfully!");
    } catch (err) {
      console.error("Failed to save theme:", err);
    }
  };

  return { theme, setTheme, saveTheme };
}
