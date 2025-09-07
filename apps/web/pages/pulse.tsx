import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

const PulsePage: React.FC = () => {
  useLicenseGuard();

  const updates = [
    { id: 1, content: "Alice completed Task #42", time: "2h ago" },
    { id: 2, content: "Bob commented on Project Alpha", time: "5h ago" },
    { id: 3, content: "Charlie joined the Backend Team", time: "1d ago" },
  ];

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Pulse</h1>
      <ul className="space-y-2">
        {updates.map((update) => (
          <li key={update.id} className="p-3 bg-white dark:bg-gray-800 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700">
            <p className="text-gray-700 dark:text-gray-300">{update.content}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">{update.time}</span>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default PulsePage;
