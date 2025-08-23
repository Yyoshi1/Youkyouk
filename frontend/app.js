import React from "react";
import { AuthProvider } from "./context/AuthContext";
import SellerPage from "../pages/seller";

export default function App() {
  return (
    <AuthProvider>
      <SellerPage />
    </AuthProvider>
  );
}
