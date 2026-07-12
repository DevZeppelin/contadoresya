import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsapp from "@/components/layout/FloatingWhatsapp";
import JsonLd from "@/components/seo/JsonLd";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Contador en Mendoza | Cr. Darío Vallinas · C.P.C.E.M.D.Z.",
  description: siteConfig.description,
  authors: [{ name: "Cr. Darío Vallinas" }],
  creator: "Cr. Darío Vallinas",
  publisher: "Cr. Darío Vallinas",
  keywords: [
    "contador en Mendoza",
    "estudio contable online",
    "monotributo Argentina",
    "deuda ARCA",
    "liquidación de sueldos",
    "certificación de ingresos",
  ],
  openGraph: {
    title: "Cr. Darío Vallinas · Contador en Mendoza",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_AR",
    type: "website",
    images: [{ url: "/MODIFICACIONES/profile.png", width: 1024, height: 1024, alt: "Cr. Darío Vallinas" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsapp />
        <ScrollReveal />
      </body>
    </html>
  );
}
