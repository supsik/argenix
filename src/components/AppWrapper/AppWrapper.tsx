import { Dispatch, ReactNode, SetStateAction } from 'react';
import { AppType } from '@/lib/constants/types';
import styles from './AppWrapper.module.scss';
import Image from 'next/image';

interface PropsType {
  children      : ReactNode,
  data          : AppType,
  setOpenedApps : Dispatch<SetStateAction<Array<AppType>>>,
};

export default function AppWrapper({children, data, setOpenedApps}: PropsType) {
  const handleClose = () => {
    setOpenedApps(state => state.filter(el => el.id !== data.id))
  };

  return <div className={styles.appWr}>
    <div className={styles.appHeader}>
      <Image
        src={`/icons/apps/${data.icon}.svg`}
        alt=''
        width={20}
        height={20}
        draggable={false}
      />
      <h2>{data.title}</h2>
      <div className={`app-header-buttons ${styles.appHeaderButtons}`}>
        <button>
          <Image
            src='/icons/expand.svg'
            alt=''
            width={10}
            height={10}
          />
        </button>
        <button>
          <Image
            src='/icons/fullscreen.svg'
            alt=''
            width={10}
            height={10}
          />
        </button>
        <button onClick={handleClose}>
          <Image
            src='/icons/cross.svg'
            alt=''
            width={10}
            height={10}
          />
        </button>
      </div>
    </div>
    {children}
  </div>
}