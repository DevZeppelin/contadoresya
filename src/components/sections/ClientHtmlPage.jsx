import { getClientDocument } from "@/lib/clientContent";
import ClientInteractions from "./ClientInteractions";

export default function ClientHtmlPage({ route }) {
  const page = getClientDocument(route);
  if (!page) return null;

  return (
    <>
      {page.schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      ))}
      <style dangerouslySetInnerHTML={{ __html: page.styles }} />
      <style>{`
        /* Ajustes sobre el HTML del cliente: menú móvil, reveal y accesibilidad */
        .client-document .faq-a.open { max-height:500px; }
        .client-document .client-menu-toggle { display:none; }
        .client-document.client-reveal-ready [data-client-reveal] {
          opacity:0; transform:translateY(20px);
          transition:opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1);
        }
        .client-document.client-reveal-ready [data-client-reveal].client-reveal-in { opacity:1; transform:none; }
        @media (max-width:768px) {
          .client-document { width:100%; overflow-x:hidden; }
          .client-document .client-menu-toggle {
            width:42px; height:42px; padding:10px; display:flex; flex-direction:column;
            justify-content:center; gap:5px; flex:0 0 42px; border:0; border-radius:8px;
            color:#fff; background:rgba(255,255,255,.12); cursor:pointer;
          }
          .client-document .client-menu-toggle span { width:100%; height:2px; display:block; border-radius:2px; background:currentColor; transition:transform .2s, opacity .2s; }
          .client-document .nav.client-menu-open .client-menu-toggle span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
          .client-document .nav.client-menu-open .client-menu-toggle span:nth-child(2) { opacity:0; }
          .client-document .nav.client-menu-open .client-menu-toggle span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }
          .client-document .nav { position:sticky; }
          .client-document .nav.client-menu-open .nav-links {
            position:absolute; top:64px; left:0; right:0; z-index:400;
            display:flex; flex-direction:column; align-items:stretch; gap:2px;
            padding:10px 16px 18px; background:var(--primary,#0a1f3c);
            border-top:1px solid rgba(255,255,255,.12); box-shadow:0 14px 28px rgba(0,0,0,.3);
          }
          .client-document .nav.client-menu-open .nav-links a { display:block; padding:11px 12px; border-radius:8px; }
          .client-document .nav.client-menu-open .nav-links .nav-cta { margin-top:8px; text-align:center; }
        }
        @media (prefers-reduced-motion:reduce) {
          .client-document [data-client-reveal] { opacity:1!important; transform:none!important; transition:none!important; }
        }
      `}</style>
      <article className="client-document" dangerouslySetInnerHTML={{ __html: page.body }} />
      <ClientInteractions />
    </>
  );
}
