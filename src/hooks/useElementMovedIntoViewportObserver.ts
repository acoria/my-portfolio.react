import { MutableRefObject, useEffect, useState } from "react";

export function useElementMovedIntoViewportObserver<T extends Element | null>(
  elementRef: MutableRefObject<T>,
  rootMargin?: string
) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const current: T = elementRef?.current;
    const intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { rootMargin }
    );
    current && intersectionObserver?.observe(current);

    return () => {
      current && intersectionObserver.unobserve(current);
    };
  }, [elementRef, rootMargin]);
  return { isVisible };
}
