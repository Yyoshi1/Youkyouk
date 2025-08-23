// frontend/components/editor/ThemesEditor.js
import React, { useState } from "react";

export default function ThemesEditor({ userRole }) {
  const [theme, setTheme] = useState({
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    font: "Arial",
  });

  const handleChange = (e) => setTheme({ ...theme, [e.target.name]: e.target.value });
  const saveTheme = () => alert("Theme saved!"); // ربط لاحقًا بالـ backend

  return (
    <div>
      <h2>Themes Editor</h2>
      <label>Primary Color: <input type="color" name="primaryColor" value={theme.primaryColor} onChange={handleChange} /></label>
      <label>Secondary Color: <input type="color" name="secondaryColor" value={theme.secondaryColor} onChange={handleChange} /></label>
      <label>Font: <input type="text" name="font" value={theme.font} onChange={handleChange} /></label>
      <button onClick={saveTheme}>Save Theme</button>
    </div>
  );
}
