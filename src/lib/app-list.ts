import CustomImage from "@/components/Apps/CustomImage/CustomImage";
import { AppType } from "./constants/types";
import Folder      from "@/components/Apps/Folder/Folder";
import About       from "@/components/Apps/About/About";
import Email       from "@/components/Apps/Email/Email";
import Txt         from "@/components/Apps/Txt/Txt";
import Pdf         from "@/components/Apps/Pdf/Pdf";

export const appInfo = {
  folder: {
    iconSrc   : '/icons/apps/folder.svg',
    component : Folder,
  },
  image: {
    iconSrc   : '/icons/apps/image.svg',
    component : CustomImage,
  },
  txt: {
    iconSrc   : '/icons/apps/txt.svg',
    component : Txt,
  },
  pdf: {
    iconSrc   : '/icons/apps/pdf.svg',
    component : Pdf,
  }
};

const appData: AppType[] = [
  {
    id        : 0,
    type      : 'exe',
    title     : 'Обо мне',
    iconSrc   : '/icons/apps/profile.svg',
    component : About,
  },
  {
    id    : 1,
    type  : 'folder',
    title : 'Файлы',
  },
  {
    id        : 2,
    type      : 'exe',
    title     : 'Email',
    iconSrc   : '/icons/apps/email.svg',
    component : Email,
  },
];

export default appData;