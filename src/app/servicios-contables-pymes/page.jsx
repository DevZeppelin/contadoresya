import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";
export const metadata = getClientMetadata("/servicios-contables-pymes");
export default function Page() { return <ClientHtmlPage route="/servicios-contables-pymes" />; }
