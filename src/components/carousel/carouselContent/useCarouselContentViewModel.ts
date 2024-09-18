import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { error } from "../../../core/utils/error";
import { useScreenSize } from "../../../hooks/useScreenSize";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { ICarouselContentProps } from "./ICarouselContentProps";

export const useCarouselContentViewModel = (props: ICarouselContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isSmallScreen, isMediumScreen } = useScreenSize();
  const isMobileView = isSmallScreen || isMediumScreen;
  const { width } = useWindowDimensions();
  const carouselWidth = isMobileView ? (width / 16) * 0.85 : props.widthInRem;
  const numberOfItems = Array.isArray(props.children)
    ? props.children.length
    : 1;
  const [visibleItemPosition, setVisibleItemPosition] = useState(
    props.initialItemPosition ?? 0
  );
  const [showZoomedInImagePosition, setShowZoomedInImagePosition] = useState<
    number | undefined
  >(undefined);

  const { onItemChange, initialItemPosition } = props;

  useEffect(() => {
    onItemChange?.(visibleItemPosition);
  }, [visibleItemPosition, onItemChange]);

  const hasSingleItem = numberOfItems === 1;

  const getChildAtPosition = (
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

  const onCarouselItemClick = (position: number) => {
    !isMobileView && setShowZoomedInImagePosition(position);
  };

  const onZoomedInCloseButtonClick = () =>
    setShowZoomedInImagePosition(undefined);

  const scrollToPosition = useCallback(
    (
      fromPosition: number,
      toPosition: number,
      behavior?: ScrollBehavior
    ): number => {
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
          behavior: behavior ?? "smooth",
        });
      }
      return newPosition;
    },
    [carouselWidth, numberOfItems]
  );

  useEffect(() => {
    initialItemPosition && scrollToPosition(0, initialItemPosition, "auto");
  }, [initialItemPosition, scrollToPosition]);

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
    getChildAtPosition,
    hasSingleItem,
    isMobileView,
    onCarouselItemClick,
    onZoomedInCloseButtonClick,
    ref,
    scrollToPosition,
    setVisibleItemPosition,
    showZoomedInImagePosition,
    triggerMoveLeft,
    triggerMoveRight,
    visibleItemPosition,
  };
};
