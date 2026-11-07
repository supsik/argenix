'use client';

import appData, { appInfo } from '@/lib/app-list';
import { AnimatePresence }  from 'motion/react';
import { useAppsStore }     from '@/store/apps/apps-store-provider';
import { AppType }          from '@/lib/constants/types';
import AppWrapper           from '../AppWrapper/AppWrapper';
import AppLabel             from '../AppLabel/AppLabel';
import styles               from './AppGrid.module.scss';

export default function AppGrid() {
  const openedApps = useAppsStore(s => s.openedApps);
  
  return <div className={styles.appGridWr}>
    {appData.map(app => <AppLabel
      key={app.id}
      app={app}
      isDraggable={true}
    />)}
    <div className={styles.openedAppsWr}>
      <AnimatePresence>
        {openedApps.map((app: AppType) => {
          switch (app.type) {
            case 'exe': {
              const Comp = app.component;
              return !app.expanded && (
                <AppWrapper key={app.id} data={app}>
                  <Comp />
                </AppWrapper>
              );
            };
              
            case 'image': {
              const Comp = appInfo.image.component;
              return !app.expanded && (
                <AppWrapper key={app.id} data={app}>
                  <Comp imageSrc={app.imageSrc} />
                </AppWrapper>
              );
            };

            case 'txt':
            case 'info': {
              const Comp = appInfo[app.type].component;
              return !app.expanded && (
                <AppWrapper key={app.id} data={app}>
                  <Comp data={app.content as any} />
                </AppWrapper>
              );
            };

            case 'pdf': {
              const Comp = appInfo.pdf.component;
              return !app.expanded && (
                <AppWrapper key={app.id} data={app}>
                  <Comp href={app.href} />
                </AppWrapper>
              );
            };
          
            default: {
              const Comp = appInfo[app.type].component;
              return !app.expanded && (
                <AppWrapper key={app.id} data={app}>
                  <Comp />
                </AppWrapper>
              );
            };
          }
        })}
      </AnimatePresence>
    </div>
  </div>
}