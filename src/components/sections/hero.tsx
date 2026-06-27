import { ArrowRight, Leaf, MessageCircle, Sprout } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionOrganicPattern } from "@/components/section-organic-pattern";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-[#f4fff2] bg-cover bg-position-[62%_center] bg-no-repeat sm:min-h-[calc(100ssvh-3.5rem)] lg:min-h-[calc(100svh-5rem)] lg:bg-center"
      style={{ backgroundImage: "url('/bg-hero.png')" }}
    >
      <div className="absolute inset-0 -z-10 bg-[#f4fff2]/16" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-emerald-950/76 via-emerald-800/38 to-white/0" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-emerald-900/24 via-transparent to-white/14" />
      <div className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl" />
      <div className="absolute right-[8%] top-28 -z-10 h-56 w-56 rounded-full bg-cyan-300/16 blur-3xl" />
      <SectionOrganicPattern tone="dark" density="soft" />

      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] w-full items-center px-6 py-12 sm:min-h-[calc(100svh-4.5rem)] sm:px-10 lg:min-h-[calc(100svh-5rem)] lg:px-[7vw]">
        <div className="max-w-160 text-white">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-200/40 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-lime-100 backdrop-blur-md">
              <Sprout className="size-4" aria-hidden="true" />
              Gestión ambiental estratégica
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-[clamp(2.8rem,4vw,4.45rem)] font-black leading-[1.06] tracking-tighter drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
              Soluciones ambientales integrales para empresas responsables
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-136 text-[clamp(1rem,1.25vw,1.35rem)] font-medium leading-[1.65] text-white/90 drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]">
              Acompañamos a tu empresa en el cumplimiento ambiental y la
              sostenibilidad de sus operaciones.
            </p>
          </Reveal>

          <Stagger className="mt-8 flex flex-col gap-3 sm:flex-row" delay={0.28}>
            <StaggerItem>
              <a
                href="#servicios"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-lime-300/70 bg-green-700 px-6 py-3.5 text-sm font-black text-white shadow-[0_12px_28px_rgba(21,128,61,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 focus-visible:ring-offset-4 focus-visible:ring-offset-emerald-950"
              >
                <Leaf className="size-5 transition duration-300 group-hover:rotate-12" aria-hidden="true" />
                Nuestros servicios
                <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </StaggerItem>

            <StaggerItem>
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-lime-200/90 bg-white/12 px-6 py-3.5 text-sm font-black text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 focus-visible:ring-offset-4 focus-visible:ring-offset-emerald-950"
              >
                <MessageCircle className="size-5 transition duration-300 group-hover:rotate-6" aria-hidden="true" />
                Contáctanos
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}

