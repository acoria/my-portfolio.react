import { ReactElement } from "react";

export interface IAccordionItemProps {
  title: string | ReactElement;
  isOpen?: boolean;
  onClick?: () => void;
  children: ReactElement;
  headerClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}
