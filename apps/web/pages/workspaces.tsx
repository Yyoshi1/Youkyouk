import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

export default function WorkspacesPage() {
  useLicenseGuard();
  return (
    <div className="page-content">
      {/* Workspaces content */}
      <h1>Workspaces</h1>
    </div>
  );
}
