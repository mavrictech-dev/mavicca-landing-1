"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteContent } from "@/data/site";

export function Header() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const navItems = [{ label: "Inicio", href: "#inicio" }, ...siteContent.nav];

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      if (tickingRef.current) {
        return;
      }

      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollYRef.current;

        if (currentScrollY < 32) {
          setIsHeaderHidden(false);
        } else if (scrollDelta > 8 && currentScrollY > 96) {
          setIsHeaderHidden(true);
        } else if (scrollDelta < -8) {
          setIsHeaderHidden(false);
        }

        lastScrollYRef.current = currentScrollY;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b border-emerald-100/80 bg-[#fbfdf8]/78 shadow-lg shadow-green-950/10 backdrop-blur-2xl transition-[transform,opacity,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isHeaderHidden ? "pointer-events-none -translate-y-full opacity-0 shadow-none" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between px-10  sm:h-18 sm:px-20 lg:h-20 lg:px-40">
        <a
          href="#inicio"
          aria-label={`${siteContent.companyName} - volver al inicio`}
          className="flex shrink-0 items-center outline-none transition duration-300 hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-4"
        >
          <Image
            src="/logo-completo.png"
            alt={siteContent.companyName}
            width={1515}
            height={502}
            priority
            className="h-12 w-auto object-contain sm:h-14 lg:h-16"
          />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 lg:flex xl:gap-10"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-black uppercase tracking-tight text-[#064118] transition duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-[#47a51f] after:transition-transform after:duration-300 hover:-translate-y-0.5 hover:text-[#2f7d15] hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteContent.contact.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group hidden items-center gap-2 rounded-full bg-[#47a51f] px-4 py-2 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3d8f1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9ed87a] focus-visible:ring-offset-4 sm:inline-flex"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5 transition duration-300 group-hover:rotate-12"
            fill="currentColor"
          >
            <path d="M12.04 2a9.88 9.88 0 0 0-8.5 14.93L2.4 21.1l4.28-1.12A9.87 9.87 0 1 0 12.04 2Zm0 1.8a8.07 8.07 0 1 1-4.1 15.02l-.3-.18-2.54.66.68-2.47-.2-.32A8.08 8.08 0 0 1 12.04 3.8Zm-3.45 3.95c-.17 0-.45.06-.68.31-.23.26-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.8 2.84 4.45 3.87 2.2.87 2.65.7 3.13.66.48-.04 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3-.26-.13-1.55-.77-1.79-.85-.24-.09-.42-.13-.59.13-.17.26-.68.85-.83 1.03-.15.17-.31.2-.57.06-.26-.13-1.1-.4-2.1-1.3-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.06-.13-.59-1.42-.8-1.94-.22-.5-.43-.43-.59-.44h-.5Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </header>
  );
}
