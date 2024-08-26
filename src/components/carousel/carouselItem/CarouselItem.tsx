import { ICarouselItemProps } from "./ICarouselItemProps";
import styles from "./CarouselItem.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const CarouselItem: React.FC<ICarouselItemProps> = (props) => {
  const { ref, inView } = useInView({ threshold: 0.51 });
  const { onMovedIntoView } = { ...props };

  useEffect(() => {
    inView && onMovedIntoView?.();
  }, [inView, onMovedIntoView]);

  return (
    <div ref={ref} className={styles.carouselItem} style={props.widthStyle}>
      {props.children}
    </div>
  );
};
