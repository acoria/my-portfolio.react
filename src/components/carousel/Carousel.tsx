import { ICarouselProps } from "./ICarouselProps";
import styles from "./Carousel.module.scss";
import { CSSProperties, ReactElement } from "react";

export const Carousel: React.FC<ICarouselProps> = (props) => {
  const widthStyle: CSSProperties = { width: `${props.widthInRem}rem` };

  const carouselItems = (): ReactElement | ReactElement[] => {
    if (props.children === undefined) return <></>;
    if (Array.isArray(props.children)) {
      return props.children.map((child) => (
        <div className={styles.carouselItem} style={widthStyle}>
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

  return (
    <div className={styles.carousel} style={widthStyle}>
      {carouselItems()}
    </div>
  );
};
