"use client";

import { useEffect, useRef, useState } from "react";
import { Leaf, Mail, MapPin, Plus, Send, Sprout, X } from "lucide-react";
import { MotionArticle, MotionForm, Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionOrganicPattern } from "@/components/section-organic-pattern";
import { siteContent } from "@/data/site";

const inputClass = "h-16 rounded-xl border border-emerald-100 bg-white px-5 text-sm text-[#064118] outline-none placeholder:text-slate-500 transition focus:border-[#47a51f] focus:ring-4 focus:ring-[#47a51f]/15";
const serviceOptions = [
  ...siteContent.services.items.map((service) => service.title),
  "Otros",
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className ?? "size-8"}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 8.8 8.8 0 0 1-3.8-.9L3 20l1.4-4.4A8.2 8.2 0 0 1 3 11.5 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z" />
      <path d="M8.8 8.5c.2 4 2.7 6.4 6.6 6.9" />
    </svg>
  );
}

export function ContactSection() {
  const { contact } = siteContent;
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isServiceListOpen, setIsServiceListOpen] = useState(false);
  const servicesSelectorRef = useRef<HTMLDivElement>(null);
  const addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
  const contactItems = [
    {
      label: "WhatsApp",
      value: contact.phone,
      href: contact.whatsappUrl,
      Icon: WhatsAppIcon,
      accent: true,
    },
    {
      label: "Correo",
      value: contact.email,
      href: `mailto:${contact.email}`,
      Icon: Mail,
      accent: false,
    },
    {
      label: "Dirección",
      value: contact.address,
      href: addressUrl,
      Icon: MapPin,
      accent: false,
    },
  ] as const;

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (servicesSelectorRef.current?.contains(event.target as Node)) {
        return;
      }

      setIsServiceListOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const availableServices = serviceOptions.filter((service) => !selectedServices.includes(service));

  const addService = (service: string) => {
    setSelectedServices((currentServices) =>
      currentServices.includes(service) ? currentServices : [...currentServices, service],
    );
    setIsServiceListOpen(false);
  };

  const removeService = (service: string) => {
    setSelectedServices((currentServices) =>
      currentServices.filter((selectedService) => selectedService !== service),
    );
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#fbfdf8] px-6 pb-5 pt-10 lg:px-8 lg:pb-6 lg:pt-12"
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
                {contact.eyebrow}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="text-[clamp(2rem,3.1vw,3.3rem)] font-black uppercase leading-none tracking-[-0.045em] text-[#064118]">
                {contact.title}
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md text-[clamp(0.98rem,1.2vw,1.15rem)] font-medium leading-8 text-emerald-950/78">
                {contact.description}
              </p>
            </Reveal>

            <Reveal delay={0.26} className="hidden">
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2f7d15]">
                  Sectores que atendemos
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {contact.sectors.map((sector) => (
                  <div
                    key={sector}
                    className="rounded-lg border border-emerald-100 bg-white/90 px-4 py-3 text-sm font-bold text-[#064118] shadow-sm shadow-green-950/5 ring-1 ring-white/70"
                  >
                    {sector}
                  </div>
                ))}
                </div>
              </div>
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
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                          className={`mt-1 inline-block text-base font-semibold transition duration-300 hover:text-[#2f7d15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-2 ${item.accent ? "text-[#47a51f]" : "text-[#064118]/76"}`}
                        >
                          {item.value}
                        </a>
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
            <div ref={servicesSelectorRef} className="relative sm:col-span-2">
              <span className="mb-2 block text-sm font-black text-[#064118]" id="services-selector-label">
                Servicios a consultar
              </span>

              <div className="flex h-16 items-start gap-3 rounded-xl border border-emerald-100 bg-white px-4 py-3 transition focus-within:border-[#47a51f] focus-within:ring-4 focus-within:ring-[#47a51f]/15">
                <div className="h-10 flex-1 overflow-y-auto pr-1">
                  <div className="flex flex-wrap gap-2">
                    {selectedServices.length > 0 ? (
                      selectedServices.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-bold text-[#064118] shadow-sm shadow-green-950/5"
                        >
                          {service}
                          <button
                            type="button"
                            onClick={() => removeService(service)}
                            aria-label={`Quitar ${service}`}
                            className="grid size-5 place-items-center rounded-full text-[#2f7d15] transition hover:bg-emerald-50 hover:text-[#064118] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f]"
                          >
                            <X className="size-3.5" aria-hidden="true" />
                          </button>
                        </span>
                      ))
                    ) : (
                      <span className="inline-flex h-10 items-center text-sm font-medium text-slate-500">
                        Agrega uno o más servicios
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsServiceListOpen((isOpen) => !isOpen)}
                  aria-expanded={isServiceListOpen}
                  aria-controls="services-options"
                  aria-labelledby="services-selector-label"
                  className="ml-auto grid size-10 shrink-0 place-items-center rounded-full bg-[#47a51f] text-white shadow-md shadow-green-950/10 transition hover:-translate-y-0.5 hover:bg-[#3d8f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-2"
                >
                  <Plus className="size-5" strokeWidth={3} aria-hidden="true" />
                </button>
              </div>

              {selectedServices.map((service) => (
                <input key={service} type="hidden" name="services" value={service} />
              ))}

              {isServiceListOpen ? (
                <div
                  id="services-options"
                  className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 max-h-72 overflow-y-auto rounded-2xl border border-emerald-100 bg-white p-2 shadow-2xl shadow-green-950/12"
                >
                  {availableServices.length > 0 ? (
                    availableServices.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => addService(service)}
                        className="flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-[#064118] transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f]"
                      >
                        <span>{service}</span>
                        <Plus className="size-4 shrink-0 text-[#2f7d15]" aria-hidden="true" />
                      </button>
                    ))
                  ) : (
                    <p className="px-4 py-3 text-sm font-semibold text-[#064118]/60">
                      Ya seleccionaste todos los servicios.
                    </p>
                  )}
                </div>
              ) : null}

              <span className="mt-2 block text-xs font-semibold text-[#064118]/60">
                Presiona + para agregar servicios. Puedes quitarlos con la X.
              </span>
            </div>
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

