import React, { useState } from "react";
import { useRouter } from "next/router";
import { LicenseManager } from "../../packages/ui/license/LicenseManager";

export const LicensePage: React.FC = () => {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleActivate = () => {
    if (LicenseManager.validate(key)) {
      localStorage.setItem("youkyouk_license", key);
      router.push("/inbox");
    } else {
      setError("Invalid license key.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="bg-white dark:bg-neutral-800 p-6 rounded shadow w-96">
        <h1 className="text-xl font-semibold mb-4">Activate youkyouk</h1>
        <input
          type="text"
          placeholder="Enter license key"
          className="w-full px-3 py-2 border rounded mb-4 text-sm bg-neutral-50 dark:bg-neutral-700"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          onClick={handleActivate}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Activate
        </button>
      </div>
    </div>
  );
};
