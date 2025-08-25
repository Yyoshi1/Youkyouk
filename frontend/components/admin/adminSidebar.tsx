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
        {sidebarItems
          .filter(item => !item.rolesAllowed || item.rolesAllowed.includes(role))
          .map(item => (
          <li key={item.id} className="mb-2">
            <button
              className="w-full text-left p-2 hover:bg-gray-200 rounded"
              onClick={() => onSelectItem(item)}
            >
              {item.name}
            </button>

            {/* Render sub-items */}
            {item.subItems && item.subItems.length > 0 && (
              <ul className="pl-4 mt-1">
                {item.subItems
                  .filter(sub => !sub.rolesAllowed || sub.rolesAllowed.includes(role))
                  .map(sub => (
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

            {/* Render Addons */}
            {item.addons && item.addons.length > 0 && (
              <ul className="pl-4 mt-1">
                {item.addons
                  .filter(addon => addon.enabled && (!addon.rolesAllowed || addon.rolesAllowed.includes(role)))
                  .map(addon => (
                  <li key={addon.id} className="mb-1">
                    <button
                      className="w-full text-left p-1 hover:bg-gray-300 rounded"
                      onClick={() => console.log(`Open addon ${addon.name}`)}
                    >
                      {addon.name}
                    </button>

                    {/* Sub-sections */}
                    {addon.subSections && addon.subSections.length > 0 && (
                      <ul className="pl-4 mt-1">
                        {addon.subSections.map(sub => (
                          <li key={sub} className="mb-1">
                            <button
                              className="w-full text-left p-1 hover:bg-gray-300 rounded"
                              onClick={() => console.log(`Open sub-section ${sub}`)}
                            >
                              {sub}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
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
