import { ReactElement } from "react";

export interface IAccordionItemProps {
  title: string;
  isOpen?: boolean;
  onClick?: () => void;
  children: ReactElement;
}
