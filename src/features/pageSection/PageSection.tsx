import { useEffect, useRef } from "react";
import { IPageSectionProps } from "./IPageSectionProps";
import { useElementMovedIntoViewportObserver } from "../../hooks/useElementMovedIntoViewportObserver";

export const PageSection: React.FC<IPageSectionProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useElementMovedIntoViewportObserver(ref, "50px", 0.2);
  const { onChangeViewportVisibility } = { ...props };

  useEffect(() => {
    onChangeViewportVisibility?.(isVisible);
  }, [isVisible, onChangeViewportVisibility]);

  useEffect(() => {
    props.scrollIntoViewSignal !== undefined &&
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [props.scrollIntoViewSignal]);

  return (
    <div ref={ref} style={{ scrollMarginTop: props.topOffsetInPixel }}>
      {props.children}
    </div>
  );
};
