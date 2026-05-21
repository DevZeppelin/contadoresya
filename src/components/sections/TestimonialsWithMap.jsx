import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsWithMap({
  title = "Clientes que ya resolvieron su situación",
}) {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle
          eyebrow="Testimonios"
          title={title}
          subtitle="Personas y empresas que confiaron en nuestro estudio contable."
          center
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <article key={t.name} className="card-soft rounded-3xl p-6">
                <div className="text-amber-400">★★★★★</div>
                <p className="mt-4 leading-7 text-slate-700">“{t.text}”</p>
                <div className="mt-5">
                  <b>{t.name}</b>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-xl">
            <div className="p-6">
              <h3 className="text-2xl font-black">Atención online y local!</h3>
            </div>
            <iframe
              title="Mapa ContadoresYa"
              className="h-[360px] w-full"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51972.41707475925!2d-68.87755428365512!3d-32.93626331822688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0f599d68a881%3A0xaed5485348801e73!2sContador%20P%C3%BAblico%20Matriculado%20en%20Mendoza%20-%20Dario%20Vallinas!5e1!3m2!1ses-419!2sar!4v1778719544088!5m2!1ses-419!2sar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
