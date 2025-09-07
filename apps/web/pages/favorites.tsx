import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

const FavoritesPage: React.FC = () => {
  useLicenseGuard();

  const favorites = [
    { id: 1, name: "Project Alpha", type: "Project" },
    { id: 2, name: "Task 42", type: "Task" },
    { id: 3, name: "Report Q3", type: "Report" },
  ];

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Favorites</h1>
      <ul className="space-y-2">
        {favorites.map((fav) => (
          <li key={fav.id} className="p-3 bg-white dark:bg-gray-800 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">{fav.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{fav.type}</span>
            </div>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default FavoritesPage;
