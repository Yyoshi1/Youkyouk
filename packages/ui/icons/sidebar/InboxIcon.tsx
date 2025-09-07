import React from "react";

export const InboxIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0l-1.405 1.405M4 13l1.405 1.405M12 16v4m-4-4h8"/>
  </svg>
);
