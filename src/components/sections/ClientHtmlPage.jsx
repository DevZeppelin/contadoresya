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
        body:has(.client-document) > .site-shell { display:none !important; }
        body:has(.client-document) > main { display:block; }
        .client-document .social-link,
        .client-document .perfil-redes a,
        .client-document .topbar-right a[href*="facebook"],
        .client-document .topbar-right a[href*="instagram"],
        .client-document .topbar-right a[href*="linkedin"] {
          display:inline-flex; align-items:center; justify-content:center;
        }
        .client-document a[href*="facebook"] svg,
        .client-document a[href*="instagram"] svg,
        .client-document a[href*="linkedin"] svg { width:20px; height:20px; flex:none; }
        .client-document .perfil-redes a { width:38px; height:38px; }
        .client-document .profile-photo { width:160px; height:160px; margin:0 auto 16px; border-radius:50%; object-fit:cover; object-position:center top; display:block; }
        .client-document .perfil-photo { object-fit:cover; object-position:center top; padding:0; }
        .client-document .client-menu-toggle { display:none; }
        .client-document.client-reveal-ready [data-client-reveal] {
          opacity:0; transform:translateY(20px);
          transition:opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1);
        }
        .client-document.client-reveal-ready [data-client-reveal].client-reveal-in { opacity:1; transform:none; }
        @media (max-width:900px) {
          .client-document { width:100%; overflow-x:hidden; }
          .client-document header nav { width:100%; height:68px; padding-inline:16px; gap:10px; }
          .client-document header .nav-logo img { width:130px; height:auto; }
          .client-document header nav > div,
          .client-document header nav > .btn { display:none!important; }
          .client-document .client-menu-toggle { width:44px; height:44px; margin-left:auto; padding:10px; display:flex; flex-direction:column; justify-content:center; gap:5px; flex:0 0 44px; border:0; border-radius:8px; color:var(--primary); background:var(--bg-light); cursor:pointer; }
          .client-document .client-menu-toggle span { width:100%; height:2px; display:block; border-radius:2px; background:currentColor; transition:transform .2s, opacity .2s; }
          .client-document header.client-menu-open .client-menu-toggle span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
          .client-document header.client-menu-open .client-menu-toggle span:nth-child(2) { opacity:0; }
          .client-document header.client-menu-open .client-menu-toggle span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }
          .client-document header .nav-links { position:absolute; top:68px; left:0; right:0; z-index:400; margin:0; padding:10px 16px 18px; display:none; flex-direction:column; gap:4px; border-top:1px solid var(--border); background:#fff; box-shadow:0 14px 28px rgba(0,0,0,.12); }
          .client-document header.client-menu-open .nav-links { display:flex; }
          .client-document header .nav-links li,.client-document header .nav-links a { width:100%; }
          .client-document header .nav-links a { display:block; padding:11px 12px; }
          .client-document header .nav-dropdown-menu { position:static; min-width:0; padding:4px 0 4px 12px; display:block; border:0; box-shadow:none; }
          .client-document .quick-nav { display:none; }
          .client-document .topbar { display:none; }
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
