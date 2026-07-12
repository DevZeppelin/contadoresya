import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";
export const metadata = getClientMetadata("/contacto");
export default function Page() { return <ClientHtmlPage route="/contacto" />; }
