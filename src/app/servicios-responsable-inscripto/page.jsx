import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";
export const metadata = getClientMetadata("/servicios-responsable-inscripto");
export default function Page() { return <ClientHtmlPage route="/servicios-responsable-inscripto" />; }
