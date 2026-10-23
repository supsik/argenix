'use client';

import { useRef, type MouseEvent, type Key } from 'react';
import { useAppsStore } from '@/store/apps/apps-store-provider';
import { AppType } from '@/lib/constants/types';
import styles from './AppLabel.module.scss';
import Image from 'next/image';

interface PropsType {
  app: AppType;
};

export default function AppLabel({ app }: PropsType) {
  const isDragging = useRef(false);
  const startPos   = useRef({ x: 0, y: 0 });
  const elementPos = useRef({ x: 0, y: 0 });

  const openedApps = useAppsStore(s => s.openedApps);
  const expandApp  = useAppsStore(s => s.expandApp);
  const openApp    = useAppsStore(s => s.openApp);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;

    document.querySelectorAll('.app-label-wr').forEach(el =>
      (el as HTMLElement).style.zIndex = '1'
    );

    startPos.current = {
      x: event.clientX - elementPos.current.x,
      y: event.clientY - elementPos.current.y,
    };
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current)
      return;

    const elem = event.currentTarget;

    elementPos.current = {
      x: event.clientX - startPos.current.x,
      y: event.clientY - startPos.current.y,
    };

    elem.style.zIndex    = '2';
    elem.style.transform = `translate(${elementPos.current.x}px, ${elementPos.current.y}px)`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const checkAppAdd = (app: AppType) => {
    if (!openedApps.some(el => el.id == app.id))
      openApp(app);
    else
      expandApp(app.id)
  };

  return (
    <div
      className={`app-label-wr ${styles.appLabelWr}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDoubleClick={() => checkAppAdd(app)}
    >
      <Image
        width={52}
        height={52}
        src={app.iconSrc}
        alt={app.title}
        draggable={false}
      />
      <h2>{app.title}</h2>
    </div>
  );
}