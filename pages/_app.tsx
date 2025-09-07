// pages/_app.tsx
import '../styles/globals.css';
import { MainLayout } from '../packages/ui/layouts/MainLayout';

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
