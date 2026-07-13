import { clientRoutes } from "@/lib/clientContent";
import { siteConfig } from "@/lib/seo";

// Páginas propias fuera del contenido del cliente (sin equivalente nuevo; las rutas duplicadas redirigen vía next.config)
const legacyRoutes = [
  "/estudio-contable",
  "/impuestos",
  "/deudas-arca",
  "/certificacion-de-ingresos",
  "/contadores-en-cordoba",
  "/contadores-en-buenos-aires",
];

export default function sitemap() {
  return [
    ...Object.keys(clientRoutes).map((route) => ({
      url: `${siteConfig.url}${route === "/" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: route === "/actualidad" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : route === "/contacto" ? 0.8 : 0.9,
    })),
    ...legacyRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
