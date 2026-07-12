import { clientRoutes } from "@/lib/clientContent";
import { siteConfig } from "@/lib/seo";

export default function sitemap() {
  return Object.keys(clientRoutes).map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/actualidad" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/contacto" ? 0.8 : 0.9,
  }));
}
