import React from "react";

export const YoukyoukFooter: React.FC = () => {
  return (
    <footer className="w-full h-16 bg-white border-t flex items-center justify-center text-sm text-neutral-500">
      © {new Date().getFullYear()} youkyouk. All rights reserved.
    </footer>
  );
};
