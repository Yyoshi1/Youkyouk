import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

const InboxPage: React.FC = () => {
  useLicenseGuard();

  const messages = [
    { id: 1, title: "New task assigned", sender: "Alice", time: "2h ago" },
    { id: 2, title: "Project update", sender: "Bob", time: "1d ago" },
    { id: 3, title: "Meeting reminder", sender: "Charlie", time: "3d ago" },
  ];

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Inbox</h1>
      <ul className="space-y-2">
        {messages.map((msg) => (
          <li key={msg.id} className="p-3 bg-white dark:bg-gray-800 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">{msg.title}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{msg.time}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">From: {msg.sender}</p>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default InboxPage;
