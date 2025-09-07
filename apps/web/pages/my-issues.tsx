import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

const MyIssuesPage: React.FC = () => {
  useLicenseGuard();

  const issues = [
    { id: 1, title: "Fix login bug", status: "Open", priority: "High" },
    { id: 2, title: "Update documentation", status: "In Progress", priority: "Medium" },
    { id: 3, title: "Refactor sidebar", status: "Closed", priority: "Low" },
  ];

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Issues</h1>
      <ul className="space-y-2">
        {issues.map((issue) => (
          <li key={issue.id} className="p-3 bg-white dark:bg-gray-800 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">{issue.title}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{issue.status}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Priority: {issue.priority}</p>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default MyIssuesPage;
