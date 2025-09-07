import React from "react";

export const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 p-4 rounded" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
