export const siteConfig = {
  name: "Cr. Darío Vallinas · Contador en Mendoza",
  url: "https://www.contador-en-mendoza.com.ar",
  description:
    "Estudio contable online en Argentina especializado en monotributo, impuestos, ARCA, sueldos y certificaciones.",
  phone: "2615740182",
  phoneIntl: "542615740182",
  email: "cpnvallinas@gmail.com",
  whatsapp: "https://wa.me/542615740182",
  address: "Av. Bandera de los Andes 3170",
  postalCode: "5521",
  addressLocality: "Guaymallén",
  addressRegion: "Mendoza",
  addressCountry: "AR",
};

export function pageMetadata({ title, description, path = "/" }) {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "es_AR",
      type: "website",
      images: [{ url: "/images/hero00.png", width: 1536, height: 1024, alt: "Cr. Darío Vallinas, Contador Público en Mendoza" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero00.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}
