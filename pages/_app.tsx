// pages/_app.tsx
import type { AppProps } from "next/app";
import MainLayout from "../packages/ui/layouts/MainLayout";
import AdminLayout from "../packages/ui/layouts/AdminLayout";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  //  AdminLayout
  const isAdminPage = router.pathname.startsWith("/admin");

  const Layout = isAdminPage ? AdminLayout : MainLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
