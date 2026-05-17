import SectionTitle from "@/components/ui/SectionTitle";

export default function BulletsSection({ eyebrow, title, subtitle, bullets = [], closing }) {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-page max-w-3xl">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
        {bullets.length > 0 && (
          <ul className="mt-10 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-lg text-slate-700">
                <span className="mt-0.5 shrink-0 font-bold text-[var(--secondary)]">✔</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {closing && (
          <p className="mt-8 text-lg font-semibold text-[var(--primary)]">
            👉 {closing}
          </p>
        )}
      </div>
    </section>
  );
}
