import React, { InputHTMLAttributes } from "react";

interface YoukyoukInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const YoukyoukInput: React.FC<YoukyoukInputProps> = ({ placeholder, ...props }) => {
  return (
    <input
      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 placeholder:text-neutral-400"
      placeholder={placeholder}
      {...props}
    />
  );
};
