import { getClientDocument } from "@/lib/clientContent";
import ClientInteractions from "./ClientInteractions";
import JsonLd from "@/components/seo/JsonLd";

export default function ClientHtmlPage({ route }) {
  const page = getClientDocument(route);
  if (!page) return null;

  return (
    <>
      {page.schemas.length === 0 && <JsonLd />}
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
        .client-document .profile-photo { width:160px; height:160px; margin:0 auto 16px; border-radius:50%; object-fit:cover; object-position:72% center; display:block; }
        .client-document .perfil-photo { object-fit:cover; object-position:72% center; padding:0; }
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
          .client-document header .nav-dropdown-menu,
          .client-document header .nav-dropdown:hover .nav-dropdown-menu { position:static; min-width:0; padding:4px 0 4px 12px; display:none!important; border:0; box-shadow:none; }
          .client-document header .nav-dropdown.client-submenu-open .nav-dropdown-menu,
          .client-document header .nav-dropdown.client-submenu-open:hover .nav-dropdown-menu { display:block!important; }
          .client-document .quick-nav { display:none; }
          .client-document .topbar { display:none; }
        }
        @media (max-width:640px) {
          .client-document .content-wrap,.client-document .main-col,.client-document .sidebar,
          .client-document .service-cards,.client-document .cct-grid,.client-document .impuesto-grid,
          .client-document .reforma-grid,.client-document .contact-inner,.client-document .faq-wrap {
            min-width:0; max-width:100%;
          }
          .client-document .service-cards,.client-document .cct-grid,
          .client-document .impuesto-grid,.client-document .reforma-grid {
            grid-template-columns:minmax(0,1fr)!important;
          }
          .client-document .service-card,.client-document .cct-item,.client-document .impuesto-item,
          .client-document .reforma-card,.client-document .sidebar-card { min-width:0; overflow-wrap:anywhere; }
          .client-document .btn { max-width:100%; white-space:normal; text-align:center; justify-content:center; }
          .client-document .page-hero-ctas,.client-document .cta-btns,.client-document .reforma-cta > div { width:100%; flex-direction:column; }
          .client-document .page-hero-ctas .btn,.client-document .cta-btns .btn,.client-document .reforma-cta .btn { width:100%; }
          .client-document .tbl-wrap { max-width:100%; overflow-x:auto; }
          .client-document table { min-width:520px; }

          /* Portada móvil: composición editorial independiente del desktop */
          .client-document #inicio { position:relative; isolation:isolate; padding:72px 18px 44px; background:
            radial-gradient(circle at 88% 16%,rgba(59,130,246,.34),transparent 27%),
            radial-gradient(circle at 12% 78%,rgba(37,211,102,.12),transparent 30%),
            linear-gradient(155deg,#071a33 0%,#0d315e 58%,#10284b 100%); }
          .client-document #inicio::before { content:""; position:absolute; inset:18px 14px auto auto; z-index:-1; width:150px; height:150px; border:1px solid rgba(255,255,255,.08); border-radius:50%; box-shadow:0 0 0 34px rgba(255,255,255,.025); }
          .client-document #inicio .hero-inner { position:relative; display:block; }
          .client-document #inicio .hero-pill { width:calc(100% - 82px); min-height:54px; margin:0 0 28px; padding:10px 14px; display:flex; align-items:center; flex-wrap:wrap; border-color:rgba(255,255,255,.18); border-radius:16px; background:rgba(255,255,255,.08); box-shadow:0 12px 34px rgba(0,0,0,.16); backdrop-filter:blur(12px); font-size:12px; }
          .client-document #inicio h1 { max-width:310px; margin:0; font-size:clamp(35px,10.5vw,44px); line-height:1.02; letter-spacing:-1.5px; }
          .client-document #inicio .hero-sub { margin:22px 0; font-size:16px; line-height:1.7; color:rgba(255,255,255,.78); }
          .client-document #inicio .hero-checks { display:grid; gap:9px; margin:24px 0 28px; }
          .client-document #inicio .hero-checks li { margin:0; padding:11px 12px 11px 38px; border:1px solid rgba(255,255,255,.09); border-radius:12px; background:rgba(255,255,255,.055); font-size:13px; line-height:1.45; }
          .client-document #inicio .hero-checks li::before { left:13px; top:11px; }
          .client-document #inicio .hero-ctas { display:grid; grid-template-columns:1fr; gap:10px; }
          .client-document #inicio .hero-ctas .btn { width:100%; min-height:50px; border-radius:12px; }
          .client-document #inicio .hero-meta { margin-top:18px; padding-top:16px; display:flex; gap:5px 12px; border-top:1px solid rgba(255,255,255,.12); font-size:11px; }
          .client-document #inicio .hero-card { position:absolute; top:0; right:0; width:66px; height:66px; padding:0; display:block; overflow:hidden; border:2px solid rgba(255,255,255,.8); border-radius:50%; background:#fff; box-shadow:0 12px 30px rgba(0,0,0,.28); }
          .client-document #inicio .hero-card > *:not(.profile-photo) { display:none; }
          .client-document #inicio .hero-card .profile-photo { width:100%; height:100%; margin:0; border:0; border-radius:50%; }
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
