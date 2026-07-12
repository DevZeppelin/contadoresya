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
        .client-document.client-reveal-ready [data-client-reveal] {
          opacity:0; transform:translateY(20px);
          transition:opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1);
        }
        .client-document.client-reveal-ready [data-client-reveal].client-reveal-in { opacity:1; transform:none; }
        @media (max-width:640px) {
          .client-document { width:100%; overflow-x:hidden; }
          .client-document header nav { width:100%; height:68px; padding-inline:16px; gap:10px; }
          .client-document header .nav-logo img { width:130px; height:auto; }
          .client-document header nav > div { margin-left:auto; }
          .client-document header nav > div .btn { padding:9px 12px!important; font-size:13px!important; }
          .client-document header nav > div .btn:last-child { display:none; }
          .client-document header nav > .btn { width:46px; min-width:46px; height:42px; padding:0!important; font-size:0!important; justify-content:center; }
          .client-document header nav > .btn svg { width:20px; height:20px; margin:0; }
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
