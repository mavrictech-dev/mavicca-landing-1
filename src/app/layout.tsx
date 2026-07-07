import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@fontsource-variable/onest/wght.css";
import "./globals.css";
import { siteContent } from "@/data/site";

const siteUrl = "https://mavicca.com";
const seoDescription =
  "Consultoría y gestión ambiental en Perú: monitoreos, residuos, SIGERSOL, IGA, cumplimiento normativo, permisos y capacitación especializada.";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteContent.companyName,
  title: {
    default: "Mavicca | Consultoría y gestión ambiental",
    template: "%s | Mavicca",
  },
  description: seoDescription,
  keywords: [
    "consultoría ambiental",
    "gestión ambiental",
    "monitoreo ambiental",
    "SIGERSOL",
    "residuos sólidos",
    "cumplimiento normativo ambiental",
    "instrumentos de gestión ambiental",
    "Mavicca",
    "Piura",
    "Perú",
  ],
  authors: [{ name: siteContent.companyName }],
  creator: siteContent.companyName,
  publisher: siteContent.companyName,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName: siteContent.companyName,
    title: "Mavicca | Consultoría y gestión ambiental",
    description: seoDescription,
    images: [
      {
        url: "/bg-hero.png",
        width: 1200,
        height: 630,
        alt: "Mavicca - soluciones ambientales integrales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavicca | Consultoría y gestión ambiental",
    description: seoDescription,
    images: ["/bg-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mavicca",
  url: siteUrl,
  logo: `${siteUrl}/logo-final-mavicca.png`,
  email: siteContent.contact.email,
  telephone: siteContent.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteContent.contact.address,
    addressCountry: "PE",
  },
  sameAs: [
    "https://www.facebook.com/share/1LfRwjLEVX/",
    "https://www.instagram.com/mavicca29",
    "https://www.linkedin.com/in/mavicca-consultores-ambientales-s-a-c-s-12b2b734a/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteContent.contact.phone,
    contactType: "customer service",
    areaServed: "PE",
    availableLanguage: ["es"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
