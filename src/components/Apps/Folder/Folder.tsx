'use client';

import { folderData } from '@/lib/folder-data';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import AppLabel from '@/components/AppLabel/AppLabel';
import styles from './Folder.module.scss';
import Image from 'next/image';

export default function Folder() {
  const [currentFolder, setCurrentFolder] = useState(folderData);

  return <div className={styles.folderWr}>
    <Breadcrumbs />
    <div className={styles.folderContent}>
      {currentFolder.items.map(item => <div key={item.id}>
        {'items' in item ?
          <button
            className={styles.folderLabel}
            onDoubleClick={() => setCurrentFolder(item)}
          >
            <Image
              width={52}
              height={52}
              src='/icons/apps/folder.svg'
              alt={item.title}
              draggable={false}
            />
            <h2>{item.title}</h2>
          </button>
          :
          <AppLabel
            key={item.id}
            app={item}
            isDraggable={false}
          />
        }
      </div>)}
    </div>
  </div>
}