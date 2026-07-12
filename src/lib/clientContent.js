import fs from "node:fs";
import path from "node:path";
import { pageMetadata } from "@/lib/seo";

const contentDir = path.join(process.cwd(), "public", "MODIFICACIONES");

export const clientRoutes = {
  "/": "contador-en-mendoza-NUEVA.html",
  "/servicios-monotributo": "servicios-monotributo.html",
  "/servicios-ingresos-brutos": "servicios-ingresos-brutos.html",
  "/servicios-convenio-multilateral": "servicios-convenio-multilateral.html",
  "/servicios-responsable-inscripto": "servicios-responsable-inscripto.html",
  "/servicios-contables-pymes": "servicios-contables-pymes.html",
  "/servicios-liquidacion-de-sueldos": "servicios-liquidacion-de-sueldos.html",
  "/actualidad": "actualidad.html",
  "/faq": "faq.html",
  "/contacto": "contacto.html",
};

function match(source, expression) {
  return source.match(expression)?.[1]?.trim() || "";
}

const socialIcons = {
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 8.25H3V21h3.5V8.25ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.7c0-3.84-2.05-5.63-4.79-5.63-2.2 0-3.19 1.22-3.74 2.07V8.25H9V21h3.47v-6.32c0-1.67.32-3.3 2.4-3.3 2.05 0 2.08 1.92 2.08 3.41V21H21v-7.3Z"/></svg>',
};

function replaceSocialLinks(html) {
  return html.replace(/<a([^>]*href=["'][^"']*(facebook|instagram|linkedin)[^"']*["'][^>]*)>[\s\S]*?<\/a>/gi, (_, attrs, network) => {
    const name = network.toLowerCase();
    return `<a${attrs} aria-label="${name[0].toUpperCase() + name.slice(1)}" title="${name[0].toUpperCase() + name.slice(1)}">${socialIcons[name]}</a>`;
  });
}

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
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<a[^>]*class=["'][^"']*wa-fab[^"']*["'][\s\S]*?<\/a>/gi, "")
    .replace(/<a[^>]*class=["'][^"']*wa-float[^"']*["'][\s\S]*?<\/a>/gi, "")
    .replace(/<div class=["']hero-card-avatar["']>[^<]*<\/div>/i, '<img class="profile-photo" src="/MODIFICACIONES/profile.png" alt="Cr. Darío Vallinas, contador público matriculado en Mendoza" width="180" height="180">')
    .replace(/<div class=["']perfil-avatar["']>[^<]*<\/div>/i, '<img class="perfil-avatar perfil-photo" src="/MODIFICACIONES/profile.png" alt="Cr. Darío Vallinas, Contador Público matriculado" width="96" height="96">')
    .replace(/<a href=["'](?:\/servicios|#)["']>Servicios\s*▾<\/a>/gi, '<a href="#" data-client-submenu aria-expanded="false">Servicios <span aria-hidden="true">▾</span></a>')
    .replace(/<\/nav>\s*<\/header>/i, '<button class="client-menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button></nav></header>')
    .replace(/class="(service-card|ventaja-item|testi-card|contact-card|article-card|reforma-card)/g, 'data-client-reveal class="$1')
    .replace(/href="https:\/\/www\.contador-en-mendoza\.com\.ar"/g, 'href="/"');

  body = replaceSocialLinks(body);

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
