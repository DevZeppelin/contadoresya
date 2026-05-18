import SectionTitle from "@/components/ui/SectionTitle";

const staggerDelays = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4", "reveal-delay-5"];

export default function InfoCards({ eyebrow, title, subtitle, items = [] }) {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} center />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <article key={item.title} className={`reveal ${staggerDelays[i % 6]} group card-soft rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)]/30`}>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-100 to-teal-50 text-xl ring-1 ring-cyan-200/60 transition-all duration-300 group-hover:from-cyan-200 group-hover:to-teal-100">
                {item.icon || "✔"}
              </div>
              <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
