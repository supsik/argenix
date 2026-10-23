import { AppType } from "./constants/types";
import Profile from "@/components/Apps/Profile/Profile";

const appData: AppType[] = [
  {
    id          : 0,
    type        : 'exe',
    title       : 'Обо мне',
    iconSrc     : '/icons/apps/profile.svg',
    isRemovable : true,
    component   : Profile,
  },
]

export default appData;