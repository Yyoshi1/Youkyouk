import { useState, useEffect } from "react";
import medusa from "../store/medusaClient";

export default function useVendorMenu(vendorId) {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
