import CustomImage from "@/components/Apps/CustomImage/CustomImage";
import { AppType } from "./constants/types";
import Folder      from "@/components/Apps/Folder/Folder";
import About       from "@/components/Apps/About/About";

export const appInfo = {
  folder: {
    iconSrc   : '/icons/apps/folder.svg',
    component : Folder,
  },
  image: {
    iconSrc   : '/icons/apps/image.svg',
    component : CustomImage,
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
    title : 'Портфолио',
  },
];

export default appData;