"use client";

import { useEffect, useRef } from "react";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { Leaf, X } from "lucide-react";

const overlayTransition = { duration: 0.28, ease: [0.22, 1, 0.36, 1] } as const;
const panelTransition = { duration: 0.42, ease: [0.16, 1, 0.3, 1] } as const;

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true");
}

export function toDialogId(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

type PremiumDialogProps = {
  title: string;
  label: string;
  description?: string;
  closeLabel: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function PremiumDialog({ title, label, description, closeLabel, onClose, children }: PremiumDialogProps) {
  const shouldReduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);

  const headingId = `${toDialogId(title)}-title`;
  const descriptionId = `${toDialogId(title)}-description`;

  useEffect(() => {
    previousFocusedElementRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, shouldReduceMotion ? 0 : 80);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = getFocusableElements(dialogRef.current);
      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusedElementRef.current?.focus();
    };
  }, [onClose, shouldReduceMotion]);

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={overlayTransition}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          className="absolute inset-0 bg-[#032411]/45 backdrop-blur-[18px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={overlayTransition}
        />

        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={headingId}
          aria-describedby={description ? descriptionId : undefined}
          className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/40 bg-[#f8fcf3]/95 shadow-[0_35px_120px_rgba(3,36,17,0.28)]"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 28, filter: "blur(18px)" }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 18, filter: "blur(14px)" }}
          transition={panelTransition}
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#47a51f] via-[#8ed169] to-[#0b5d25]" />
          <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-lime-200/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-100/55 blur-3xl" />

          <div className="relative flex items-start justify-between gap-6 border-b border-emerald-100/90 px-6 pb-5 pt-7 sm:px-8 sm:pt-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-[#2f7d15]">
                <Leaf className="size-3.5" aria-hidden="true" />
                {label}
              </div>
              <h3 id={headingId} className="mt-4 text-[clamp(1.8rem,2.8vw,2.6rem)] font-black leading-tight tracking-[-0.04em] text-[#064118]">
                {title}
              </h3>
              {description ? (
                <p id={descriptionId} className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                  {description}
                </p>
              ) : null}
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              aria-label={closeLabel}
              onClick={onClose}
              className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-white/90 text-[#064118] shadow-lg shadow-green-950/8 transition duration-300 hover:-translate-y-0.5 hover:bg-[#064118] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-4"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="relative max-h-[min(72vh,48rem)] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
