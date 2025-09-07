import React, { ButtonHTMLAttributes } from "react";

interface YoukyoukButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const YoukyoukButton: React.FC<YoukyoukButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  ...props
}) => {
  let baseClass = "rounded-md font-semibold focus:outline-none transition-colors";
  let variantClass = "";
  let sizeClass = "";

  // Variants
  if (variant === "primary") variantClass = "bg-brand-500 text-white hover:bg-brand-600";
  if (variant === "secondary") variantClass = "bg-neutral-100 text-neutral-800 hover:bg-neutral-200";
  if (variant === "ghost") variantClass = "bg-transparent text-neutral-800 hover:bg-neutral-50";

  // Sizes
  if (size === "sm") sizeClass = "px-3 py-1 text-sm";
  if (size === "md") sizeClass = "px-4 py-2 text-base";
  if (size === "lg") sizeClass = "px-5 py-3 text-lg";

  return (
    <button className={`${baseClass} ${variantClass} ${sizeClass}`} {...props}>
      {children}
    </button>
  );
};
