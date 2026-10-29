'use client';

import { ComponentAppType } from '@/lib/constants/types';
import { AnimatePresence }  from 'motion/react';
import { useAppsStore }     from '@/store/apps/apps-store-provider';
import AppWrapper           from '../AppWrapper/AppWrapper';
import AppLabel             from '../AppLabel/AppLabel';
import appData              from '@/lib/app-list';
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
        {openedApps.map((app: ComponentAppType) => {
          return !app.expanded && 
          <AppWrapper key={app.id} data={app}>
            <app.component />
          </AppWrapper>
        })}
      </AnimatePresence>
    </div>
  </div>
}