import PageBuilder from "@/components/sections/PageBuilder";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Deudas ARCA: Regularizá tu situación y evitá problemas | Estudio Contable",
  description: "¿Tenés deuda en ARCA? Planes de pago, intimaciones y regularización. Analizamos tu caso y te damos una solución clara.",
  path: "/deudas-arca",
});

export default function Page() {
  return <PageBuilder page={pages.deudasArca} />;
}
