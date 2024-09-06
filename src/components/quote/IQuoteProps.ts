import { ReactElement } from "react";
import { IHaveClassName } from "../../types/IHaveClassName";

export interface IQuoteProps extends IHaveClassName {
  author?: string | ReactElement;
  classNameQuotationMarks?: string;
  classNameQuoteText?: string;
  text: string;
}
