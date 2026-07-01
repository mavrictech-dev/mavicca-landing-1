import Image from "next/image";
import { BadgeCheck, Building2, ChartNoAxesColumnIncreasing, Leaf, Medal, Sprout } from "lucide-react";
import { MotionArticle, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionOrganicPattern } from "@/components/section-organic-pattern";

const aboutStats = [
  { value: "+150", label: "Proyectos realizados", Icon: ChartNoAxesColumnIncreasing },
  { value: "+80", label: "Empresas asesoradas", Icon: Building2 },
  { value: "+10", label: "Años de experiencia", Icon: Medal },
  { value: "100%", label: "Compromiso ambiental", Icon: BadgeCheck },
] as const;

export function AboutSection() {
  return (
    <section
      id="quienes-somos"
      className="relative isolate min-h-160 overflow-hidden bg-[#fbfdf8] lg:min-h-175"
    >
      <div className="absolute right-0 top-20 -z-20 hidden h-130 w-[46%] bg-white lg:block">
        <Image
          src="/img-about.png"
          alt="Especialistas ambientales revisando información técnica en campo"
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-contain object-top-right"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#fff_0%,#fff_54%,rgba(255,255,255,0.82)_58%,rgba(255,255,255,0)_65%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-linear-to-t from-[#fbfdf8] to-transparent" />
      <div className="absolute left-8 top-28 -z-10 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />
      <SectionOrganicPattern density="soft" />

      <div className="relative z-10 mx-auto flex min-h-112.5 max-w-7xl items-start px-6 pb-4 pt-20 sm:px-10 lg:min-h-117.5 lg:px-8">
        <div className="max-w-140 space-y-8">
          <div className="space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#064118] ring-1 ring-emerald-100">
                <Leaf className="size-4" aria-hidden="true" />
                Consultoría con evidencia técnica
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-[clamp(2.15rem,3vw,3.35rem)] font-black uppercase leading-none tracking-[-0.045em] text-[#064118]">
                ¿Quiénes somos?
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-[clamp(1.05rem,1.35vw,1.35rem)] font-medium leading-[1.7] text-slate-900/88">
                Somos una consultora especializada en gestión ambiental. Brindamos
                soluciones técnicas innovadoras y <strong className="font-black text-[#064118]">efectivas para el cumplimiento</strong>{" "}
                de la normativa ambiental vigente.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.24} className="space-y-5">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#47a51f] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#3d8f1a] hover:shadow-xl hover:shadow-green-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-4"
            >
              <Sprout className="size-5 transition duration-300 group-hover:rotate-12" aria-hidden="true" />
              Conoce más sobre nosotros
            </a>

            <div className="h-1.5 w-24 rounded-full bg-[#47a51f]" />
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-10 lg:px-8">
        <Stagger className="grid gap-5 rounded-[1.4rem] border border-emerald-100 bg-white/88 px-6 py-6 shadow-xl shadow-green-950/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {aboutStats.map((stat, index) => {
            const Icon = stat.Icon;

            return (
              <StaggerItem key={stat.label}>
                <MotionArticle
                  index={index}
                  className="group flex h-full items-center gap-4 rounded-2xl p-2 lg:border-r lg:border-emerald-100 lg:pr-6 lg:last:border-r-0"
                >
                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-[#064118] ring-1 ring-emerald-100 transition duration-300 group-hover:bg-[#47a51f] group-hover:text-white">
                    <Icon className="size-8" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[clamp(1.8rem,2.5vw,2.7rem)] font-black leading-none tracking-[-0.04em] text-[#064118]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-700">
                      {stat.label}
                    </p>
                  </div>
                </MotionArticle>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
