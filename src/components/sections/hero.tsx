import { ArrowRight, Leaf, MessageCircle, Sprout } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionOrganicPattern } from "@/components/section-organic-pattern";
import { siteContent } from "@/data/site";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      id="inicio"
      className="relative isolate min-h-svh overflow-hidden bg-[#fbfdf8] bg-cover bg-position-[62%_1.75rem] bg-no-repeat sm:min-h-svh lg:bg-position-[58%_2.25rem]"
      style={{ backgroundImage: "url('/bg-hero.png')" }}
    >
      <div className="absolute inset-0 -z-10 bg-[#fbfdf8]/16" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-emerald-950/76 via-emerald-800/38 to-white/0" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-emerald-900/24 via-transparent to-white/14" />
      <div className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-lime-300/20 blur-3xl" />
      <div className="absolute right-[8%] top-28 -z-10 h-56 w-56 rounded-full bg-cyan-300/16 blur-3xl" />
      <SectionOrganicPattern tone="dark" density="soft" />

      <div className="relative z-10 flex min-h-svh w-full items-center px-6 pb-12 pt-24 sm:px-10 sm:pb-14 sm:pt-28 lg:px-[7vw] lg:pb-16 lg:pt-32">
        <div className="max-w-160 text-white">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-200/40 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-lime-100 backdrop-blur-md">
              <Sprout className="size-4" aria-hidden="true" />
              {hero.eyebrow}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-[clamp(2.8rem,4vw,4.45rem)] font-black leading-[1.06] tracking-tighter drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
              {hero.title}
            </h1>
          </Reveal>

          <Stagger className="mt-8 flex flex-col gap-3 sm:flex-row" delay={0.18}>
            <StaggerItem>
              <a
                href="#servicios"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-[#8dcf67] bg-[#47a51f] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-green-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#3d8f1a] hover:shadow-xl hover:shadow-green-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7e6ae] focus-visible:ring-offset-4 focus-visible:ring-offset-emerald-950"
              >
                <Leaf className="size-5 transition duration-300 group-hover:rotate-12" aria-hidden="true" />
                {hero.primaryCta}
                <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </StaggerItem>

            <StaggerItem>
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-[#8dcf67] bg-[#47a51f] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-green-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#3d8f1a] hover:shadow-xl hover:shadow-green-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7e6ae] focus-visible:ring-offset-4 focus-visible:ring-offset-emerald-950"
              >
                <MessageCircle className="size-5 transition duration-300 group-hover:rotate-6" aria-hidden="true" />
                {hero.secondaryCta}
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
}

