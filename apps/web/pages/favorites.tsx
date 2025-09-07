import React, { useState } from "react";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

interface FavoriteItem {
  id: number;
  type: "Task" | "Project" | "Team";
  name: string;
}

export const FavoritesPage: React.FC = () => {
  useLicenseGuard();

  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    { id: 1, type: "Task", name: "Design Homepage" },
    { id: 2, type: "Project", name: "Project Alpha" },
    { id: 3, type: "Team", name: "Marketing Team" },
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <MainLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Favorites</h1>
        {favorites.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No favorites yet.</p>
        ) : (
          <ul className="space-y-2">
            {favorites.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-2 border rounded border-gray-200 dark:border-gray-700"
              >
                <span className="text-gray-900 dark:text-white">{item.type}: {item.name}</span>
                <button
                  onClick={() => removeFavorite(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </MainLayout>
  );
};

export default FavoritesPage;
