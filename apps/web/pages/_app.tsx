// apps/web/pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../packages/ui/context/ThemeContext";
import { MainLayout } from "../packages/ui/layouts/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
