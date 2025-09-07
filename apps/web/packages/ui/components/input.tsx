import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring focus:border-blue-400"
    />
  );
};
