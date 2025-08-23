import { useState } from "react";
import medusa from "../store/medusaClient";

export default function useCustomFields(productId) {
  const [fields, setFields] = useState([]);

  const addField = () => setFields([...fields, { name: "", type: "text" }]);
  const updateField = (index, key, value) => {
    const updated = [...fields];
    updated[index][key] = value;
    setFields(updated);
  };

  const saveFields = async () => {
    try {
      await medusa.admin.products.update(productId, {
        metadata: fields.reduce((acc, field) => {
          acc[field.name] = field.type;
          return acc;
        }, {})
      });
      alert("Custom fields saved!");
    } catch (err) {
      console.error("Failed to save custom fields:", err);
    }
  };

  return { fields, addField, updateField, saveFields };
}
