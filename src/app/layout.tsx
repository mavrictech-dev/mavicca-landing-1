import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@fontsource-variable/onest/wght.css";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mavicca",
  description:
    "Servicios de consultoría y asesoría en gestión ambiental, monitoreos, residuos, reportes y soluciones integrales para empresas.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
