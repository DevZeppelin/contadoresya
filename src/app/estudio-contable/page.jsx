import PageBuilder from "@/components/sections/PageBuilder";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Estudio Contable en Argentina | ContadoresYa",
  description: "Estudio contable online en Argentina. Atención personalizada para monotributistas, responsables inscriptos y empresas. Consultá ahora.",
  path: "/estudio-contable",
});

export default function Page() {
  return <PageBuilder page={pages.estudio} />;
}
