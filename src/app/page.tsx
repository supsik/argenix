import AppGrid from '@/components/AppGrid/AppGrid';
import styles from "./page.module.scss";

export default function Home() {
  return <div className={styles.pageWr}>
    <AppGrid />
  </div>
}
