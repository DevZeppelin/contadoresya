import { siteConfig } from "@/lib/seo";

// Prioridades según el brief DevZeppelin (sección 2, sitemap)
const routes = [
  { path: "/", priority: 1.0 },
  { path: "/deudas-arca", priority: 0.9 },
  { path: "/monotributo", priority: 0.8 },
  { path: "/impuestos", priority: 0.8 },
  { path: "/sueldos", priority: 0.8 },
  { path: "/certificacion-de-ingresos", priority: 0.8 },
  { path: "/contadores-en-mendoza", priority: 0.7 },
  { path: "/estudio-contable", priority: 0.6 },
];

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: path === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
