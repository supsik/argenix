import { hardSkills, languages } from '@/lib/skills';
import styles from './About.module.scss';
import Image from 'next/image';

export default function Profile() {
  return <div className={styles.profileWr}>
    <div className={styles.profileAside}>
      <Image
        width={220}
        height={220}
        src='/images/profile.png'
        alt=''
      />
      <div className={styles.profileContacts}>
        <h2>Контакты:</h2>
        <ul>
          <li>
            <a href="https://t.me/fr0ntech" target='_blank'>
              <Image
                width={14}
                height={14}
                src='/icons/socmedia/telegram.svg'
                alt=''
              />
              @fr0ntech
            </a>
          </li>
          <li>
            <a href="mailto:frontech@mail.ru" target='_blank'>
              <Image
                width={14}
                height={14}
                src='/icons/socmedia/mail.svg'
                alt=''
                draggable={false}
              />
              @frontech
            </a>
          </li>
          <li>
            <a href="tel:+79931845069" target='_blank'>
              <Image
                width={14}
                height={14}
                src='/icons/socmedia/phone.svg'
                alt=''
                draggable={false}
              />
              +7 993 184-50-69
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.profileAbout}>
      <h2>Болиев Хасан</h2>
      <span>Frontend-разработчик</span>
      <div className={styles.profileSkills}>
        <h3>Мой стек:</h3>
        {hardSkills.map(el => <div key={el.title} className={styles.profileSkillBox}>
          <div className={styles.profileSkillHeader}>
            <Image
              src={`/icons/skills/${el.icon}.svg`}
              alt=''
              width={16}
              height={10}
            />
            <h4>{el.title}</h4>
          </div>
          <ul className={styles.profileSkillsWr}>
            {el.items.map(item => <li key={item}>
              {item}
            </li>)}
          </ul>
        </div>)}
        <h3>Языки:</h3>
        <ul className={styles.profileSkillsWr}>
          {languages.map(el => <li key={el.title}>
            {`${el.title} · ${el.level}`}
          </li>)}
        </ul>
      </div>
      <div className={styles.profileAboutContent}>
        <h3>Обо мне:</h3>
        <p>Привет! Меня зовут Хасан.</p>
        <p>Я frontend-разработчик с большим опытом, работаю с React / Next.js и Vue / Nuxt. Мне нравится создавать удобные интерфейсы и превращать идеи в работающие проекты.</p>
        <p>На этом сайте ты можешь узнать информацию обо мне, посмотреть мои проекты и поближе познакомиться с тем, чем я занимаюсь.</p>
        <p>Если у тебя есть интересная идея, предложение или ты просто хочешь пообщаться — буду рад связи!</p>
      </div>
    </div>
  </div>
}