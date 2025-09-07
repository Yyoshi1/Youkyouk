import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import { AdminLayout } from "../packages/ui/layouts/AdminLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
  // /pages/admin/* AdminLayout
  const isAdminPage = Component.displayName === "AdminPage";

  const Layout = isAdminPage ? AdminLayout : MainLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
