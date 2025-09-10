
import { useState, useEffect, RefObject, useMemo } from 'react';

export const useOnScreen = <T extends Element>(ref: RefObject<T>, threshold: number = 0.1): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    // Check for window existence for SSR safety, although not strictly needed here.
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return null;
    }
    return new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        }
      },
      {
        threshold,
      }
    );
  }, [threshold]);

  useEffect(() => {
    const currentRef = ref.current;
    if (observer && currentRef) {
      observer.observe(currentRef);

      // Clean up the observer when the component unmounts
      return () => {
        observer.disconnect();
      };
    }
    // If IntersectionObserver is not supported, default to visible.
    if (!observer) {
        setIntersecting(true);
    }
    return () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current, observer]); // Rerun effect if ref or observer changes

  return isIntersecting;
};
