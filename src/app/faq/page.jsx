import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Preguntas Frecuentes | Contador en Mendoza · Cr. Darío Vallinas", description: "Respuestas sobre monotributo, ingresos brutos, IVA, ganancias, sueldos y servicios contables en Mendoza.", path: "/faq" });
export default function Page() { return <ClientHtmlPage route="/faq" />; }
