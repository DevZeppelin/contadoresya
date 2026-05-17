import PageBuilder from "@/components/sections/PageBuilder";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Liquidación de Sueldos en Argentina: Delegá y evitá errores",
  description: "Liquidación de sueldos, cargas sociales y gestión de empleados. Delegá en un estudio contable y evitá errores, multas y pérdida de tiempo.",
  path: "/sueldos",
});

export default function Page() {
  return <PageBuilder page={pages.sueldos} />;
}
