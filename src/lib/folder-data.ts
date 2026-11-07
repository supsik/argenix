import { FolderType } from "./constants/types";
import readme         from "./readme-data";

export const folderData: FolderType = {
  id    : 'main',
  title : 'Главная',
  items: [
    {
      id    : 'potrfolio',
      title : 'Портфолио',
      items : [
        {
          id    : 'serenity',
          title : 'Serenity',
          items : [
            {
              id    : 'serenity-link',
              title : 'Serenity',
              href  : 'https://serenity.agency/',
              type  : 'link',
            },
            {
              id      : 'serenity-readme',
              title   : 'О проекте',
              type    : 'info',
              content : readme.serenity,
            },
            {
              id       : 'serenity-frame',
              title    : 'Serenity Frame',
              imageSrc : '/images/portfolio/serenity/frame.webp',
              type     : 'image',
            }
          ]
        },
        {
          id    : 'vib',
          title : 'ВИБ',
          items : [
            {
              id    : 'vib-link',
              title : 'ВИБ',
              href  : 'https://vkusnoibistro.com/application/',
              type  : 'link',
            },
            {
              id      : 'vib-readme',
              title   : 'О проекте',
              type    : 'info',
              content : readme.vib,
            },
          ]
        },
        {
          id    : 'lineaflex',
          title : 'Lineaflex',
          items : [
            {
              id    : 'lineaflex-link',
              title : 'Lineaflex',
              href  : 'https://www.lineaflex.ru/',
              type  : 'link',
            },
            {
              id      : 'lineaflex-readme',
              title   : 'О проекте',
              type    : 'info',
              content : readme.lineaflex,
            },
          ]
        },
        {
          id    : 'sport-print',
          title : 'Спорт Принт',
          items : [
            {
              id    : 'sport-print-link',
              title : 'Спорт Принт',
              href  : 'https://sport-print.ru/',
              type  : 'link',
            },
            {
              id      : 'sport-print-readme',
              title   : 'О проекте',
              type    : 'info',
              content : readme.sportPrint,
            },
            {
              id       : 'sport-print-frame',
              title    : 'Спорт Принт Frame',
              imageSrc : '/images/portfolio/sport-print/frame.webp',
              type     : 'image',
            }
          ]
        },
        {
          id    : 'argenix',
          title : 'Argenix',
          items : [
            {
              id      : 'argenix-readme',
              title   : 'О проекте',
              type    : 'info',
              content : readme.argenix,
            },
          ]
        }
      ]
    },
    {
      id    : 'resume',
      title : 'Резюме',
      type  : 'pdf',
      href  : '/resume.pdf'
    }
  ]
}