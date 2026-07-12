import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";

export const metadata = getClientMetadata("/");

export default function HomePage() {
  return <ClientHtmlPage route="/" />;
}
