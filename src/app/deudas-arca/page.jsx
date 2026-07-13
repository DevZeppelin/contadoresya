import ClientHtmlPage from "@/components/sections/ClientHtmlPage";
import { getClientMetadata } from "@/lib/clientContent";

export const metadata = getClientMetadata("/deudas-arca");

export default function Page() {
  return <ClientHtmlPage route="/deudas-arca" />;
}
