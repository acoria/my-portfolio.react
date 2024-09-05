import { useCallback, useRef, useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { ICarouselProps } from "./ICarouselProps";

export const useCarouselViewModel = (props: ICarouselProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isSmallScreen, isMediumScreen } = useScreenSize();
  const isMobileView = isSmallScreen || isMediumScreen;
  const { width } = useWindowDimensions();
  const carouselWidth = isMobileView ? (width / 16) * 0.85 : props.widthInRem;
  const numberOfItems = Array.isArray(props.children)
    ? props.children.length
    : 1;
  const [visibleItemPosition, setVisibleItemPosition] = useState(0);

  const hasSingleItem = numberOfItems === 1;

  const scrollToPosition = useCallback(
    (fromPosition: number, toPosition: number): number => {
      const widthOfItem = carouselWidth * 16;
      let newPosition = 0;
      if (ref.current !== null) {
        let positionExceedsLength = false;

        //start from the other side again if it exceeds the outermost boundary
        if (toPosition >= numberOfItems) {
          positionExceedsLength = true;
          newPosition = 0;
        } else if (toPosition < 0) {
          positionExceedsLength = true;
          newPosition = numberOfItems - 1;
        } else {
          newPosition = toPosition;
        }

        let distance: number;
        if (positionExceedsLength) {
          distance = widthOfItem * numberOfItems;
          if (fromPosition !== 0) {
            distance = distance * -1;
          }
        } else {
          distance = (newPosition - fromPosition) * widthOfItem;
        }

        ref.current.scrollBy({
          left: distance,
          behavior: "smooth",
        });
      }
      return newPosition;
    },
    [carouselWidth, numberOfItems]
  );

  const triggerMoveRight = () =>
    setVisibleItemPosition((previous) => {
      return scrollToPosition(previous, previous + 1);
    });

  const triggerMoveLeft = () =>
    setVisibleItemPosition((previous) => {
      return scrollToPosition(previous, previous - 1);
    });

  return {
    carouselWidth,
    children: props.children,
    hasSingleItem,
    isMobileView,
    ref,
    scrollToPosition,
    setVisibleItemPosition,
    triggerMoveLeft,
    triggerMoveRight,
    visibleItemPosition,
  };
};
