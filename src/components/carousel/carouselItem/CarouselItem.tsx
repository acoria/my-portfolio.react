import { ICarouselItemProps } from "./ICarouselItemProps";
import styles from "./CarouselItem.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { style } from "../../../core/utils/style";

export const CarouselItem: React.FC<ICarouselItemProps> = (props) => {
  const { ref, inView } = useInView({ threshold: 0.51 });
  const { onMovedIntoView } = { ...props };
  const [showZoomedIn, setShowZoomedIn] = useState(false);

  useEffect(() => {
    inView && onMovedIntoView?.();
  }, [inView, onMovedIntoView]);

  return (
    <div
      ref={ref}
      className={style(
        styles.carouselItem,
        showZoomedIn ? styles.zoomedIn : "",
        props.isZoomable ? styles.zoomable : ""
      )}
      style={!showZoomedIn ? props.widthStyle : {}}
      onClick={() =>
        props.isZoomable && setShowZoomedIn((previous) => !previous)
      }
    >
      {props.children}
    </div>
  );
};
