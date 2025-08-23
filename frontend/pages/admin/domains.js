import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ManageDomains() {
  const [domains, setDomains] = useState([]);
  const [domainName, setDomainName] = useState("");
  const [modelType, setModelType] = useState("b2c");
  const [loading, setLoading] = useState(false);

  // 
  const fetchDomains = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/domains");
      setDomains(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDomains();
  }, []);

  // 
  const addDomain = async () => {
    if (!domainName) return alert("Please enter domain name");
    try {
      setLoading(true);
      await axios.post("/api/domains", { domain_name: domainName, model_type: modelType });
      setDomainName("");
      fetchDomains();
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  // 
  const deleteDomain = async (id) => {
    if (!window.confirm("Are you sure you want to delete this domain?")) return;
    try {
      setLoading(true);
      await axios.delete(`/api/domains/${id}`);
      fetchDomains();
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "20px" }}>Manage Domains</h1>

      {/* Form لإضافة نطاق */}
      <div style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Domain Name"
          value={domainName}
          onChange={(e) => setDomainName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", width: "250px" }}
        />
        <select value={modelType} onChange={(e) => setModelType(e.target.value)} style={{ padding: "8px", marginRight: "10px" }}>
          <option value="b2c">B2C</option>
          <option value="b2b">B2B</option>
          <option value="c2c">C2C</option>
        </select>
        <button
          onClick={addDomain}
          style={{ padding: "8px 16px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}
        >
          Add Domain
        </button>
      </div>

      {/* */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>ID</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Domain</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Model Type</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Active</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((d) => (
              <tr key={d.id}>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{d.id}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{d.domain_name}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{d.model_type}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{d.is_active ? "Yes" : "No"}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  <button
                    onClick={() => deleteDomain(d.id)}
                    style={{ padding: "6px 12px", backgroundColor: "#dc3545", color: "white", border: "none", cursor: "pointer" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
