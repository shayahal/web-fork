import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

export const useStaggeredAnimation = (items, delay = 0.1) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setVisibleItems(items);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, items]);

  return [ref, visibleItems];
}; 