import { FolderType } from '@/lib/constants/types';
import styles         from './Breadcrumbs.module.scss';
import Home           from '@/components/Icons/Home';

interface PropsType {
  data       : FolderType[],
  onNavigate : (id: number) => void,
};

export default function Breadcrumbs({data, onNavigate}: PropsType) {
  return <nav className={styles.breadcrumbsWr}>
    <ul>
      <li>
        <button onClick={() => onNavigate(-1)}>
          <Home />
          Главная
        </button>
      </li>
      {data.map((item, i) => <li key={item.id}>
        <button onClick={() => onNavigate(i)}>
          {item.title}
        </button>
      </li>)}
    </ul>
  </nav>
}