import { ICarouselProps } from "../ICarouselProps";

export interface ICarouselContentProps extends ICarouselProps {
  initialItemPosition?: number;
  onClick?: () => void;
  onItemChange?: (itemPosition: number) => void;
}
