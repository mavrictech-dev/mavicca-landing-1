"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  GraduationCap,
  Handshake,
  Leaf,
  Recycle,
  Scale,
  ScrollText,
  Sprout,
  Wind,
  X,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionOrganicPattern } from "@/components/section-organic-pattern";
import { type ServiceItem, siteContent } from "@/data/site";

const serviceIcons = {
  clipboard: ClipboardCheck,
  community: Handshake,
  sprout: Sprout,
  monitoring: Wind,
  compliance: Scale,
  recycle: Recycle,
  permits: ScrollText,
  training: GraduationCap,
  studies: FileCheck2,
  government: Building2,
} as const;

const serviceAccents = [
  "from-[#47a51f] via-[#79c24f] to-[#064118]",
  "from-[#0f766e] via-[#34d399] to-[#064118]",
  "from-[#65a30d] via-[#bef264] to-[#3f6212]",
  "from-[#166534] via-[#22c55e] to-[#0f766e]",
] as const;

const serviceDisplayOrder = [0, 1, 3, 4, 2, 5, 6, 7, 8, 9] as const;

type ServiceDialogProps = {
  service: ServiceItem;
  onClose: () => void;
};

type SelectedService = {
  service: ServiceItem;
  originalIndex: number;
};

function ServiceDialog({ service, onClose }: ServiceDialogProps) {
  const shouldReduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);
  const Icon = serviceIcons[service.icon];
  const splitIndex = Math.ceil(service.bullets.length / 2);
  const includedItems = service.bullets.slice(0, splitIndex);
  const deliverableItems = service.bullets.slice(splitIndex);

  useEffect(() => {
    previousFocusedElementRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), shouldReduceMotion ? 0 : 80);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
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
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center p-3 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="absolute inset-0 bg-[#032411]/55 backdrop-blur-[10px]" />

      <motion.article
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-dialog-title"
        aria-describedby="service-dialog-description"
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[1.4rem] border border-emerald-100 bg-white shadow-[0_28px_95px_rgba(3,36,17,0.32)]"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Cerrar detalle del servicio"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 grid size-12 place-items-center rounded-full border border-emerald-100 bg-white/90 text-[#064118] shadow-sm shadow-green-950/10 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-4"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="max-h-[min(88vh,48rem)] overflow-y-auto px-5 pb-7 pt-[4.75rem] sm:px-9 sm:py-9">
          <div className="grid gap-6 md:grid-cols-[7rem_1fr] md:items-center">
            <div className="grid size-24 place-items-center rounded-full bg-emerald-50 text-[#2f7d15] ring-1 ring-emerald-100 sm:size-28">
              <Icon className="size-12 sm:size-14" strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div className="max-w-2xl">
              <h3 id="service-dialog-title" className="text-[clamp(1.8rem,3.1vw,2.65rem)] font-black leading-tight tracking-[-0.045em] text-[#064118]">
                {service.title}
              </h3>
              <div className="mt-4 h-0.5 w-16 rounded-full bg-[#47a51f]" />
              <p id="service-dialog-description" className="mt-4 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                {service.details}
              </p>
            </div>
          </div>

          <div className="my-8 h-px bg-emerald-100" />

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="flex items-center gap-3 text-lg font-black text-[#064118]">
                <ClipboardList className="size-5 text-[#2f7d15]" aria-hidden="true" />
                ¿Qué incluye?
              </h4>

              <ul className="mt-5 space-y-4">
                {includedItems.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-700"
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={shouldReduceMotion ? undefined : { delay: 0.04 * index, duration: 0.26 }}
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#2f7d15]" aria-hidden="true" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="border-emerald-100 md:border-l md:pl-8">
              <h4 className="flex items-center gap-3 text-lg font-black text-[#064118]">
                <FileText className="size-5 text-[#2f7d15]" aria-hidden="true" />
                Entregables
              </h4>

              <ul className="mt-5 space-y-4">
                {deliverableItems.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-700"
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={shouldReduceMotion ? undefined : { delay: 0.04 * index, duration: 0.26 }}
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#2f7d15]" aria-hidden="true" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<SelectedService | null>(null);
  const [activePage, setActivePage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const touchStartX = useRef<number | null>(null);

  const services = siteContent.services.items;
  const sectionDescription = siteContent.services.description;
  const orderedServices = useMemo(
    () =>
      serviceDisplayOrder.map((serviceIndex) => ({
        service: services[serviceIndex] as ServiceItem,
        originalIndex: Number(serviceIndex),
      })),
    [services],
  );
  const totalPages = Math.max(1, Math.ceil(orderedServices.length / cardsPerPage));
  const normalizedActivePage = Math.min(activePage, totalPages - 1);
  const visibleServices = orderedServices.slice(
    normalizedActivePage * cardsPerPage,
    (normalizedActivePage + 1) * cardsPerPage,
  );

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        setCardsPerPage(4);
        return;
      }

      if (window.matchMedia("(min-width: 768px)").matches) {
        setCardsPerPage(2);
        return;
      }

      setCardsPerPage(1);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const goToPreviousPage = () => {
    setActivePage(normalizedActivePage === 0 ? totalPages - 1 : normalizedActivePage - 1);
  };

  const goToNextPage = () => {
    setActivePage((normalizedActivePage + 1) % totalPages);
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStartX.current === null || totalPages <= 1) {
      touchStartX.current = null;
      return;
    }

    const distance = touchStartX.current - clientX;

    if (Math.abs(distance) > 44) {
      if (distance > 0) {
        goToNextPage();
      } else {
        goToPreviousPage();
      }
    }

    touchStartX.current = null;
  };

  return (
    <>
      <section id="servicios" className="relative overflow-hidden bg-[#fbfdf8] px-6 pb-20 pt-10 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="absolute left-1/2 top-18 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-200/30 blur-3xl" />
        <SectionOrganicPattern density="medium" />

        <div className="relative z-10 mx-auto max-w-[92rem]">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="text-[clamp(2rem,3.2vw,3.35rem)] font-black uppercase leading-none tracking-[-0.045em] text-[#064118]">
                {siteContent.services.title}
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-6 flex items-center justify-center gap-4 text-[#064118]">
                <span className="h-0.5 w-24 bg-current" />
                <Leaf className="size-8 fill-current/10" strokeWidth={1.8} aria-hidden="true" />
                <span className="h-0.5 w-24 bg-current" />
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-3xl text-[clamp(0.98rem,1.25vw,1.15rem)] font-medium leading-8 text-slate-700">
                {sectionDescription}
              </p>
            </Reveal>
          </div>

          <div className="relative mt-10 px-[2.75rem] md:px-[4rem] xl:px-[4.25rem]">
            <button
              type="button"
              onClick={goToPreviousPage}
              disabled={totalPages <= 1}
              aria-label="Ver servicios anteriores"
              className="absolute left-1 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-emerald-100 bg-white/92 text-[#064118] shadow-xl shadow-green-950/15 backdrop-blur transition hover:bg-emerald-50 disabled:pointer-events-none disabled:opacity-35 md:left-3 md:size-12 xl:left-4"
            >
              <ChevronLeft className="size-5 md:size-6" strokeWidth={3} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={goToNextPage}
              disabled={totalPages <= 1}
              aria-label="Ver más servicios"
              className="absolute right-1 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-emerald-100 bg-white/92 text-[#064118] shadow-xl shadow-green-950/15 backdrop-blur transition hover:bg-emerald-50 disabled:pointer-events-none disabled:opacity-35 md:right-3 md:size-12 xl:right-4"
            >
              <ChevronRight className="size-5 md:size-6" strokeWidth={3} aria-hidden="true" />
            </button>

            <div
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                handleTouchEnd(event.changedTouches[0]?.clientX ?? 0);
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${normalizedActivePage}-${cardsPerPage}`}
                  className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-4"
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  aria-live="polite"
                >
                  {visibleServices.map(({ service, originalIndex }) => {
                    const Icon = serviceIcons[service.icon];
                    const accent = serviceAccents[originalIndex % serviceAccents.length];

                    return (
                      <motion.button
                        key={service.title}
                        type="button"
                        whileHover={{ y: -4, scale: 1.008 }}
                        transition={{ type: "spring", stiffness: 170, damping: 24, mass: 0.9 }}
                        onClick={() => setSelectedService({ service, originalIndex })}
                        aria-haspopup="dialog"
                        aria-expanded={selectedService?.service.title === service.title}
                        className="group relative flex min-h-[18.5rem] w-full flex-col overflow-hidden rounded-[1.65rem] border border-emerald-100 bg-white/90 px-6 py-7 text-left shadow-xl shadow-green-950/10 backdrop-blur transition-shadow duration-300 hover:shadow-2xl hover:shadow-green-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-4 md:min-h-[27rem] md:px-7 md:py-8 xl:min-h-[26.5rem]"
                      >
                        <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${accent}`} />
                        <div className="absolute -right-11 -top-11 size-30 rounded-full bg-lime-100/70 transition duration-500 group-hover:scale-125" />
                        <div className="absolute right-0 top-0 h-18 w-18 rounded-bl-[1.8rem] bg-lime-50/85" aria-hidden="true" />
                        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden="true">
                          <div className="absolute inset-x-8 bottom-0 h-32 rounded-full bg-emerald-100/35 blur-3xl" />
                        </div>

                        <div className="relative flex items-start">
                          <div className="grid size-18 shrink-0 place-items-center rounded-[1.2rem] bg-emerald-50 text-[#064118] ring-1 ring-emerald-100 transition duration-300 group-hover:bg-[#064118] group-hover:text-[#eff7e8] md:size-20 md:rounded-[1.35rem]">
                            <Icon className="size-9 md:size-10" strokeWidth={1.8} aria-hidden="true" />
                          </div>
                        </div>

                        <h3 className="relative mt-6 text-[clamp(1.18rem,1.32vw,1.42rem)] font-black leading-tight tracking-[-0.035em] text-[#064118]">
                          {service.title}
                        </h3>

                        <div className="mt-4 h-0.5 w-14 rounded-full bg-[#47a51f] transition duration-300 group-hover:w-22" />

                        <p className="relative mt-5 hidden text-[0.95rem] leading-7 text-slate-700 md:block">
                          {service.summary}
                        </p>

                        <div className="relative mt-auto flex items-center gap-2.5 pt-7 text-sm font-black text-[#064118]">
                          Ver detalles
                          <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {selectedService ? (
        <ServiceDialog
          service={selectedService.service}
          onClose={() => setSelectedService(null)}
        />
      ) : null}
    </>
  );
}
