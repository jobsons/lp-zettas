"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";

export function useIllustrationLoop(still: boolean, count: number, interval = 5200, progress?: MotionValue<number>, threshold = .74) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(!progress);
  const [manualChange, setManualChange] = useState(0);

  useEffect(() => {
    if (!progress) return;
    const update = (value: number) => setReady(current => current || value >= threshold);
    update(progress.get());
    return progress.on("change", update);
  }, [progress, threshold]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.3),
      { threshold: [0, 0.3] },
    );
    observer.observe(element);
    const onVisibility = () => setDocumentVisible(!document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const active = visible && ready && documentVisible && !still;
  useEffect(() => {
    if (!active) return;
    const timer = window.setInterval(() => setIndex(value => (value + 1) % count), interval);
    return () => window.clearInterval(timer);
  }, [active, count, interval, manualChange]);

  const goTo = useCallback((page: number) => {
    setIndex(((page % count) + count) % count);
    setReady(true);
    setManualChange(value => value + 1);
  }, [count]);

  return { ref, index, visible: visible && ready, active, goTo };
}
