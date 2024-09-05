import { CSSProperties, ReactElement } from "react";

export interface ICarouselItemProps {
  children?: ReactElement | ReactElement[];
  isZoomable?: boolean;
  onClick?: (positionInCarousel: number) => void;
  onMovedIntoView?: () => void;
  positionInCarousel: number;
  widthStyle: CSSProperties;
}
