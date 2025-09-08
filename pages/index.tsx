// pages/index.tsx
import React from "react";
import { MainLayout } from "../packages/ui/layouts/MainLayout";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to Youkyouk Dashboard</h1>
    </MainLayout>
  );
};

export default HomePage;
