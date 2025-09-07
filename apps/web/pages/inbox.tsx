import React from "react";
import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";

export const InboxPage: React.FC = () => {
  useLicenseGuard(); // 

  //  Inbox 
  return (
    <MainLayout>
      <div className="flex flex-col space-y-6">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Inbox
        </h1>

        {/* Notifications */}
        <section className="bg-white dark:bg-neutral-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Notifications</h2>
          <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
            <li>✅ You have 3 new messages</li>
            <li>⚠️ Task "Design UI" deadline is tomorrow</li>
            <li>💬 New comment on "Project Alpha"</li>
          </ul>
        </section>

        {/* Tasks */}
        <section className="bg-white dark:bg-neutral-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">My Tasks</h2>
          <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
            <li>📌 Design Header for Workspace</li>
            <li>📌 Review Backend APIs</li>
            <li>📌 Fix Sidebar responsiveness</li>
          </ul>
        </section>

        {/* Messages */}
        <section className="bg-white dark:bg-neutral-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Messages</h2>
          <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
            <li>
              <strong>Ali:</strong> Please review the latest PR
            </li>
            <li>
              <strong>Sara:</strong> Meeting moved to 3 PM
            </li>
            <li>
              <strong>Team:</strong> New workspace "Project Beta" created
            </li>
          </ul>
        </section>
      </div>
    </MainLayout>
  );
};

export default InboxPage;
