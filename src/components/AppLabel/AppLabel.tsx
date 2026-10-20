'use client';

import { Dispatch, SetStateAction, useRef, type MouseEvent, type Key } from 'react';
import { AppType } from '@/lib/constants/types';
import styles from './AppLabel.module.scss';
import Image from 'next/image';

interface PropsType {
  app      : AppType;
  checkApp : (app: AppType) => void;
};

export default function AppLabel({ app, checkApp }: PropsType) {
  const isDragging = useRef(false);
  const startPos   = useRef({ x: 0, y: 0 });
  const elementPos = useRef({ x: 0, y: 0 });

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

  const openApp = (app: AppType)  => {    
    checkApp(app);
  };

  return (
    <div
      className={`app-label-wr ${styles.appLabelWr}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDoubleClick={() => openApp(app)}
    >
      <Image
        width={52}
        height={52}
        src={`/icons/apps/${app.icon}.svg`}
        alt={app.title}
        draggable={false}
      />
      <h2>{app.title}</h2>
    </div>
  );
}