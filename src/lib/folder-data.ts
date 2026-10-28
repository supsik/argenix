import { FolderType } from "./constants/types";

export const folderData: FolderType = {
  id    : 'main',
  title : 'Главная',
  items: [
    {
      id    : 'potrfolio',
      title : 'Портфолио',
      items: [
        {
          id    : 'test',
          title : 'test',
          type  : 'folder',
          items : []
        },
      ]
    },
  ]
}