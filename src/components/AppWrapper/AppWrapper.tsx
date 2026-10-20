import { ReactNode } from 'react';
import { AppType } from '@/lib/constants/types';
import styles from './AppWrapper.module.scss';

interface PropsType {
  children : ReactNode,
  data     : AppType
}

export default function AppWrapper({children, data}: PropsType) {
  return <div className={styles.appWr}>
    <div className={styles.appHeader}>
      
    </div>
    {children}
  </div>
}