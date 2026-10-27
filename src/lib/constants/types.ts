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

export interface HardSkills {
  title : string,
  icon  : string,
  items : Array<string>,
};

export interface Languages {
  title : string,
  level : 'A1' | 'A2' | 'B1' | 'B2' | 'C' | 'Носитель',
};