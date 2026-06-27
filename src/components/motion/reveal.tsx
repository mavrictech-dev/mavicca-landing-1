"use client";

import { MotionConfig, motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
};

const viewport = { once: true, amount: 0.22 } as const;
const gentleEase = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, className, delay = 0 }: MotionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.82, delay, ease: gentleEase }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}

export function Stagger({ children, className, delay = 0 }: MotionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={{
          hidden: {},
          show: {
            transition: {
              delayChildren: delay,
              staggerChildren: 0.14,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}

export function StaggerItem({ children, className }: MotionProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18, scale: 0.985, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.78, ease: gentleEase },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionArticle({ children, className }: MotionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.article
        className={className}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 170, damping: 24, mass: 0.9 }}
      >
        {children}
      </motion.article>
    </MotionConfig>
  );
}

export function MotionForm({ children, className, delay = 0 }: MotionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.form
        className={className}
        initial={{ opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewport}
        transition={{ duration: 0.82, delay, ease: gentleEase }}
      >
        {children}
      </motion.form>
    </MotionConfig>
  );
}

export function FloatingEcoBadge({ children, className, delay = 0 }: MotionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -12, 0],
          rotate: [0, 3, -2, 0],
        }}
        transition={{
          opacity: { duration: 0.45, delay },
          scale: { duration: 0.45, delay },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay },
        }}
        aria-hidden="true"
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
