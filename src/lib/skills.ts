import { HardSkills, Languages } from "./constants/types";

export const hardSkills: HardSkills[] = [
  {
    title : 'Frontend',
    icon  : 'frontend',
    items: [
      'React',
      'Next',
      'Vue3',
      'Nuxt',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS'
    ]
  },
  {
    title : 'State Managment',
    icon  : 'state',
    items: [
      'Redux',
      'Zustand',
      'MobX',
      'Pinia',
    ]
  },
  {
    title : 'Testing',
    icon  : 'testing',
    items: [
      'Jest',
      'Cypress',
      'Vitest',
    ]
  },
];

export const languages: Languages[] = [
  {
    title: 'Английский',
    level: 'B2',
  },
  {
    title: 'Русский',
    level: 'Носитель',
  }
]