import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";
export const metadata = getClientMetadata("/servicios-convenio-multilateral");
export default function Page() { return <ClientHtmlPage route="/servicios-convenio-multilateral" />; }
