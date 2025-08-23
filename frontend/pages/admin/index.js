import React from "react";
import { LanguageProvider } from "../../context/LanguageContext";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminAddonsPage from "../../components/admin/AdminAddonsPage";

// Example addons data
const addons = [
  { id: 1, name: "Chat", description: "In-app chat module", logo: "/logos/chat.png", isRecent: true, isFavorite: true, hasUpdate: false },
  { id: 2, name: "Returns", description: "Manage returns", logo: "/logos/returns.png", isRecent: true, isFavorite: false, hasUpdate: true },
  // ... add more addons
];

export default function AdminPage() {
  return (
    <LanguageProvider>
      <AdminHeader notifications={[]} profile={{ email: "admin@youkyouk.com", avatar: "/avatar.png" }} />
      <div className="admin-layout">
        <AdminSidebar addons={addons} />
        <AdminAddonsPage addons={addons} />
      </div>
    </LanguageProvider>
  );
}
