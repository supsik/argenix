import { Key, FunctionComponent } from "react";

// app types
type SimpleAppsTypes = 'folder';

interface BaseAppType {
  id         : Key;
  title      : string;
  expanded?  : boolean;
  fullsized? : boolean;
  zIndex?    : number;
  coords?    : { x: number; y: number };
};

export interface ExeAppType extends BaseAppType {
  type      : 'exe';
  iconSrc   : string;
  component : FunctionComponent;
};

export interface LinkAppType extends BaseAppType {
  type     : 'link';
  href     : string;
  iconSrc? : string;
};

export interface ImageAppType extends BaseAppType {
  type     : 'image',
  imageSrc : string,
};

export interface TxtAppType extends BaseAppType {
  type    : 'txt',
  content : string,
};

export interface SimpleAppsType extends BaseAppType {
  type: SimpleAppsTypes;
};

export type AppType = ExeAppType | ImageAppType | TxtAppType | SimpleAppsType;

export interface FolderType {
  id    : Key;
  title : string;
  items : Array<AppType | LinkAppType | FolderType>;
};

//other types
export interface HardSkillsType {
  title : string,
  icon  : string,
  items : Array<string>,
};

export interface LanguagesType {
  title : string,
  level : 'A1' | 'A2' | 'B1' | 'B2' | 'C' | 'Носитель',
};

export type BreadcrumbsType = Pick<FolderType, 'id' | 'title'>;