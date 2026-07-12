import { siteConfig } from "@/lib/seo";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: `+${siteConfig.phoneIntl}`,
    email: siteConfig.email,
    image: `${siteConfig.url}/MODIFICACIONES/profile.png`,
    priceRange: "$$",
    areaServed: { "@type": "AdministrativeArea", name: "Provincia de Mendoza" },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      postalCode: siteConfig.postalCode,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.addressCountry,
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", ratingCount: "56", bestRating: "5" },
    founder: {
      "@type": "Person",
      name: "Darío Vallinas",
      jobTitle: "Contador Público",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
