import { MutableRefObject, ReactElement } from "react";

export interface INavItem<T> {
  caption: string;
  ref: MutableRefObject<T>;
  component: ReactElement;
}
