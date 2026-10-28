'use client';

import { useRef, type MouseEvent } from 'react';
import { AppType, ComponentAppType } from '@/lib/constants/types';
import { useAppsStore } from '@/store/apps/apps-store-provider';
import styles from './AppLabel.module.scss';
import Image from 'next/image';

interface PropsType {
  app         : AppType;
  isDraggable : boolean;
};

export default function AppLabel({ app, isDraggable }: PropsType) {
  const isDragging = useRef(false);
  const startPos   = useRef({ x: 0, y: 0 });
  const elementPos = useRef({ x: 0, y: 0 });

  const openApp = useAppsStore(s => s.openApp);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDraggable)
      return;

    isDragging.current = true;

    const elem = event.currentTarget;

    document.querySelectorAll('.app-label-wr').forEach(el =>
      (el as HTMLElement).style.zIndex = '1'
    );

    elem.style.zIndex = '2';

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

    elem.style.transform = `translate(${elementPos.current.x}px, ${elementPos.current.y}px)`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleOpenApp = (app: ComponentAppType) => {
    
    openApp({
      ...app,
      id: crypto.randomUUID(),
    });
  };

  return (
    <div
      className={`app-label-wr ${styles.appLabelWr}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {app.type !== 'link' ?
        <button onDoubleClick={() => handleOpenApp(app)}>
          <Image
            width={52}
            height={52}
            src={app.iconSrc || '/icons/apps/web.svg'}
            alt={app.title}
            draggable={false}
          />
          <h2>{app.title}</h2>
        </button>
        :
        <a
          href={app.href}
          draggable={false}
          target='_blank'
          onClick={e => e.preventDefault()}
          onDoubleClick={e => {
            e.preventDefault();
            window.open(app.href, '_blank', 'noopener,noreferrer');
          }}
        >
          <Image
            width={52}
            height={52}
            src={app.iconSrc || '/icons/apps/web.svg'}
            alt={app.title}
            draggable={false}
          />
          <h2>{app.title}</h2>
        </a>
      }
    </div>
  );
}