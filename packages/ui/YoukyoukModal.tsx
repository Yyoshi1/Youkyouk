import React, { ReactNode } from "react";

interface YoukyoukModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const YoukyoukModal: React.FC<YoukyoukModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
        <button
          className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-700"
          onClick={onClose}
        >
          ✕
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};
