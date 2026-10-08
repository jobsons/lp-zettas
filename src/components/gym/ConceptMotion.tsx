"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useTransform, useMotionValueEvent, type MotionValue } from "framer-motion";

export type IllustrationProps = {
  progress: MotionValue<number>;
  still: boolean;
};

export function Reveal({
  progress,
  at,
  still,
  children,
  className = "",
}: IllustrationProps & {
  at: number;
  children: ReactNode;
  className?: string;
}) {
  const [shown, setShown] = useState(() => progress.get() >= at);
  const shownRef = useRef(shown);
  useMotionValueEvent(progress, "change", value => {
    const next = value >= at;
    if (next !== shownRef.current) {
      shownRef.current = next;
      setShown(next);
    }
  });
  useEffect(() => {
    const next = progress.get() >= at;
    shownRef.current = next;
    setShown(next);
  }, [progress, at]);

  return (
    <motion.div
      className={className}
      initial={false}
      animate={{ opacity: still || shown ? 1 : 0, y: still || shown ? 0 : 18 }}
      transition={{ duration: still ? 0 : 0.35 }}
    >
      {children}
    </motion.div>
  );
}

export function CalendarDay({
  progress,
  still,
  at,
  children,
  className = "",
}: IllustrationProps & {
  at: number;
  children: ReactNode;
  className?: string;
}) {
  const backgroundColor = useTransform(
    progress,
    [at, at + 0.1],
    ["#e0e8f0", "#75c83e"],
  );
  const color = useTransform(
    progress,
    [at, at + 0.1],
    ["#637b90", "#183e22"],
  );
  const scale = useTransform(progress, [at, at + 0.06, at + 0.1], [1, 1.1, 1]);

  return (
    <motion.span
      className={className}
      style={
        still
          ? { backgroundColor: "#75c83e", color: "#183e22", scale: 1 }
          : { backgroundColor, color, scale }
      }
    >
      {children}
    </motion.span>
  );
}
