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
          if (app.type === 'exe') {
            const Comp = app.component;
            return !app.expanded && (
              <AppWrapper key={app.id} data={app}>
                <Comp />
              </AppWrapper>
            );
          }

          if (app.type === 'image') {
            const Comp = appInfo.image.component;
            return !app.expanded && (
              <AppWrapper key={app.id} data={app}>
                <Comp imageSrc={app.imageSrc} />
              </AppWrapper>
            );
          }

          const Comp = appInfo[app.type].component;
          return !app.expanded && (
            <AppWrapper key={app.id} data={app}>
              <Comp />
            </AppWrapper>
          );
        })}
      </AnimatePresence>
    </div>
  </div>
}