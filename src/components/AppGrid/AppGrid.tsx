'use client';

import { useState } from 'react';
import { AppType } from '@/lib/constants/types';
import AppWrapper from '../AppWrapper/AppWrapper';
import AppLabel from '../AppLabel/AppLabel';
import appData from '@/lib/app-list';
import styles from './AppGrid.module.scss';

export default function AppGrid() {
  const [openedApps, setOpenedApps] = useState<Array<AppType>>([]);

  const checkApp = (app: AppType) => {
    if (!openedApps.some(el => el.id === app.id))
      setOpenedApps(state => [...state, app]);
  };

  return <div className={styles.appGridWr}>
    {appData.map(app => <AppLabel
      key={app.id}
      app={app}
      checkApp={checkApp}
    />)}
    {openedApps.map((app: AppType) => {
      const Component = app.component;
      return <AppWrapper
        key={app.id}
        data={app}
        setOpenedApps={setOpenedApps}
      >
        <Component />
      </AppWrapper>;
    })}
  </div>
}