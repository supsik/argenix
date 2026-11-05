import styles from './Loader.module.scss';
import Image  from 'next/image';

export default function Loader() {
  return <div className={styles.loaderWr}>
    <div className={styles.loaderIcon}>
      Loading...
    </div>
  </div>
}