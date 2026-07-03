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
    <div className="min-h-screen bg-[#fbfdf8] text-[#064118]">
      <Header />
      <AmbientFallingLeaves />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <footer className="relative isolate overflow-hidden border-t border-[#47a51f]/25 bg-[#061f35] px-6 py-7 text-center text-sm text-emerald-50/86 lg:px-8 lg:text-lg">
        <FooterOrganicPattern />
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <p>© 2026 Mavicca. Todos los derechos reservados.</p>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}
