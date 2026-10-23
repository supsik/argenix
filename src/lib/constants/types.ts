import { Key, FunctionComponent } from "react";

type appTypes = 'txt' | 'pdf' | 'exe' | 'img' | null;

export interface AppType {
  id          : Key,
  type        : appTypes,
  title       : string,
  iconSrc     : string,
  isRemovable : boolean
  component   : FunctionComponent,
  expanded   ?: boolean,
  fullsized  ?: boolean,
  coords     ?: {
    x: number,
    y: number
  }
};