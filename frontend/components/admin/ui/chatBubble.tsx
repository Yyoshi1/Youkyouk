import React from "react";

export default function ChatBubble({ sender, text }: { sender: "bot" | "user"; text: string }) {
  return (
    <div
      className={`p-2 rounded-md max-w-xs ${
        sender === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
      }`}
    >
      {text}
    </div>
  );
}
