import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

export default function PulsePage() {
  useLicenseGuard();
  return (
    <div className="page-content">
      {/* Pulse content */}
      <h1>Pulse</h1>
    </div>
  );
}
