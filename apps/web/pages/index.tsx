import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

export default function HomePage() {
  useLicenseGuard();
  return (
    <div className="page-content">
      <h1>Welcome to Youkyouk</h1>
      <p>Your workspace management platform.</p>
    </div>
  );
}
