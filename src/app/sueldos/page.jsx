import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";

export const metadata = getClientMetadata("/sueldos");

export default function Page() {
  return <ClientHtmlPage route="/sueldos" />;
}
