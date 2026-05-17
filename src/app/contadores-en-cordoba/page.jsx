import PageBuilder from "@/components/sections/PageBuilder";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contadores en Córdoba | Estudio Contable y Asesoramiento Impositivo",
  description: "Contadores en Córdoba para monotributo, impuestos, Ingresos Brutos y sueldos. Asesoramiento claro y rápido. Consultá ahora.",
  path: "/contadores-en-cordoba",
});

export default function Page() {
  return <PageBuilder page={pages.cordoba} />;
}
