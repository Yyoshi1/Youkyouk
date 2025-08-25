import React from "react";
import { SidebarItem, Role } from "./types";

interface AdminSidebarProps {
  role: Role;
  sidebarItems: SidebarItem[];
  onSelectItem: (item: SidebarItem) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ role, sidebarItems, onSelectItem }) => {
  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-4 fixed">
      <ul>
        {sidebarItems.map(item => (
          <li key={item.id} className="mb-2">
            <button
              className="w-full text-left p-2 hover:bg-gray-200 rounded"
              onClick={() => onSelectItem(item)}
            >
              {item.name}
            </button>
            {item.subItems && item.subItems.length > 0 && (
              <ul className="pl-4 mt-1">
                {item.subItems.map(sub => (
                  <li key={sub.id} className="mb-1">
                    <button
                      className="w-full text-left p-1 hover:bg-gray-300 rounded"
                      onClick={() => onSelectItem(sub)}
                    >
                      {sub.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
