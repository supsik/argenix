import { ReadmeType } from '@/lib/constants/types';
import aboutStyles    from '../About/About.module.scss';
import styles         from './Info.module.scss';
import Image          from 'next/image';

interface PropsType {
  data: ReadmeType,
}

export default function Info({ data }: PropsType) {
  return <div className={styles.infoWr}>
    <div className={styles.infoHeader}>
      <div
        className={styles.infoHeaderIcon}
        style={{
          backgroundColor: data.iconBgColor,
        }}
      > 
        <Image
          width={46}
          height={46}
          src={data.icon}
          alt={data.title}
        />
      </div>
      <h2>{data.title}</h2>
      <span>{data.description}</span>
    </div>
    <div className={styles.infoItems}>
      <div>
        <h3>Моя роль</h3>
        <p>Frontend-разработчик</p>
      </div>
      <div>
        <h3>Команда</h3>
        <p>2 Front, 1 Back, 1 QA, 1 Manager</p>
      </div>
    </div>
    {data.responsibilities && <div className={`${styles.infoContentWr} ${styles.infoResponsibilities}`}>
      <h3>/ Обязанности</h3>
      <ul>
        {data.responsibilities.map((elem, index) => <li key={index}>
          - {elem}
        </li>)}
      </ul>
    </div>}
    {data.achievements && <div className={`${styles.infoContentWr} ${styles.infoAchievements}`}>
      <h3>/ Достижения</h3>
      <ul>
        {data.achievements.map((elem, index) => <li key={index}>
          - {elem}
        </li>)}
      </ul>
    </div>}
    {data.technologies && <div className={`${styles.infoContentWr} ${styles.infoTechnologies}`}>
      <h3>/ Технологии</h3>
      <ul className={styles.infoSkillsWr}>
        {data.technologies.map((elem, index) => <li key={index}>
          {elem}
        </li>)}
      </ul>
    </div>}
  </div>
}