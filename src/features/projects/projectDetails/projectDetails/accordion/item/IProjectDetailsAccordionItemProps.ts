import { ReactElement } from "react";

export interface IProjectDetailsAccordionItemProps {
  title: string;
  radioGroupName: string;
  children: ReactElement;
  isChecked?: boolean;
  onCheck?: () => void;
}
