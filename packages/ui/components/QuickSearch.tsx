import React, { forwardRef } from "react";

interface QuickSearchProps {
  inputRef?: React.Ref<HTMLInputElement>;
}

export const QuickSearch = forwardRef<HTMLInputElement, QuickSearchProps>(
  ({ inputRef }, ref) => {
    return (
      <input
        ref={inputRef || ref}
        type="text"
        placeholder="Search... (Ctrl+E)"
        className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />
    );
  }
);

QuickSearch.displayName = "QuickSearch";
