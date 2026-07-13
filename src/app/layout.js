import "./globals.css";
import FloatingWhatsapp from "@/components/layout/FloatingWhatsapp";
import { siteConfig } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Estudio Contable Online | Monotributo y Deuda ARCA | ContadoresYa",
  description: siteConfig.description,
  authors: [{ name: "Cr. Darío Vallinas" }],
  creator: "Cr. Darío Vallinas",
  publisher: "Cr. Darío Vallinas",
  openGraph: {
    title: "Estudio Contable Online | Monotributo y Deuda ARCA | ContadoresYa",
    description: siteConfig.description,
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    locale: "es_AR",
    type: "website",
    images: [{ url: "/images/hero00.png", width: 1536, height: 1024, alt: "Cr. Darío Vallinas" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body>
        <main>{children}</main>
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
