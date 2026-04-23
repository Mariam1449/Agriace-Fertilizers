"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.2,
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("motion-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={containerRef}
      style={{ "--motion-delay": `${delay}ms` } as CSSProperties}
      className={`motion-reveal ${isVisible ? "motion-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
