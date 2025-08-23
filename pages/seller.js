import React from "react";
import { useAuth } from "../frontend/context/AuthContext";
import useProducts from "../frontend/hooks/useProducts";
import useVendorMenu from "../frontend/hooks/useVendorMenu";

export default function SellerPage() {
  const { user } = useAuth();
  const { products, loading: productsLoading } = useProducts();
  const { menu, loading: menuLoading } = useVendorMenu();

  if (!user) return <p>Please login to view your dashboard.</p>;
  if (productsLoading || menuLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}'s Seller Dashboard</h1>
      <h2>Menu</h2>
      <ul>{menu.map((item) => <li key={item.id}>{item.value.name}</li>)}</ul>
      <h2>Products</h2>
      <ul>{products.map((p) => <li key={p.id}>{p.title}</li>)}</ul>
    </div>
  );
}
