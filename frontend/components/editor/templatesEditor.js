// frontend/components/editor/TemplatesEditor.js
import React, { useState } from "react";

export default function TemplatesEditor({ userRole }) {
  const [templates, setTemplates] = useState([
    { name: "Home", content: "" },
    { name: "Product", content: "" },
  ]);

  const updateContent = (index, value) => {
    const updated = [...templates];
    updated[index].content = value;
    setTemplates(updated);
  };

  const saveTemplates = () => alert("Templates saved!"); // ربط بالـ backend لاحقًا

  return (
    <div>
      <h2>Templates Editor</h2>
      {templates.map((template, i) => (
        <div key={i}>
          <h3>{template.name}</h3>
          <textarea value={template.content} onChange={(e) => updateContent(i, e.target.value)} />
        </div>
      ))}
      <button onClick={saveTemplates}>Save All Templates</button>
    </div>
  );
}
