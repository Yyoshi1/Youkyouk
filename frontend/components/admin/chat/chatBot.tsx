import React, { useState, useEffect } from "react";
import { getQuickResponses } from "@/services/chatAPI";
import QuickReplyList from "./QuickReplyList";
import ChatBubble from "../ui/ChatBubble";

export default function ChatBot() {
  const [messages, setMessages] = useState<
    { sender: "bot" | "user"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [quickReplies, setQuickReplies] = useState<string[]>([]);

  // Fetch quick replies
  useEffect(() => {
    async function fetchReplies() {
      const data = await getQuickResponses("ar"); // or "fr" / "en"
      setQuickReplies(data);
    }
    fetchReplies();
  }, []);

  const sendMessage = (msg: string, fromQuickReply = false) => {
    if (!msg.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: msg }]);
    setInput("");

    // Simulate bot response (API Integration Later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "تم استلام رسالتك: " + msg },
      ]);
    }, 500);

    if (fromQuickReply) return;
  };

  return (
    <div className="flex flex-col h-full p-4 border rounded-lg bg-white shadow-md">
      <div className="flex-1 overflow-y-auto space-y-2 mb-3">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      <QuickReplyList onSelect={(reply) => sendMessage(reply, true)} replies={quickReplies} />

      <div className="flex mt-2">
        <input
          className="flex-1 border p-2 rounded-l-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب رسالتك هنا..."
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r-md"
          onClick={() => sendMessage(input)}
        >
          إرسال
        </button>
      </div>
    </div>
  );
}
