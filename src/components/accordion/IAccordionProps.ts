import { ReactElement } from "react";

export interface IAccordionProps {
  titles: string[] | ReactElement[];
  children: ReactElement | ReactElement[];
  headerClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}
