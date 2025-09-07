import { AppProps } from "next/app";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import "../packages/ui/styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
