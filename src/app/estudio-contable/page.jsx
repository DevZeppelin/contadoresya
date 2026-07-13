import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";

export const metadata = getClientMetadata("/estudio-contable");

export default function Page() {
  return <ClientHtmlPage route="/estudio-contable" />;
}
