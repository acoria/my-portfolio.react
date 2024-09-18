import { ReactElement } from "react";

export interface IModalProps {
  onBackdropClick?: () => void;
  children?: ReactElement | ReactElement[];
}
