"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/data/site";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [{ label: "Inicio", href: "#inicio" }, ...siteContent.nav];

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-emerald-100/80 bg-[#fbfdf8]/78 shadow-lg shadow-green-950/10 backdrop-blur-2xl">
      <div className="relative flex h-16 w-full items-center justify-between px-10 sm:h-18 sm:px-20 lg:h-20 lg:px-40">
        <a
          href="#inicio"
          aria-label={`${siteContent.companyName} - volver al inicio`}
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex shrink-0 items-center outline-none transition duration-300 hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-4"
        >
          <Image
            src="/logo-final-mavicca.png"
            alt={siteContent.companyName}
            width={1726}
            height={544}
            priority
            className="h-15 w-auto object-contain sm:h-17 lg:h-19"
          />
        </a>

        <nav
          aria-label="Navegacion principal"
          className="ml-auto hidden items-center gap-7 lg:flex xl:gap-10"
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

        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          className="ml-auto inline-flex size-11 items-center justify-center rounded-xl border border-emerald-100 bg-white/92 text-[#064118] shadow-sm shadow-green-950/10 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f] focus-visible:ring-offset-2 lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="size-5" strokeWidth={2.6} aria-hidden="true" />
          ) : (
            <Menu className="size-5" strokeWidth={2.6} aria-hidden="true" />
          )}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-emerald-100 bg-[#fbfdf8]/96 px-6 py-4 shadow-lg shadow-green-950/8 backdrop-blur-2xl lg:hidden"
        >
          <nav aria-label="Navegacion movil" className="mx-auto flex max-w-sm flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-black uppercase tracking-tight text-[#064118] transition hover:bg-emerald-50 hover:text-[#2f7d15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#47a51f]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
