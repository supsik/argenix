import { Key, FunctionComponent } from "react";

type AppTypes = 'txt' | 'pdf' | 'exe' | 'img' | 'link' | 'folder' | null;

interface BaseAppType {
  id          : Key;
  title       : string;
  expanded?   : boolean;
  fullsized?  : boolean;
  zIndex?     : number,
  coords?     : { x: number; y: number };
}

export interface LinkAppType extends BaseAppType {
  type       : 'link';
  href       : string;
  iconSrc?   : string;
}

export interface ComponentAppType extends BaseAppType {
  type      : Exclude<AppTypes, 'link'>;
  iconSrc   : string;
  component : FunctionComponent;
}

export type AppType = LinkAppType | ComponentAppType;

export interface HardSkillsType {
  title : string,
  icon  : string,
  items : Array<string>,
};

export interface LanguagesType {
  title : string,
  level : 'A1' | 'A2' | 'B1' | 'B2' | 'C' | 'Носитель',
};

export interface FolderType {
  id    : Key;
  title : string;
  items : Array<AppType | FolderType>;
};

export type BreadcrumbsType = Pick<FolderType, 'id' | 'title'>;