import React from "react";
import { AppProps } from "next/app";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
