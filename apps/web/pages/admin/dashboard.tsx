import { MainLayout } from "../../packages/ui/layouts/MainLayout";
import { useLicenseGuard } from "../../packages/ui/license/useLicenseGuard";

const AdminDashboardPage: React.FC = () => {
  useLicenseGuard();

  const stats = [
    { id: 1, title: "Total Tasks", value: 128 },
    { id: 2, title: "Completed Tasks", value: 76 },
    { id: 3, title: "Active Projects", value: 12 },
  ];

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="p-4 bg-white dark:bg-gray-800 rounded shadow text-center">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">{stat.title}</h2>
            <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">{stat.value}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default AdminDashboardPage;
