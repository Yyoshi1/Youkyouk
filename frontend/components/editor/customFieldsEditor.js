// frontend/components/editor/CustomFieldsEditor.js
import React, { useState } from "react";

export default function CustomFieldsEditor({ userRole }) {
  const [fields, setFields] = useState([]);

  const addField = () => setFields([...fields, { name: "", type: "text" }]);
  const updateField = (index, key, value) => {
    const updated = [...fields];
    updated[index][key] = value;
    setFields(updated);
  };
  const saveFields = () => alert("Custom fields saved!"); // ربط لاحقًا بالـ backend

  return (
    <div>
      <h2>Custom Fields Editor</h2>
      <button onClick={addField}>Add Field</button>
      {fields.map((field, i) => (
        <div key={i}>
          <input placeholder="Field Name" value={field.name} onChange={(e) => updateField(i, "name", e.target.value)} />
          <select value={field.type} onChange={(e) => updateField(i, "type", e.target.value)}>
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
          </select>
        </div>
      ))}
      <button onClick={saveFields}>Save Fields</button>
    </div>
  );
}
