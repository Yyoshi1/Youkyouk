import React from "react";
import { MainLayout } from "../../packages/ui/layouts/MainLayout";
import { YoukyoukAvatar } from "../../packages/ui/YoukyoukAvatar";

export const FavoritesPage: React.FC = () => {
  const favorites = [
    { id: 1, type: "Issue", title: "Fix login bug", project: "youkyouk Website" },
    { id: 2, type: "Project", title: "Mobile App Redesign", project: "youkyouk Mobile" },
    { id: 3, type: "PR", title: "Update API Docs", project: "youkyouk API" },
  ];

  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Favorites</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <ul>
            {favorites.map((fav) => (
              <li key={fav.id} className="flex items-center justify-between px-4 py-3 border-b hover:bg-neutral-50">
                <div className="flex items-center space-x-3">
                  <YoukyoukAvatar size={8} name={fav.title[0]} />
                  <div>
                    <p className="text-sm font-medium">{fav.title}</p>
                    <p className="text-xs text-neutral-400">{fav.project} • {fav.type}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};
