import { MutableRefObject, useEffect, useState } from "react";

export function useElementMovedIntoViewportObserver<T extends Element | null>(
  elementRef: MutableRefObject<T>,
  rootMargin?: string,
  threshold?: number
) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const current: T = elementRef?.current;
    const intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { rootMargin, threshold }
    );
    current && intersectionObserver?.observe(current);

    return () => {
      current && intersectionObserver.unobserve(current);
    };
  }, [elementRef, rootMargin, threshold]);
  return { isVisible };
}
