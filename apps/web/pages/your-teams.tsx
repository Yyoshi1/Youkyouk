import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";
import { MainLayout } from "../packages/ui/layouts/MainLayout";

export default function YourTeamsPage() {
  useLicenseGuard();

  return (
    <MainLayout>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r">
          <div className="p-4 font-bold text-xl">Youkyouk</div>
          <nav className="mt-6">
            <ul>
              <li className="p-2 hover:bg-gray-200 rounded"><a href="/inbox">Inbox</a></li>
              <li className="p-2 hover:bg-gray-200 rounded"><a href="/my-issues">My Issues</a></li>
              <li className="p-2 hover:bg-gray-200 rounded"><a href="/pulse">Pulse</a></li>
              <li className="p-2 hover:bg-gray-200 rounded"><a href="/workspaces">Workspaces</a></li>
              <li className="p-2 hover:bg-gray-200 rounded"><a href="/favorites">Favorites</a></li>
              <li className="p-2 hover:bg-gray-200 rounded"><a href="/your-teams">Your Teams</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 p-6">
          <header className="flex justify-between items-center mb-6">
            <div className="text-xl font-semibold">Your Teams</div>
          </header>

          <section>
            <div className="bg-white p-4 rounded shadow mb-4">
              <h2 className="font-bold">Team Alpha</h2>
              <p>Members: 5</p>
              <p>Projects: 3</p>
            </div>
            <div className="bg-white p-4 rounded shadow mb-4">
              <h2 className="font-bold">Team Beta</h2>
              <p>Members: 8</p>
              <p>Projects: 2</p>
            </div>
          </section>
        </div>
      </div>

      <footer className="bg-white border-t p-4 text-center text-gray-500">
        © 2025 Youkyouk. All rights reserved.
      </footer>
    </MainLayout>
  );
}
