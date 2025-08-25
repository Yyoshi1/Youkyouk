import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

interface ProductItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

interface Message {
  id: string;
  sender: "buyer" | "seller" | "admin" | "bot";
  content: string;
  attachments?: string[];
  products?: ProductItem[];
  invoiceUrl?: string;
  paymentLink?: string;
  createdAt: string;
  read: boolean;
}

interface ChatDirectAdvancedProps {
  conversationId: string;
  userRole: "buyer" | "seller" | "admin";
  botEndpoint: string;
  conversationRetentionDays: number;
}

const ChatDirectAdvanced: React.FC<ChatDirectAdvancedProps> = ({
  conversationId,
  userRole,
  botEndpoint,
  conversationRetentionDays,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [quickReplies, setQuickReplies] = useState<string[]>(["Hello", "Send invoice", "Thank you"]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
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

  const handleSendMessage = async (content?: string, products?: ProductItem[], invoiceUrl?: string, paymentLink?: string) => {
    const messageContent = content ?? newMessage;
    if (!messageContent.trim() && !products && !invoiceUrl && !paymentLink) return;

    const tempMessage: Message = {
      id: Date.now().toString(),
      sender: userRole,
      content: messageContent,
      products,
      invoiceUrl,
      paymentLink,
      createdAt: new Date().toISOString(),
      read: false,
    };

    setMessages([...messages, tempMessage]);
    setNewMessage("");
    scrollToBottom();

    try {
      await axios.post(`/api/chat/${conversationId}`, { message: tempMessage });

      // Bot integration
      const botRes = await axios.post(botEndpoint, { message: messageContent, conversationId });
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

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
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

            {msg.products &&
              msg.products.map((p) => (
                <div key={p.id} style={{ border: "1px solid #ccc", padding: "5px", margin: "5px 0" }}>
                  <strong>{p.name}</strong> - Qty: {p.quantity}, Unit: ${p.unitPrice}, Total: ${p.quantity * p.unitPrice}
                </div>
              ))}

            {msg.attachments &&
              msg.attachments.map((att, i) => (
                <img key={i} src={att} alt="attachment" style={{ maxWidth: "150px", marginLeft: "5px" }} />
              ))}

            {msg.invoiceUrl && (
              <div>
                Invoice: <a href={msg.invoiceUrl} target="_blank" rel="noopener noreferrer">{msg.invoiceUrl}</a>
              </div>
            )}

            {msg.paymentLink && (
              <div>
                Payment: <a href={msg.paymentLink} target="_blank" rel="noopener noreferrer">{msg.paymentLink}</a>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="quick-replies" style={{ display: "flex", overflowX: "auto", padding: "5px", borderTop: "1px solid #ddd" }}>
        {quickReplies.map((qr, i) => (
          <button key={i} style={{ marginRight: "5px" }} onClick={() => handleQuickReply(qr)}>
            {qr}
          </button>
        ))}
      </div>

      <div className="input-area" style={{ display: "flex", padding: "10px", borderTop: "1px solid #ddd" }}>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          style={{ flex: 1, resize: "none", padding: "10px" }}
        />
        <button onClick={() => handleSendMessage()} style={{ marginLeft: "10px", padding: "10px 20px" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatDirectAdvanced;
