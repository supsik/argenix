import { ReadmeType } from '@/lib/constants/types';
import styles         from './Info.module.scss';
import Image          from 'next/image';

interface PropsType {
  data: ReadmeType,
}

export default function Info({ data }: PropsType) {
  return <div className={styles.infoWr}>
    <div className={styles.infoHeader}>
    </div>
  </div>
}