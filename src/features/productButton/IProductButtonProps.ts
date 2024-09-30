import { ReactElement } from "react";
import { IHaveClassName } from "../../types/IHaveClassName";
import { IHaveChildren } from "../../types/IHaveChildren";

export interface IProductButtonProps extends IHaveClassName, IHaveChildren {
  icon?: ReactElement;
  linkTo: string;
}
