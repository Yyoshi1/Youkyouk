import React from "react";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input {...props} className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500" />
);
