"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Building2, Flag, Leaf, ShieldCheck, Users, X } from "lucide-react";
import { MotionArticle, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionOrganicPattern } from "@/components/section-organic-pattern";
import { siteContent } from "@/data/site";

const pillarIcons = {
  shield: ShieldCheck,
  leaf: Leaf,
  team: Users,
  sectors: Building2,
} as const;

const teamImages = [
  { src: "/mavicca-1.jpeg", alt: "Equipo Mavicca en supervisión ambiental de campo" },
  { src: "/mavicca-2.jpeg", alt: "Profesional de Mavicca durante capacitación técnica" },
  { src: "/mavicca-3.jpeg", alt: "Sesión de capacitación ambiental de Mavicca" },
  { src: "/mavicca-4.jpeg", alt: "Equipo multidisciplinario de Mavicca en operación" },
  { src: "/mavicca-5.jpeg", alt: "Equipo Mavicca junto a material institucional" },
] as const;

export function AboutSection() {
  const { about } = siteContent;
  const [selectedImage, setSelectedImage] = useState<(typeof teamImages)[number] | null>(null);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <section
        id="quienes-somos"
        className="relative isolate overflow-hidden bg-[#fbfdf8] pb-10 pt-10 lg:pb-12"
      >
        <div className="absolute left-8 top-28 -z-10 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
        <SectionOrganicPattern density="soft" />

        <div className="relative z-10 mx-auto max-w-[92rem] px-6 sm:px-10 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12">
            <div className="max-w-3xl space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#064118] ring-1 ring-emerald-100">
                  <Leaf className="size-4" aria-hidden="true" />
                  {about.eyebrow}
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="text-[clamp(2.15rem,3vw,3.35rem)] font-black uppercase leading-none tracking-[-0.045em] text-[#064118]">
                  {about.title}
                </h2>
              </Reveal>

              <Reveal delay={0.16} className="mt-5 space-y-4">
                {about.fullStory.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-2xl text-[clamp(0.9rem,0.98vw,1rem)] leading-6.5 text-slate-700 sm:leading-7"
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            </div>

            <Reveal delay={0.18} className="grid gap-4">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-emerald-100 bg-white/86 p-6 shadow-xl shadow-green-950/8 backdrop-blur-sm sm:p-7">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#47a51f] via-[#8ed169] to-[#0b5d25]" />
                <div className="absolute -left-8 top-6 h-20 w-20 rounded-full bg-lime-200/35 blur-3xl" />
                <div className="relative flex items-start gap-5">
                  <div className="grid size-18 shrink-0 place-items-center rounded-full border border-emerald-100 bg-emerald-50 text-[#064118] shadow-sm shadow-green-950/5">
                    <Leaf className="size-8" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#1f7a1f]">Misión</p>
                    <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">{about.mission}</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-emerald-100 bg-white/86 p-6 shadow-xl shadow-green-950/8 backdrop-blur-sm sm:p-7">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#47a51f] via-[#8ed169] to-[#0b5d25]" />
                <div className="absolute right-4 top-5 h-16 w-16 rounded-full bg-cyan-100/35 blur-3xl" />
                <div className="relative flex items-start gap-5">
                  <div className="grid size-18 shrink-0 place-items-center rounded-full border border-emerald-100 bg-emerald-50 text-[#064118] shadow-sm shadow-green-950/5">
                    <Flag className="size-8" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#1f7a1f]">Visión</p>
                    <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">{about.vision}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.24} className="pt-8">
            <div className="relative rounded-[1.55rem] border border-emerald-100 bg-white/82 px-4 pb-5 pt-4 shadow-xl shadow-green-950/10 backdrop-blur-md sm:px-5">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#064118]">
                <Leaf className="size-4" aria-hidden="true" />
                Nuestro equipo en acción
              </div>

              <div
                className="mt-4 flex gap-2.5 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {teamImages.map((image) => (
                  <button
                    type="button"
                    key={image.src}
                    onClick={() => setSelectedImage(image)}
                    className="group relative h-34 min-w-[13rem] flex-1 cursor-zoom-in overflow-hidden rounded-xl border border-emerald-100 bg-emerald-50 shadow-sm shadow-green-950/5 transition duration-300 hover:z-10 hover:scale-[1.04] hover:shadow-xl hover:shadow-green-950/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-4 sm:h-36 sm:min-w-[15rem] lg:min-w-0"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 32vw, 18vw"
                      className="object-cover transition duration-500 ease-out group-hover:scale-110"
                    />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="pt-6">
            <Stagger className="grid gap-5 rounded-[1.4rem] border border-emerald-100 bg-white/88 px-6 py-6 shadow-xl shadow-green-950/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
              {about.pillars.map((pillar, index) => {
                const Icon = pillarIcons[pillar.icon];

                return (
                  <StaggerItem key={pillar.title}>
                    <MotionArticle
                      index={index}
                      className="group flex h-full items-center gap-4 rounded-2xl p-2 lg:border-r lg:border-emerald-100 lg:pr-6 lg:last:border-r-0"
                    >
                      <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-[#064118] ring-1 ring-emerald-100 transition duration-300 group-hover:bg-[#47a51f] group-hover:text-white">
                        <Icon className="size-8" strokeWidth={1.8} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-lg font-black leading-tight tracking-[-0.035em] text-[#064118] lg:text-[1.7rem]">{pillar.title}</p>
                      </div>
                    </MotionArticle>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </section>

      {selectedImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada del equipo Mavicca"
          className="fixed inset-0 z-80 flex items-center justify-center bg-[#02180b]/75 p-4 backdrop-blur-md"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedImage(null);
            }
          }}
        >
          <button
            type="button"
            aria-label="Cerrar imagen ampliada"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-white/92 text-[#064118] shadow-xl shadow-green-950/25 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-4 focus-visible:ring-offset-[#02180b]"
          >
            <X className="size-5" strokeWidth={2.5} aria-hidden="true" />
          </button>

          <div className="relative h-[min(78vh,46rem)] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-white/8 shadow-[0_32px_110px_rgba(0,0,0,0.42)]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
