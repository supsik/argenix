import styles from './Breadcrumbs.module.scss';
import Image from 'next/image';

export default function Breadcrumbs() {
  return <nav className={styles.breadcrumbsWr}>
    <ul>
      <li>
        <button>
          <Image
            src='/icons/home.svg'
            alt=''
            width={14}
            height={12}
            draggable={false}
          />
          Главная
        </button>
      </li>
    </ul>
  </nav>
}