import { Key, FunctionComponent } from "react";

type appTypes = 'txt' | 'pdf' | 'exe' | 'img' | null;

export interface AppType {
  id          : Key,
  type        : appTypes,
  title       : string,
  icon        : string,
  isRemovable : boolean
  component   : FunctionComponent,
};