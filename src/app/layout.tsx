import { AppsStoreProvider } from '@/store/apps/apps-store-provider';
import type { Metadata }     from "next";
import Preloader             from "@/components/Preloader/Preloader";
import Cursor                from "@/components/Cursor/Cursor";
import Panel                 from "@/components/Panel/Panel";

import "@/assets/styles/globals.scss";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title       : "Argenix",
  description : "Веб-разработчик и верстальщик. Разрабатка веб-сайтов под ключ. Индивидуальный подход, поддержка после сдачи проекта.",
  openGraph   : {}
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="ru">
    <body>
      <Preloader />
      <AppsStoreProvider>
        {children}
        <Panel />
      </AppsStoreProvider>
      <div>
        <Toaster
          gutter={8}
          position='bottom-right'
          containerClassName="test"
          toastOptions={{
            duration: 2000,
            style: {
              color        : '#FFF',
              padding      : '6px',
              fontSize     : 12,
              borderRadius : 0,

            },
            success: {
              style: {
                backgroundColor : '#516300',
              }
            },
            loading: {
              style: {
                backgroundColor : '#516300',
              },
              icon: '⏳',
            },
            error: {
              style: {
                backgroundColor : '#880000',
              }
            }
          }}
        />
      </div>
      <Cursor />
    </body>
  </html>
}
