import { AppType } from "@/lib/constants/types";
import { appInfo } from "@/lib/app-list";

export function AppContent({ app }: { app: AppType }) {
  switch (app.type) {
    case 'exe':
      return <app.component />;

    case 'image':
      return <appInfo.image.component data={app.imageSrc} />;

    case 'txt':
      return <appInfo.txt.component data={app.content} />;

    case 'info':
      return <appInfo.info.component data={app.content} />;

    case 'pdf':
      return <appInfo.pdf.component data={app.href} />;

    case 'folder':
      return <appInfo.folder.component />;
  }
}