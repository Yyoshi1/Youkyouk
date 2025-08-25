import React, { useState, useEffect } from "react";
import { Role } from "../../components/admin/types";

interface ReturnAddonPageProps {
  role: Role;
}

const ReturnAddonPage: React.FC<ReturnAddonPageProps> = ({ role }) => {
  const [enabled, setEnabled] = useState(true);
  const [policies, setPolicies] = useState<string[]>([]);
  const [methods, setMethods] = useState<string[]>([]);
  const [returns, setReturns] = useState<any[]>([]);

  useEffect(() => {
    // Example: fetch data from API
    setPolicies(["Full refund within 30 days", "Exchange only within 15 days"]);
    setMethods(["Courier", "In-store drop-off"]);
    setReturns([
      { id: 1, order: "1001", user: "John Doe", status: "pending" },
      { id: 2, order: "1002", user: "Alice Smith", status: "approved" }
    ]);
  }, []);

  const handleSaveSettings = () => {
    console.log("Save Return settings", { enabled, policies, methods });
    // API call to save settings
  };

  return (
    <div className="p-6 ml-64">
      <h1 className="text-2xl font-bold mb-4">Return Management Addon</h1>

      {/* Settings */}
      <section className="mb-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Settings</h2>
        <div className="mb-2">
          <label className="mr-2">Enabled:</label>
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
            disabled={role === "modelAdmin"}
          />
        </div>
        <button
          onClick={handleSaveSettings}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={role === "modelAdmin"}
        >
          Save Settings
        </button>
      </section>

      {/* Policies */}
      <section className="mb-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Return Policies</h2>
        <ul className="list-disc pl-6">
          {policies.map((policy, idx) => (
            <li key={idx}>{policy}</li>
          ))}
        </ul>
      </section>

      {/* Methods */}
      <section className="mb-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Return Methods</h2>
        <ul className="list-disc pl-6">
          {methods.map((method, idx) => (
            <li key={idx}>{method}</li>
          ))}
        </ul>
      </section>

      {/* Return Requests */}
      <section className="mb-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Return Requests</h2>
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">ID</th>
              <th className="border px-2 py-1">Order</th>
              <th className="border px-2 py-1">User</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {returns.map((r) => (
              <tr key={r.id}>
                <td className="border px-2 py-1">{r.id}</td>
                <td className="border px-2 py-1">{r.order}</td>
                <td className="border px-2 py-1">{r.user}</td>
                <td className="border px-2 py-1">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ReturnAddonPage;
