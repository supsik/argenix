import { AppType } from "./constants/types";
import Profile from "@/components/Apps/Profile/Profile";

const appData: AppType[] = [
  {
    id          : 0,
    type        : 'exe',
    title       : 'Обо мне',
    icon        : 'profile',
    isRemovable : true,
    component   : Profile,
  },
]

export default appData;