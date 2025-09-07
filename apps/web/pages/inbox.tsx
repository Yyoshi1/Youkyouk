import React from "react";
import { MainLayout } from "../../packages/ui/layouts/MainLayout";
import { YoukyoukAvatar } from "../../packages/ui/YoukyoukAvatar";
import { YoukyoukButton } from "../../packages/ui/YoukyoukButton";

export const InboxPage: React.FC = () => {
  const notifications = [
    { id: 1, project: "youkyouk Website", type: "Issue", title: "New bug reported", time: "2h ago", avatar: "Y" },
    { id: 2, project: "youkyouk Mobile", type: "Comment", title: "Client feedback received", time: "5h ago", avatar: "Y" },
    { id: 3, project: "youkyouk API", type: "Pull Request", title: "PR ready for review", time: "1d ago", avatar: "Y" },
  ];

  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Inbox</h1>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <ul>
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className="flex items-center justify-between px-4 py-3 border-b hover:bg-neutral-50"
              >
                <div className="flex items-center space-x-3">
                  <YoukyoukAvatar size={8} name={notif.avatar} />
                  <div>
                    <p className="text-sm font-medium">
                      {notif.project} • {notif.type}
                    </p>
                    <p className="text-sm text-neutral-500">{notif.title}</p>
                  </div>
                </div>
                <span className="text-xs text-neutral-400">{notif.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};
