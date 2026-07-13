import fs from "node:fs";
import path from "node:path";
import { pageMetadata } from "@/lib/seo";

const contentDir = path.join(process.cwd(), "src", "content", "client-pages");

// Las 8 páginas del brief DevZeppelin (jul-2026). Cada HTML es autocontenido (CSS inline + schema).
export const clientRoutes = {
  "/": "home.html",
  "/deudas-arca": "deudas-arca.html",
  "/monotributo": "monotributo.html",
  "/impuestos": "impuestos.html",
  "/sueldos": "sueldos.html",
  "/certificacion-de-ingresos": "certificacion-de-ingresos.html",
  "/contadores-en-mendoza": "contadores-en-mendoza.html",
  "/estudio-contable": "estudio-contable.html",
};

function match(source, expression) {
  return source.match(expression)?.[1]?.trim() || "";
}

// Bloques que entran con la animación de scroll-reveal
const revealClasses = [
  "benefit-card", "service-card", "impuesto-card", "info-card", "problem-card",
  "programa-card", "situation-item", "step-item", "testi-card", "uso-card",
  "valor-card", "web-card", "faq-item", "dato-item", "alert-box",
].join("|");

export function getClientDocument(route) {
  const filename = clientRoutes[route];
  if (!filename) return null;
  const source = fs.readFileSync(path.join(contentDir, filename), "utf8");
  const title = match(source, /<title>([\s\S]*?)<\/title>/i);
  const description = match(source, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const canonical = match(source, /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  const schemas = [...source.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)]
    .map((item) => item[1].trim());
  const styles = [...source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
    .map((item) => item[1])
    .join("\n");

  let body = match(source, /<body[^>]*>([\s\S]*?)<\/body>/i);
  body = body
    .replace(/<script(?![^>]*application\/ld\+json)[\s\S]*?<\/script>/gi, "")
    .replace(/\s*onclick=["'][^"']*["']/gi, "")
    .replace(new RegExp(`class="(${revealClasses})`, "g"), 'data-client-reveal class="$1')
    .replace(/<div class="nav-mobile">/i, '<div class="nav-mobile"><button class="client-menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button>');

  return { title, description, canonical, schemas, styles, body };
}

export function getClientMetadata(route) {
  const document = getClientDocument(route);
  return pageMetadata({
    title: document.title,
    description: document.description,
    path: route,
  });
}
