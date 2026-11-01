import {
  ReactNode,
  useRef,
  type MouseEvent,
  useState
} from 'react';

import { useAppsStore } from '@/store/apps/apps-store-provider';
import { AppType }      from '@/lib/constants/types';
import { appInfo }      from '@/lib/app-list';
import { motion }       from 'motion/react';
import styles           from './AppWrapper.module.scss';
import Image            from 'next/image';
import clsx             from 'clsx';

interface PropsType {
  children : ReactNode;
  data     : AppType;
}

export default function AppWrapper({ children, data }: PropsType) {
  const iconSrc: string = data.type === 'exe' ? data.iconSrc : appInfo[data.type].iconSrc;

  const [position, setPosition]     = useState(data.coords ?? { x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const appWr      = useRef<HTMLDivElement>(null);
  const startPos   = useRef({ x: 0, y: 0 });
  const currentPos = useRef(data.coords ?? { x: 0, y: 0 });

  const fullsizeApp = useAppsStore(s => s.fullsizeApp);
  const focusedApp  = useAppsStore(s => s.focusedApp);
  const expandApp   = useAppsStore(s => s.expandApp);
  const setCoords   = useAppsStore(s => s.setCoords);
  const focusApp    = useAppsStore(s => s.focusApp);
  const closeApp    = useAppsStore(s => s.closeApp);

  const appClassList = clsx({
    [styles.appWr]        : true,
    [styles.isFocused]    : data.id == focusedApp?.id,
    [styles.isFullscreen] : data.fullsized,
  });

  const appContentClassList = clsx({
    [styles.appContent]   : true,
    [styles.isFullscreen] : data.fullsized,
    [styles.imageWr]      : data.type == 'image',
  });

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (data.fullsized) return;

    setIsDragging(true);

    const coords = data.coords ?? { x: 0, y: 0 };
    currentPos.current = coords;

    startPos.current = {
      x: event.clientX - coords.x,
      y: event.clientY - coords.y,
    };
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const coords = {
      x: event.clientX - startPos.current.x,
      y: event.clientY - startPos.current.y,
    };

    currentPos.current = coords;
    setPosition(coords);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setCoords(data.id, currentPos.current);
  };

  const handleClose = (event: MouseEvent) => {
    event.stopPropagation();
    closeApp(data.id)
  };
  const handleExpand = (event: MouseEvent) => {
    event.stopPropagation();
    expandApp(data.id)
  };
  const handleFullsize = (event: MouseEvent) => {
    event.stopPropagation();
    fullsizeApp(data.id)
  };

  return <motion.div
    ref={appWr}
    className={appClassList}
    style={{
      x: data.fullsized ? 0 : position.x,
      y: data.fullsized ? 0 : position.y,
      zIndex: data.zIndex,
    }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }}}
    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }}}
    onMouseDown={() => focusApp(data.id)}
  >
    <div
      className={styles.appHeader}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Image
        src={iconSrc}
        alt=""
        width={20}
        height={20}
        draggable={false}
      />
      <h2>{data.title}</h2>
      <div className={`app-header-buttons ${styles.appHeaderButtons}`}>
        <button onMouseDown={event => event.stopPropagation()} onClick={handleExpand}>
          <Image draggable={false} src="/icons/expand.svg" alt="" width={10} height={10} />
        </button>
        <button onMouseDown={event => event.stopPropagation()} onClick={handleFullsize}>
          <Image draggable={false} src="/icons/fullscreen.svg" alt="" width={10} height={10} />
        </button>
        <button onMouseDown={event => event.stopPropagation()} onClick={handleClose}>
          <Image draggable={false} src="/icons/cross.svg" alt="" width={10} height={10} />
        </button>
      </div>
    </div>
    <div className={appContentClassList}>
      {children}
    </div>
  </motion.div>
}