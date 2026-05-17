import PageBuilder from "@/components/sections/PageBuilder";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Monotributo Argentina: Exclusión, Deuda y Categorización | Estudio Contable",
  description: "¿Problemas con el monotributo? Exclusión, deudas o mala categorización. Estudio contable online en Argentina. Resolvé tu situación hoy.",
  path: "/monotributo",
});

export default function Page() {
  return <PageBuilder page={pages.monotributo} />;
}
