import { AmbientFallingLeaves } from "@/components/ambient-falling-leaves";
import { FooterOrganicPattern } from "@/components/footer-organic-pattern";
import { SocialLinks } from "@/components/social-links";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfff7] text-emerald-950">
      <Header />
      <AmbientFallingLeaves />
      <main className="pt-16 sm:pt-18 lg:pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <footer className="relative isolate overflow-hidden border-t border-emerald-100 bg-[#062b57] px-6 py-6 text-center text-sm text-emerald-100/70 lg:px-8 lg:text-lg">
        <FooterOrganicPattern />
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <p>© 2026 Mavicca. Todos los derechos reservados.</p>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}
