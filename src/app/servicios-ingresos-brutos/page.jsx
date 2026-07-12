import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";
export const metadata = getClientMetadata("/servicios-ingresos-brutos");
export default function Page() { return <ClientHtmlPage route="/servicios-ingresos-brutos" />; }
