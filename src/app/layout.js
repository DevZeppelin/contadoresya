import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsapp from "@/components/layout/FloatingWhatsapp";
import JsonLd from "@/components/seo/JsonLd";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ContadoresYa | Estudio Contable Online en Argentina",
    template: "%s | ContadoresYa",
  },
  description: siteConfig.description,
  keywords: [
    "contador en Mendoza",
    "estudio contable online",
    "monotributo Argentina",
    "deuda ARCA",
    "liquidación de sueldos",
    "certificación de ingresos",
  ],
  openGraph: {
    title: "ContadoresYa",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "ContadoresYa",
    locale: "es_AR",
    type: "website",
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
