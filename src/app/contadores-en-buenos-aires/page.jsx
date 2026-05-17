import PageBuilder from "@/components/sections/PageBuilder";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contadores en Buenos Aires | Estudio Contable y Ahorro Impositivo",
  description: "Contadores en Buenos Aires para monotributo, impuestos y ARBA. Evitá deudas y pagá menos impuestos. Asesoramiento claro y rápido.",
  path: "/contadores-en-buenos-aires",
});

export default function Page() {
  return <PageBuilder page={pages.buenosAires} />;
}
