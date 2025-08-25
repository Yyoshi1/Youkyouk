import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

interface Message {
  id: string;
  sender: "buyer" | "seller" | "admin" | "bot";
  content: string;
  attachments?: string[];
  createdAt: string;
  read: boolean;
}

interface ChatDirectProps {
  conversationId: string;
  userRole: "buyer" | "seller" | "admin";
  botEndpoint: string;
}

const ChatDirect: React.FC<ChatDirectProps> = ({ conversationId, userRole, botEndpoint }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000); // Polling every 3 seconds
    return () => clearInterval(interval);
  }, [conversationId]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(`/api/chat/${conversationId}`);
      setMessages(res.data);
      scrollToBottom();
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const tempMessage: Message = {
      id: Date.now().toString(),
      sender: userRole,
      content: newMessage,
      createdAt: new Date().toISOString(),
      read: false,
    };

    setMessages([...messages, tempMessage]);
    setNewMessage("");
    scrollToBottom();

    try {
      await axios.post(`/api/chat/${conversationId}`, { message: tempMessage });

      // Send message to chatbot
      const botRes = await axios.post(botEndpoint, { message: tempMessage.content, conversationId });
      if (botRes.data?.reply) {
        const botMessage: Message = {
          id: Date.now().toString() + "_bot",
          sender: "bot",
          content: botRes.data.reply,
          createdAt: new Date().toISOString(),
          read: false,
        };
        setMessages((prev) => [...prev, botMessage]);
        scrollToBottom();
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div className="messages" style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`} style={{ marginBottom: "10px" }}>
            <span>{msg.content}</span>
            {msg.attachments && msg.attachments.map((att, i) => <img key={i} src={att} alt="attachment" style={{ maxWidth: "150px", marginLeft: "5px" }} />)}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-area" style={{ display: "flex", padding: "10px", borderTop: "1px solid #ddd" }}>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          style={{ flex: 1, resize: "none", padding: "10px" }}
        />
        <button onClick={handleSendMessage} style={{ marginLeft: "10px", padding: "10px 20px" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatDirect;
