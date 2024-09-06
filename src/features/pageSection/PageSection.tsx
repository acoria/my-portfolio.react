import { useEffect, useId } from "react";
import { useInView } from "react-intersection-observer";
import { IPageSectionProps } from "./IPageSectionProps";
import styles from "./PageSection.module.scss";
import { style } from "../../core/utils/style";

export const PageSection: React.FC<IPageSectionProps> = (props) => {
  const { ref, inView } = useInView({ threshold: 0.2, rootMargin: "50px" });
  const { onChangeViewportVisibility } = { ...props };
  const id = useId();

  useEffect(() => {
    onChangeViewportVisibility?.(inView);
  }, [inView, onChangeViewportVisibility]);

  useEffect(() => {
    props.scrollIntoViewSignal !== undefined &&
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [id, props.scrollIntoViewSignal]);

  return (
    <div
      id={id}
      ref={ref}
      style={{ scrollMarginTop: props.topOffsetInPixel }}
      className={props.className}
    >
      <h1
        className={style(
          styles.title,
          props.subTitle ? styles.titleWithSubtitle : ""
        )}
      >
        {props.title}
      </h1>
      {props.subTitle && <p className={styles.subTitle}>{props.subTitle}</p>}
      {props.children}
    </div>
  );
};
