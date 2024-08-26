import { ReactElement } from "react";

export interface ICarouselProps {
  children?: ReactElement | ReactElement[];
  hideCarets?: boolean;
  widthInRem: number;
}
