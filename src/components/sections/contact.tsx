import { Leaf, Mail, MapPin, MessageCircle, Send, Sprout } from "lucide-react";
import { MotionArticle, MotionForm, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionOrganicPattern } from "@/components/section-organic-pattern";

const contactItems = [
  { label: "WhatsApp", value: "+51 995 688 777", Icon: MessageCircle, accent: true },
  { label: "Correo", value: "info@mavicca.com.pe", Icon: Mail, accent: false },
  { label: "Dirección", value: "Av. Ambiental 123, Lima — Perú", Icon: MapPin, accent: false },
] as const;

const inputClass = "h-16 rounded-xl border border-emerald-100 bg-white px-5 text-sm text-[#064118] outline-none placeholder:text-slate-500 transition focus:border-[#47a51f] focus:ring-4 focus:ring-[#47a51f]/15";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#fbfdf8] px-6 py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="absolute bottom-8 right-8 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl" />
      <SectionOrganicPattern density="soft" />
      <div className="absolute right-[12%] top-16 hidden rounded-full border border-emerald-100 bg-white/60 p-4 text-[#064118] shadow-lg shadow-green-950/10 backdrop-blur-md lg:block">
        <Sprout className="size-8" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <aside className="space-y-9">
          <div className="space-y-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#064118] ring-1 ring-emerald-100">
                <Leaf className="size-4" aria-hidden="true" />
                Hagamos sostenible tu operación
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-[clamp(2rem,3.1vw,3.3rem)] font-black uppercase leading-none tracking-[-0.045em] text-[#064118]">
                Contáctanos
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="h-1.5 w-24 rounded-full bg-[#47a51f]" />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-md text-[clamp(0.98rem,1.2vw,1.15rem)] font-medium leading-8 text-emerald-950/78">
                Estamos listos para ayudarte a construir un futuro más sostenible.
              </p>
            </Reveal>
          </div>

          <Stagger className="space-y-6" delay={0.16}>
            {contactItems.map((item, index) => {
              const Icon = item.Icon;

              return (
                <StaggerItem key={item.label}>
                  <MotionArticle index={index} className="group flex gap-5">
                    <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-emerald-100 bg-white text-[#064118] shadow-lg shadow-green-950/10 transition duration-300 group-hover:bg-[#064118] group-hover:text-[#eff7e8]">
                      <Icon className="size-8" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div className={`min-w-0 pb-6 ${index !== contactItems.length - 1 ? "border-b border-emerald-100" : ""}`}>
                      <p className="text-lg font-black text-[#064118]">{item.label}</p>
                      <p className={`mt-1 text-base font-semibold ${item.accent ? "text-[#47a51f]" : "text-[#064118]/76"}`}>
                        {item.value}
                      </p>
                    </div>
                  </MotionArticle>
                </StaggerItem>
              );
            })}
          </Stagger>
        </aside>

        <MotionForm className="rounded-[1.8rem] border border-emerald-100 bg-white/88 p-6 shadow-2xl shadow-green-950/10 backdrop-blur-xl sm:p-8 lg:p-10" delay={0.18}>
          <div className="grid gap-5 sm:grid-cols-2">
            <input name="name" placeholder="Nombre" className={inputClass} />
            <input name="company" placeholder="Empresa" className={inputClass} />
            <input type="email" name="email" placeholder="Correo electrónico" className={inputClass} />
            <input type="tel" name="phone" placeholder="Teléfono" className={inputClass} />
          </div>

          <textarea name="message" rows={6} placeholder="Mensaje" className="mt-5 w-full rounded-xl border border-emerald-100 bg-white px-5 py-5 text-sm text-[#064118] outline-none placeholder:text-slate-500 transition focus:border-[#47a51f] focus:ring-4 focus:ring-[#47a51f]/15" />

          <button type="submit" className="group mt-7 inline-flex min-w-64 items-center justify-center gap-3 rounded-xl bg-[#47a51f] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#3d8f1a] hover:shadow-xl hover:shadow-green-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-4">
            Enviar mensaje
            <Send className="size-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
          </button>
        </MotionForm>
      </div>
    </section>
  );
}

