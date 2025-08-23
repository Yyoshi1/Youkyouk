import { useState, useEffect } from "react";
import medusa from "../store/medusaClient";
import { useAuth } from "../context/AuthContext";

export default function useProducts() {
  const { user } = useAuth();
  const vendorId = user?.vendorId || null;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!vendorId) return;
    const fetchProducts = async () => {
      try {
        const res = await medusa.products.list({ expand: ["variants"], q: vendorId });
        setProducts(res.products);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [vendorId]);

  return { products, loading };
}
