import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { SidebarItem, Role } from "./types";

interface AdminLayoutProps {
  role: Role;
  sidebarItems: SidebarItem[];
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ role, sidebarItems, children }) => {
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);

  return (
    <div className="flex">
      <AdminSidebar role={role} sidebarItems={sidebarItems} onSelectItem={setSelectedItem} />
      <div className="flex-1 ml-64">
        <AdminHeader onSearch={(q) => console.log(q)} notificationsCount={3} />
        <main className="pt-20 p-4">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
