import { ReactElement } from "react";
import { IHaveClassName } from "../../types/IHaveClassName";

export interface IButtonProps extends IHaveClassName {
  children: ReactElement;
  onClick?: () => void;
}
