import { ReactElement, useCallback, useRef, useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { ICarouselProps } from "./ICarouselProps";
import { error } from "../../core/utils/error";

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
  const [showZoomedInImagePosition, setShowZoomedInImagePosition] = useState<
    number | undefined
  >(undefined);

  const hasSingleItem = numberOfItems === 1;

  const getChildAsPosition = (
    position: number | undefined
  ): ReactElement | undefined => {
    if (props.children === undefined || position === undefined) {
      return;
    }
    if (Array.isArray(props.children)) {
      return props.children[position];
    } else {
      if (position !== 0) {
        error(`Carousel does not have a child at position "${position}"`);
      }
      return props.children;
    }
  };

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
    getChildAsPosition,
    hasSingleItem,
    isMobileView,
    ref,
    scrollToPosition,
    setShowZoomedInImagePosition,
    setVisibleItemPosition,
    showZoomedInImagePosition,
    triggerMoveLeft,
    triggerMoveRight,
    visibleItemPosition,
  };
};
