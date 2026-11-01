import { serenityReadmeData } from "./readme-files/serenity";
import { FolderType } from "./constants/types";

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
              id       : 'serenity-frame',
              title    : 'Serenity Frame',
              imageSrc : '/images/portfolio/serenity/frame.webp',
              type     : 'image',
            },
            {
              id      : 'serenity-readme',
              title   : 'О проекте',
              type    : 'txt',
              content : serenityReadmeData,
            },
            {
              id    : 'serenity-link',
              title : 'Serenity',
              href  : 'https://serenity.agency/',
              type  : 'link',
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
            }
          ]
        }
      ]
    },
  ]
}