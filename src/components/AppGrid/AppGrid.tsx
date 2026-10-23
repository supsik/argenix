'use client';

import { AnimatePresence } from 'motion/react';
import { useAppsStore } from '@/store/apps/apps-store-provider';
import { AppType } from '@/lib/constants/types';
import AppWrapper from '../AppWrapper/AppWrapper';
import AppLabel from '../AppLabel/AppLabel';
import appData from '@/lib/app-list';
import styles from './AppGrid.module.scss';

export default function AppGrid() {
  const openedApps = useAppsStore(s => s.openedApps);
  
  return <div className={styles.appGridWr}>
    {appData.map(app => <AppLabel
      key={app.id}
      app={app}
    />)}
    <AnimatePresence>
      {openedApps.map((app: AppType) => {
        return !app.expanded && 
        <AppWrapper key={app.id} data={app}>
          <app.component />
        </AppWrapper>
      })}
    </AnimatePresence>
  </div>
}