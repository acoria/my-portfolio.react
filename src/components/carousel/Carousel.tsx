import { CSSProperties, ReactElement, useRef, useState } from "react";
import { ReactComponent as ChevronLeft } from "../../assets/chevron_left.svg";
import { ReactComponent as ChevronRight } from "../../assets/chevron_right.svg";
import styles from "./Carousel.module.scss";
import { ICarouselProps } from "./ICarouselProps";
import { style } from "../../core/utils/style";

export const Carousel: React.FC<ICarouselProps> = (props) => {
  const widthStyle: CSSProperties = { width: `${props.widthInRem}rem` };
  const ref = useRef<HTMLDivElement>(null);
  const [visibleItemPosition, setVisibleItemPosition] = useState(0);

  const carouselItems = (): ReactElement | ReactElement[] => {
    if (props.children === undefined) return <></>;
    if (Array.isArray(props.children)) {
      return props.children.map((child, index) => (
        <div key={index} className={styles.carouselItem} style={widthStyle}>
          {child}
        </div>
      ));
    } else {
      return (
        <div className={styles.carouselItem} style={widthStyle}>
          {props.children}
        </div>
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
        />
      ));
    } else {
      return (
        <button className={style(styles.navButton, styles.navButtonActive)} />
      );
    }
  };

  const scrollToPosition = (position: number) => {
    if (ref.current !== null) {
      ref.current.scrollBy({ left: position, behavior: "smooth" });
    }
  };

  //TODO: start from the other side again if it exceeds the outermost
  const triggerMoveRight = () =>
    setVisibleItemPosition((previous) => {
      scrollToPosition(1);
      return previous + 1;
    });

  const triggerMoveLeft = () =>
    setVisibleItemPosition((previous) => {
      scrollToPosition(-1);
      return previous - 1;
    });

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContent}>
        <ChevronLeft className={styles.chevron} onClick={triggerMoveLeft} />
        <div
          className={styles.carouselItemsContainer}
          style={widthStyle}
          ref={ref}
        >
          {carouselItems()}
        </div>
        <ChevronRight className={styles.chevron} onClick={triggerMoveRight} />
      </div>
      <div className={styles.navigation}>{navButtons()}</div>
    </div>
  );
};
