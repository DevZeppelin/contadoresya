import PageBuilder from "@/components/sections/PageBuilder";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contadores en Mendoza | Estudio Contable Online y Asesoramiento",
  description: "Contadores en Mendoza para monotributo, impuestos, sueldos y certificaciones. Asesoramiento claro y rápido. Consultá ahora.",
  path: "/contadores-en-mendoza",
});

export default function Page() {
  return <PageBuilder page={pages.mendoza} />;
}
