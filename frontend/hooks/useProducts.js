import { useState, useEffect } from "react";
import medusa from "../store/medusaClient";

export default function useProducts(vendorId = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res;
        if (vendorId) {
          res = await medusa.products.list({ expand: ["variants"], q: vendorId });
        } else {
          res = await medusa.products.list({ expand: ["variants"] });
        }
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
