import React, { useState } from "react";
import { YoukyoukAvatar } from "./YoukyoukAvatar";

export const YoukyoukUserDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <YoukyoukAvatar size={8} name="U" onClick={() => setOpen(!open)} className="cursor-pointer" />
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
          <ul>
            <li className="px-4 py-2 hover:bg-neutral-50 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-neutral-50 cursor-pointer">Invite & Manage</li>
            <li className="px-4 py-2 hover:bg-neutral-50 cursor-pointer">Switch Workspace</li>
            <li className="px-4 py-2 hover:bg-neutral-50 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};
