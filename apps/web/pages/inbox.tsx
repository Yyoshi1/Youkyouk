import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

export default function InboxPage() {
  useLicenseGuard();
  return (
    <div className="page-content">
      {/* Inbox content */}
      <h1>Inbox</h1>
    </div>
  );
}
