import React, { useState, useEffect } from "react";
import { Role } from "../../components/admin/types";

interface StripeAddonPageProps {
  role: Role;
}

const StripeAddonPage: React.FC<StripeAddonPageProps> = ({ role }) => {
  const [enabled, setEnabled] = useState(true);
  const [apiKey, setApiKey] = useState("");
  const [transactions, setTransactions] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  
  // Fetch transactions & users
  useEffect(() => {
    // Example: fetch("/api/stripe/transactions")...
    setTransactions([
      { id: 1, user: "John Doe", amount: 100, status: "paid" },
      { id: 2, user: "Alice Smith", amount: 50, status: "failed" }
    ]);
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Alice Smith", email: "alice@example.com" }
    ]);
  }, []);

  const handleSaveSettings = () => {
    console.log("Save Stripe settings", { enabled, apiKey });
    // Call API to save settings
  };

  return (
    <div className="p-6 ml-64">
      <h1 className="text-2xl font-bold mb-4">Stripe Addon Management</h1>

      {/* Settings */}
      <section className="mb-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Settings</h2>
        <div className="mb-2">
          <label className="mr-2">Enabled:</label>
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
            disabled={role === "modelAdmin"} // Example: only higher roles can toggle
          />
        </div>
        <div className="mb-2">
          <label className="mr-2">API Key:</label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="border p-1 rounded"
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

      {/* Transactions */}
      <section className="mb-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Transactions</h2>
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">ID</th>
              <th className="border px-2 py-1">User</th>
              <th className="border px-2 py-1">Amount</th>
              <th className="border px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(tx => (
              <tr key={tx.id}>
                <td className="border px-2 py-1">{tx.id}</td>
                <td className="border px-2 py-1">{tx.user}</td>
                <td className="border px-2 py-1">{tx.amount}</td>
                <td className="border px-2 py-1">{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Users */}
      <section className="mb-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Users linked to Stripe</h2>
        <ul className="list-disc pl-6">
          {users.map(user => (
            <li key={user.id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StripeAddonPage;
