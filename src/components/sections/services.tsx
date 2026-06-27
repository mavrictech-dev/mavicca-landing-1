import { ClipboardCheck, FileCheck2, Leaf, Recycle, ShieldCheck, Waves, Wind } from "lucide-react";
import { MotionArticle, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionOrganicPattern } from "@/components/section-organic-pattern";

const serviceCards = [
  {
    title: "Monitoreos ambientales",
    description: "Monitoreo de calidad de aire, agua, suelo y ruido.",
    Icon: Wind,
  },
  {
    title: "Gestión de residuos",
    description: "Manejo integral y responsable de residuos sólidos y peligrosos.",
    Icon: Recycle,
  },
  {
    title: "Instrumentos de gestión ambiental",
    description: "Elaboración de EIA, DIA, PAMA y otros estudios ambientales.",
    Icon: FileCheck2,
  },
  {
    title: "Cumplimiento normativo",
    description: "Asesoría en cumplimiento de obligaciones ambientales.",
    Icon: ShieldCheck,
  },
] as const;

export function ServicesSection() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-[#fbfff7] px-6 pb-20 pt-10 lg:px-8 lg:pb-24 lg:pt-12">
      <div className="absolute left-1/2 top-18 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-200/30 blur-3xl" />
      <SectionOrganicPattern density="medium" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-[clamp(2rem,3.2vw,3.35rem)] font-black uppercase leading-none tracking-[-0.045em] text-[#08254a]">
              Nuestros servicios
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 flex items-center justify-center gap-4 text-[#55a52f]">
              <span className="h-0.5 w-24 bg-current" />
              <Leaf className="size-8 fill-current/10" strokeWidth={1.8} aria-hidden="true" />
              <span className="h-0.5 w-24 bg-current" />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-3xl text-[clamp(0.98rem,1.25vw,1.15rem)] font-medium leading-8 text-slate-700">
              Brindamos soluciones integrales adaptadas a las necesidades de tu empresa.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4" delay={0.1}>
          {serviceCards.map((service, index) => {
            const Icon = service.Icon;

            return (
              <StaggerItem key={service.title}>
                <MotionArticle
                  index={index}
                  className="group relative flex min-h-100 flex-col items-center overflow-hidden rounded-[1.6rem] border border-emerald-100 bg-white px-7 py-10 text-center shadow-[0_18px_48px_rgba(8,37,74,0.10)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(8,37,74,0.16)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#55a52f] via-cyan-300 to-emerald-700 opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute -right-12 -top-12 size-32 rounded-full bg-lime-100/60 transition duration-500 group-hover:scale-125" />

                  <div className="relative grid size-24 place-items-center rounded-[1.4rem] bg-emerald-50 text-[#08254a] ring-1 ring-emerald-100 transition duration-300 group-hover:bg-[#08254a] group-hover:text-lime-100">
                    <Icon className="size-12" strokeWidth={1.65} aria-hidden="true" />
                    {index === 0 ? (
                      <Waves className="absolute -bottom-3 -right-3 size-8 rounded-full bg-white p-1.5 text-[#55a52f] shadow-lg" aria-hidden="true" />
                    ) : index === 1 ? (
                      <Leaf className="absolute -bottom-3 -right-3 size-8 rounded-full bg-white p-1.5 text-[#55a52f] shadow-lg" aria-hidden="true" />
                    ) : (
                      <ClipboardCheck className="absolute -bottom-3 -right-3 size-8 rounded-full bg-white p-1.5 text-[#55a52f] shadow-lg" aria-hidden="true" />
                    )}
                  </div>

                  <h3 className="mt-8 min-h-[5.8rem] text-[clamp(1.25rem,1.55vw,1.55rem)] font-black leading-tight tracking-[-0.03em] text-[#08254a]">
                    {service.title}
                  </h3>

                  <div className="mt-2 h-1 w-16 rounded-full bg-[#55a52f] transition duration-300 group-hover:w-24" />

                  <p className="mt-7 text-[clamp(0.92rem,1vw,1.02rem)] leading-8 text-slate-700">
                    {service.description}
                  </p>
                </MotionArticle>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
