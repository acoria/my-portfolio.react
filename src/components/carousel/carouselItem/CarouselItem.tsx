import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { style } from "../../../core/utils/style";
import styles from "./CarouselItem.module.scss";
import { ICarouselItemProps } from "./ICarouselItemProps";

export const CarouselItem: React.FC<ICarouselItemProps> = (props) => {
  const { ref, inView } = useInView({ threshold: 0.51 });
  const { onMovedIntoView } = { ...props };

  useEffect(() => {
    inView && onMovedIntoView?.();
  }, [inView, onMovedIntoView]);

  return (
    <div
      ref={ref}
      className={style(
        styles.carouselItem,
        props.isZoomable ? styles.zoomable : ""
      )}
      style={props.widthStyle}
      onClick={() => props.onClick?.(props.positionInCarousel)}
    >
      {props.children}
    </div>
  );
};
