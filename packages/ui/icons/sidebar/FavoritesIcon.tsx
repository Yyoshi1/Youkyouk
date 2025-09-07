import React from "react";

export const FavoritesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16z"/>
  </svg>
);
