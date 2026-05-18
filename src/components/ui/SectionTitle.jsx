export default function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="reveal mb-3 text-sm font-black uppercase tracking-[0.22em] text-cyan-600">{eyebrow}</p>}
      <h2 className="reveal reveal-delay-1 text-3xl font-black leading-tight text-slate-950 md:text-5xl">{title}</h2>
      {subtitle && <p className="reveal reveal-delay-2 mt-5 text-lg leading-8 text-slate-600">{subtitle}</p>}
    </div>
  );
}
