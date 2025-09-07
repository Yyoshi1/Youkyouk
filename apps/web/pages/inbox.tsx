import React from "react";
import { MainLayout } from "../../packages/ui/layouts/MainLayout";

export const InboxPage: React.FC = () => {
  const messages = [
    { id: 1, sender: "Alice", subject: "Project Update", time: "2h ago" },
    { id: 2, sender: "Bob", subject: "New Issue Assigned", time: "5h ago" },
    { id: 3, sender: "Charlie", subject: "Team Meeting Notes", time: "1d ago" },
  ];

  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Inbox</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <ul>
            {messages.map((msg) => (
              <li key={msg.id} className="px-4 py-3 border-b hover:bg-neutral-50 flex justify-between">
                <div>
                  <p className="font-medium">{msg.sender}</p>
                  <p className="text-sm text-neutral-500">{msg.subject}</p>
                </div>
                <span className="text-xs text-neutral-400">{msg.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};
