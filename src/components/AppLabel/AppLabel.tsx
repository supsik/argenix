'use client';

import { AppType, LinkAppType, PdfAppType } from '@/lib/constants/types';
import { useRef, type MouseEvent }          from 'react';
import { useAppsStore }                     from '@/store/apps/apps-store-provider';
import { appInfo }                          from '@/lib/app-list';
import styles                               from './AppLabel.module.scss';
import Image                                from 'next/image';

interface PropsType {
  app         : AppType | LinkAppType | PdfAppType;
  isDraggable : boolean;
};

export default function AppLabel({ app, isDraggable }: PropsType) {
  const imageSrc: string | undefined = app.type === 'link' || app.type === 'exe' ?
    app.iconSrc :
    appInfo[app.type].iconSrc;

  const iconSrc = imageSrc || '/icons/apps/web.svg';

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

  const handleOpenApp = (app: AppType) => {
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
      {app.type !== 'link'?
        <button onDoubleClick={() => handleOpenApp(app)}>
          {
            app.type !== 'image' ?
              <Image
                width={52}
                height={52}
                src={iconSrc}
                alt={app.title}
                draggable={false}
              /> :
              <div className={styles.appImageLabel}>
                <Image
                  width={52}
                  height={42}
                  src={app.imageSrc}
                  alt={app.title}
                  draggable={false}
                />
              </div>
          }
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
            src={iconSrc}
            alt={app.title}
            draggable={false}
          />
          <h2>{app.title}</h2>
        </a>
      }
    </div>
  );
}