import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";

export const metadata = getClientMetadata("/contadores-en-mendoza");

export default function Page() {
  return <ClientHtmlPage route="/contadores-en-mendoza" />;
}
