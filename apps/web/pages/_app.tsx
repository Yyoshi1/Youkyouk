// pages/_app.tsx
import React from "react";
import { MainLayout } from "../packages/ui/layouts/MainLayout";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
