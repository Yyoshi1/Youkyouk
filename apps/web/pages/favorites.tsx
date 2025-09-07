import { useLicenseGuard } from "../packages/ui/license/useLicenseGuard";

export default function FavoritesPage() {
  useLicenseGuard();
  return (
    <div className="page-content">
      {/* Favorites content */}
      <h1>Favorites</h1>
    </div>
  );
}
