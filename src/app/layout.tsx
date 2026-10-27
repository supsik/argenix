import { AppsStoreProvider } from '@/store/apps/apps-store-provider';
import type { Metadata } from "next";
import Preloader from "@/components/Preloader/Preloader";
import Cursor from "@/components/Cursor/Cursor";
import Panel from "@/components/Panel/Panel";

import "@/assets/styles/globals.scss";

export const metadata: Metadata = {
  title       : "Argenix",
  description : "Веб-разработчик и верстальщик. Разрабатка веб-сайтов под ключ. Индивидуальный подход, поддержка после сдачи проекта.",
  openGraph   : {}
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="ru">
    <body>
      <Preloader />
      <Cursor />
      <AppsStoreProvider>
        {children}
        <Panel />
      </AppsStoreProvider>
    </body>
  </html>
}
