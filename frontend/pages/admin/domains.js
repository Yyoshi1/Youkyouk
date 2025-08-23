import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DomainsPage() {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newDomain, setNewDomain] = useState({ domain_name: "", model_type: "b2c" });

  useEffect(() => {
    fetchDomains();
  }, []);

  const fetchDomains = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/domains");
      setDomains(res.data.domains);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleCreate = async () => {
    try {
      await axios.post("/api/domains", newDomain);
      setNewDomain({ domain_name: "", model_type: "b2c" });
      fetchDomains();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/domains/${id}`);
      fetchDomains();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Manage Domains</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Domain Name"
          value={newDomain.domain_name}
          onChange={(e) => setNewDomain({ ...newDomain, domain_name: e.target.value })}
          style={{ marginRight: 10 }}
        />
        <select
          value={newDomain.model_type}
          onChange={(e) => setNewDomain({ ...newDomain, model_type: e.target.value })}
          style={{ marginRight: 10 }}
        >
          <option value="b2c">B2C</option>
          <option value="b2b">B2B</option>
          <option value="c2c">C2C</option>
        </select>
        <button onClick={handleCreate}>Add Domain</button>
      </div>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Domain</th>
            <th>Model</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {domains.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.domain_name}</td>
              <td>{d.model_type}</td>
              <td>{d.is_active ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => handleDelete(d.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
