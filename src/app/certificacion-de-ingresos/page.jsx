import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";

export const metadata = getClientMetadata("/certificacion-de-ingresos");

export default function Page() {
  return <ClientHtmlPage route="/certificacion-de-ingresos" />;
}
