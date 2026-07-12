import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";
export const metadata = getClientMetadata("/servicios-liquidacion-de-sueldos");
export default function Page() { return <ClientHtmlPage route="/servicios-liquidacion-de-sueldos" />; }
