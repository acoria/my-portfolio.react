import { CSSProperties, ReactElement } from "react";

export interface ICarouselItemProps {
  children?: ReactElement | ReactElement[];
  onMovedIntoView?: () => void;
  widthStyle: CSSProperties;
}
