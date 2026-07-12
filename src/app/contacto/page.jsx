import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Contacto | Contador en Mendoza · Cr. Darío Vallinas", description: "Contactá al Cr. Darío Vallinas, contador público matriculado en Mendoza. Atención presencial y online.", path: "/contacto" });
export default function Page() { return <ClientHtmlPage route="/contacto" />; }
