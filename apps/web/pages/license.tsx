import { useState } from "react";
import { useRouter } from "next/router";

export default function LicensePage() {
  const [key, setKey] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (key.trim()) {
      localStorage.setItem("youkyouk_license", key);
      router.push("/");
    } else {
      alert("Please enter a license key.");
    }
  };

  return (
    <div className="page-content">
      <h1>Enter Your License Key</h1>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="License Key"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
