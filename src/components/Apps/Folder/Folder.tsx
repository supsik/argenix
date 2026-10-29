'use client';

import { FolderType } from '@/lib/constants/types';
import { folderData } from '@/lib/folder-data';
import { useState }   from 'react';
import Breadcrumbs    from '@/components/Breadcrumbs/Breadcrumbs';
import AppLabel       from '@/components/AppLabel/AppLabel';
import styles         from './Folder.module.scss';
import Image          from 'next/image';

export default function Folder() {
  const [currentFolder, setCurrentFolder] = useState(folderData);
  const [breadcrumbs, setBreadcrumbs]     = useState<Array<FolderType>>([]);

  const handleOpenFolder = (folder: FolderType) => {
    setCurrentFolder(folder);
    setBreadcrumbs(prev => [...prev, folder]);
  };

  const handleNavigate = (index: number) => {
    if (index < 0) {
      setCurrentFolder(folderData);
      setBreadcrumbs([]);
    } else {
      setCurrentFolder(breadcrumbs[index]);
      setBreadcrumbs(breadcrumbs.slice(0, index + 1));
    }
  }

  return <div className={styles.folderWr}>
    <Breadcrumbs data={breadcrumbs} onNavigate={handleNavigate}/>
    <div className={styles.folderContent}>
      {currentFolder.items.map(item => <div key={item.id}>
        {'items' in item ?
          <button
            className={styles.folderLabel}
            onDoubleClick={() => handleOpenFolder(item)}
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