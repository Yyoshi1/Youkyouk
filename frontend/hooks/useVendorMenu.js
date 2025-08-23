import { useState, useEffect } from "react";
import medusa from "../store/medusaClient";
import { useAuth } from "../context/AuthContext";

export default function useVendorMenu() {
  const { user } = useAuth();
  const vendorId = user?.vendorId || null;

  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!vendorId) return;
    const fetchMenu = async () => {
      try {
        const res = await medusa.admin.customObjects.list({ type: "vendorMenu", q: vendorId });
        setMenu(res.custom_objects || []);
      } catch (err) {
        console.error("Failed to fetch vendor menu:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, [vendorId]);

  return { menu, loading };
}
