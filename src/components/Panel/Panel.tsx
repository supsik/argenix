'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { useAppsStore } from '@/store/apps/apps-store-provider';
import { AppType } from '@/lib/constants/types';
import styles from './Panel.module.scss';
import Image from 'next/image';
import Logo from '../Icons/Logo';
import clsx from 'clsx';

export default function Panel() {
  const [currentTime, setCurrentTime] = useState<string>('');

  const focusedApp = useAppsStore(s => s.focusedApp);
  const openedApps = useAppsStore(s => s.openedApps);
  const expandApp  = useAppsStore(s => s.expandApp);
  const focusApp   = useAppsStore(s => s.focusApp);

  const checkFocus = (app: AppType) => {
    if (focusedApp && focusedApp.id == app.id && !app.expanded)
      expandApp(app.id);

    else if (app.expanded) {
      expandApp(app.id);
      focusApp(app.id);
    }

    else
      focusApp(app.id);
  };

  useEffect(() => {
    const setTime = () => {
      const time    = new Date();
      const hours   = time.getHours().toString().padStart(2, '0');
      const minutes = time.getMinutes().toString().padStart(2, '0');

      setCurrentTime(`${hours}:${minutes}`);
    };

    setTime();

    const interval = setInterval(setTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className={styles.panelWr}>
    <button>
      <div className={styles.panelLogo}>
        <Logo />
      </div>
    </button>
    <div className={styles.panelOpenedItems}>
      <AnimatePresence>
        {openedApps.map(el => {
          const classList = clsx(styles.panelItem, {
            [styles.expanded]: el.expanded,
          });
          return <motion.button
            className={classList}
            key={el.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0, transition: { duration: .25 }}}
            exit={{ opacity: 0, y: 4, transition: { duration: .2 }}}
            onClick={() => checkFocus(el)}
          >
            <Image
              src={el.iconSrc}
              alt=''
              width={24}
              height={24}
            />
          </motion.button>
        })}
      </AnimatePresence>
    </div>
    <div className={styles.panelTime}>
      {currentTime}
    </div>
  </div>
}