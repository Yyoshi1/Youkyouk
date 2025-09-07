import "../styles/globals.css"; // إذا عندك CSS عام
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
