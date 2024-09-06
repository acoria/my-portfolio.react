import { IHaveClassName } from "../../types/IHaveClassName";

export interface IQuoteProps extends IHaveClassName {
  classNameQuotationMarks?: string,
  classNameQuoteText?: string,
  author?: string;
  text: string;
}
