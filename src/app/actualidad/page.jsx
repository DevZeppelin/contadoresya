import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Actualidad Impositiva Mendoza | Novedades ARCA y ATM", description: "Novedades normativas, cambios en ARCA y ATM y orientación impositiva para contribuyentes de Mendoza.", path: "/actualidad" });
export default function Page() { return <ClientHtmlPage route="/actualidad" />; }
