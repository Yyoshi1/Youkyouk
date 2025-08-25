import React from "react";

export default function QuickReplyList({ replies, onSelect }: { replies: string[], onSelect: (r: string) => void }) {
  if (!replies.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {replies.map((reply, idx) => (
        <button
          key={idx}
          className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300"
          onClick={() => onSelect(reply)}
        >
          {reply}
        </button>
      ))}
    </div>
  );
}
