import SectionTitle from "@/components/ui/SectionTitle";

const staggerDelays = ["reveal-delay-2", "reveal-delay-3", "reveal-delay-4", "reveal-delay-5", "reveal-delay-6"];

export default function BulletsSection({ eyebrow, title, subtitle, bullets = [], closing }) {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-page max-w-3xl">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
        {bullets.length > 0 && (
          <ul className="mt-10 space-y-3">
            {bullets.map((b, i) => (
              <li key={b} className={`reveal ${staggerDelays[i % 5]} flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-lg text-slate-700 shadow-sm`}>
                <span className="mt-0.5 shrink-0 text-lg font-bold text-[var(--secondary)]">✔</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {closing && (
          <p className="reveal reveal-delay-6 mt-8 text-lg font-semibold text-[var(--primary)]">
            👉 {closing}
          </p>
        )}
      </div>
    </section>
  );
}
