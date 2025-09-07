import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

export default function MyIssuesPage() {
  useLicenseGuard();
  return (
    <div className="page-content">
      {/* My Issues content */}
      <h1>My Issues</h1>
    </div>
  );
}
