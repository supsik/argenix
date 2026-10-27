import { AppType } from "./constants/types";
import About from "@/components/Apps/About/About";

const appData: AppType[] = [
  {
    id          : 0,
    type        : 'exe',
    title       : 'Обо мне',
    iconSrc     : '/icons/apps/profile.svg',
    isRemovable : true,
    component   : About,
  },
]

export default appData;