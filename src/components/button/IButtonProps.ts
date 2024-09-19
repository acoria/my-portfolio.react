import { ReactElement } from "react";
import { IHaveClassName } from "../../types/IHaveClassName";

export interface IIconButtonProps extends IHaveClassName {
  children: ReactElement;
  onClick?: () => void;
}
