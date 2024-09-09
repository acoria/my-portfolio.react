import { ReactElement } from "react";

export interface IAboutMeItemProps {
  icon: ReactElement;
  title: string;
  children: ReactElement | ReactElement[];
}
