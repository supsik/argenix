import { AppType } from "./constants/types";
import Folder from "@/components/Apps/Folder/Folder";
import About from "@/components/Apps/About/About";

const appData: AppType[] = [
  {
    id        : 0,
    type      : 'exe',
    title     : 'Обо мне',
    iconSrc   : '/icons/apps/profile.svg',
    component : About,
  },
  {
    id        : 1,
    type      : 'folder',
    title     : 'Портфолио',
    iconSrc   : '/icons/apps/folder.svg',
    component : Folder,
  },
];

export default appData;