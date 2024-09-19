import { ReactElement } from "react";

export interface IModalProps {
  onBackdropClick?: () => void;
  displayCloseButton?: boolean;
  children?: ReactElement | ReactElement[];
}
