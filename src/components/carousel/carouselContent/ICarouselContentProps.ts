import { ICarouselProps } from "../ICarouselProps";

export interface ICarouselContentProps extends ICarouselProps {
  initialItemPosition?: number;
  onClick?: () => void;
  isMobileView: boolean;
  onItemChange?: (itemPosition: number) => void;
}
