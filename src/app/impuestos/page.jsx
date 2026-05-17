import PageBuilder from "@/components/sections/PageBuilder";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Impuestos en Argentina: Te ayudamos a ordenar tu situación fiscal",
  description: "¿No sabés qué impuestos te corresponden? Te ayudamos a ordenar tu situación fiscal, evitar errores y optimizar tu carga impositiva.",
  path: "/impuestos",
});

export default function Page() {
  return <PageBuilder page={pages.impuestos} />;
}
