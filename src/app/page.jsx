import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contador en Mendoza | Cr. Darío Vallinas · C.P.C.E.M.D.Z.",
  description: "Contador público matriculado en Mendoza. Servicios contables e impositivos para monotributistas, responsables inscriptos, PYMES y empresas. Matrícula 9156.",
  path: "/",
});

export default function HomePage() {
  return <ClientHtmlPage route="/" />;
}
