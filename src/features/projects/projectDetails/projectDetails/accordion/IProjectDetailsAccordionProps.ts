import { ReactElement } from "react";
import { IProjectDetailsProps } from "../IProjectDetailsProps";

export interface IProjectDetailsAccordionProps extends IProjectDetailsProps {
  titles: string[];
  children: ReactElement | ReactElement[];
}
