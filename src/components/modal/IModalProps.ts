import { ReactElement } from "react";

export interface IModalProps {
  onBackdropClick?: () => void;
  onCloseButtonClick?: () => void;
  displayCloseButton?: boolean;
  children?: ReactElement | ReactElement[];
}
