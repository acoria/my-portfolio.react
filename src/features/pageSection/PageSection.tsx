import { useEffect, useId } from "react";
import { useInView } from "react-intersection-observer";
import { IPageSectionProps } from "./IPageSectionProps";

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
      {props.children}
    </div>
  );
};
