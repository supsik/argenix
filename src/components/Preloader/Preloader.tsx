'use client';

import { useEffect, useState } from "react";
import styles from './Preloader.module.scss';
import Logo from '@/components/Icons/Logo';

function PreloaderComponent() {
  return <div className={styles.preloaderWr}>
    <Logo />
  </div>
};

export default function Preloader() {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoader(false);
    }, 4250)

    return () => clearTimeout(timer);
  }, []);

  return isLoader ? <PreloaderComponent /> : null
}