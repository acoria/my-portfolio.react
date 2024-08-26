import {
  CSSProperties,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from "react";
import { ReactComponent as ChevronLeft } from "../../assets/chevron_left.svg";
import { ReactComponent as ChevronRight } from "../../assets/chevron_right.svg";
import styles from "./Carousel.module.scss";
import { ICarouselProps } from "./ICarouselProps";
import { style } from "../../core/utils/style";
import { CarouselItem } from "./carouselItem/CarouselItem";
import { useScreenSize } from "../../hooks/useScreenSize";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const Carousel: React.FC<ICarouselProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleItemPosition, setVisibleItemPosition] = useState(0);
  const numberOfItems = Array.isArray(props.children)
    ? props.children.length
    : 1;
  const { isSmallScreen } = useScreenSize();
  const { width } = useWindowDimensions();
  const carouselWidth = !isSmallScreen ? props.widthInRem : (width / 16) * 0.85;
  const widthStyle: CSSProperties = { width: `${carouselWidth}rem` };

  const carouselItems = (): ReactElement | ReactElement[] => {
    if (props.children === undefined) return <></>;
    if (Array.isArray(props.children)) {
      return props.children.map((child, index) => (
        <CarouselItem
          widthStyle={widthStyle}
          onMovedIntoView={() => {
            isSmallScreen && setVisibleItemPosition(index);
          }}
        >
          {child}
        </CarouselItem>
      ));
    } else {
      return (
        <CarouselItem widthStyle={widthStyle}>{props.children}</CarouselItem>
      );
    }
  };

  const navButtons = () => {
    if (Array.isArray(props.children)) {
      return props.children.map((_, index) => (
        <button
          key={index}
          className={style(
            styles.navButton,
            index === visibleItemPosition ? styles.navButtonActive : ""
          )}
          onClick={() =>
            setVisibleItemPosition((previous) => {
              return scrollToPosition(previous, index);
            })
          }
        />
      ));
    } else {
      return (
        <button className={style(styles.navButton, styles.navButtonActive)} />
      );
    }
  };

  const scrollToPosition = useCallback(
    (fromPosition: number, toPosition: number): number => {
      const widthOfItem = props.widthInRem * 16;
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
    [numberOfItems, props.widthInRem]
  );

  const triggerMoveRight = () =>
    setVisibleItemPosition((previous) => {
      return scrollToPosition(previous, previous + 1);
    });

  const triggerMoveLeft = () =>
    setVisibleItemPosition((previous) => {
      return scrollToPosition(previous, previous - 1);
    });

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContent}>
        {!isSmallScreen && (
          <ChevronLeft className={styles.chevron} onClick={triggerMoveLeft} />
        )}
        <div
          className={styles.carouselItemsContainer}
          style={widthStyle}
          ref={ref}
        >
          {carouselItems()}
        </div>
        {!isSmallScreen && (
          <ChevronRight className={styles.chevron} onClick={triggerMoveRight} />
        )}
      </div>
      <div className={styles.navigation}>{navButtons()}</div>
    </div>
  );
};
