import { siteContent } from "@/data/site";

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-6"
      fill="currentColor"
    >
      <path d="M12.04 2a9.88 9.88 0 0 0-8.5 14.93L2.4 21.1l4.28-1.12A9.87 9.87 0 1 0 12.04 2Zm0 1.8a8.07 8.07 0 1 1-4.1 15.02l-.3-.18-2.54.66.68-2.47-.2-.32A8.08 8.08 0 0 1 12.04 3.8Zm-3.45 3.95c-.17 0-.45.06-.68.31-.23.26-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.8 2.84 4.45 3.87 2.2.87 2.65.7 3.13.66.48-.04 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3-.26-.13-1.55-.77-1.79-.85-.24-.09-.42-.13-.59.13-.17.26-.68.85-.83 1.03-.15.17-.31.2-.57.06-.26-.13-1.1-.4-2.1-1.3-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.06-.13-.59-1.42-.8-1.94-.22-.5-.43-.43-.59-.44h-.5Z" />
    </svg>
  );
}

export function FloatingWhatsAppButton() {
  return (
    <a
      href={siteContent.contact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Contactar por WhatsApp al ${siteContent.contact.phone}`}
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-[#65bc3e]/30 bg-[#47a51f] px-4 py-3 text-sm font-black text-white shadow-[0_18px_40px_rgba(6,65,24,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#3d8f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9ed87a] focus-visible:ring-offset-4 sm:bottom-7 sm:right-7"
    >
      <span className="grid size-10 place-items-center rounded-full bg-white/14 ring-1 ring-white/18 transition duration-300 group-hover:rotate-6">
        <WhatsAppIcon />
      </span>
      <span className="hidden sm:flex sm:flex-col sm:leading-tight">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/74">
          Contacto inmediato
        </span>
        <span>WhatsApp</span>
      </span>
    </a>
  );
}
