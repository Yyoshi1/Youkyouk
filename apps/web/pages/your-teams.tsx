import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

export default function YourTeamsPage() {
  useLicenseGuard();
  return (
    <div className="page-content">
      {/* Your Teams content */}
      <h1>Your Teams</h1>
    </div>
  );
}
