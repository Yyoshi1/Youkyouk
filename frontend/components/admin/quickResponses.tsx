import { useState, useEffect } from "react";
import { getQuickResponses, addQuickResponse, deleteQuickResponse } from "../../utils/chatApi";

interface QuickResponse {
  id: string;
  text: string;
}

export default function QuickResponses() {
  const [lang, setLang] = useState("en");
  const [responses, setResponses] = useState<QuickResponse[]>([]);
  const [newResponse, setNewResponse] = useState("");

  // Fetch responses
  useEffect(() => {
    fetchResponses();
  }, [lang]);

  const fetchResponses = async () => {
    try {
      const data = await getQuickResponses(lang);
      setResponses(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAdd = async () => {
    if (!newResponse) return;
    try {
      await addQuickResponse(lang, newResponse);
      setNewResponse("");
      fetchResponses();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteQuickResponse(id);
      fetchResponses();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Quick Responses Management</h2>

      <div className="mb-4">
        <label className="mr-2">Language:</label>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add new response..."
          className="border p-2 flex-1"
          value={newResponse}
          onChange={(e) => setNewResponse(e.target.value)}
        />
        <button onClick={handleAdd} className="ml-2 bg-blue-600 text-white px-4 py-2">
          Add
        </button>
      </div>

      <ul>
        {responses.map((r) => (
          <li key={r.id} className="flex justify-between items-center border-b py-2">
            <span>{r.text}</span>
            <button onClick={() => handleDelete(r.id)} className="text-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
