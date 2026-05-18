import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";

export default function Hero({
  title,
  subtitle,
  bullets = [],
  primary = "Hablar por WhatsApp",
  secondary = "Consultar ahora",
}) {
  return (
    <section className="relative overflow-hidden bg-[slate-950] text-white">
      {/* Imagen de fondo */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-[65%_top]
          sm:bg-[60%_top]
          md:bg-[58%_top]
          lg:bg-[center_top]
          xl:bg-[center_20%]
        "
        style={{
          backgroundImage: "url('/images/hero00.png')",
        }}
      />

      {/* Overlay desktop: oscuro izquierda, más claro derecha */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-slate-950/35
          via-slate-950/65
          to-slate-950
          md:bg-gradient-to-r
          md:from-[var(--primary)]
          md:via-[var(--primary)/75]
          md:to-slate-950/10
        "
      />

      {/* Refuerzo de lectura en mobile */}
      <div className="absolute inset-0 bg-slate-950/30 md:hidden" />

      <div
        className="
          container-page
          relative
          z-10
          flex
          min-h-[760px]
          items-end
          px-6
          pb-16
          pt-80
          sm:pt-96
          md:min-h-[700px]
          md:items-center
          md:px-16
          md:py-24
          lg:min-h-[720px]
        "
      >
        <div className="max-w-3xl">
          <p className="fade-up mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-50 shadow-lg backdrop-blur-md">
            Atención online en toda Argentina
          </p>

          <h1 className="fade-up fade-up-delay-1 text-4xl font-black leading-tight text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.85)] md:text-6xl">
            {title}
          </h1>

          <p className="fade-up fade-up-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-100 drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)] md:text-xl">
            {subtitle}
          </p>

          <div className="fade-up fade-up-delay-3 mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-colors hover:bg-slate-950/55"
              >
                <span className="mt-0.5 text-[var(--secondary)]">✔</span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="fade-up fade-up-delay-4 mt-10 flex flex-wrap gap-4">
            <PrimaryButton>{primary}</PrimaryButton>
            <SecondaryButton>{secondary}</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
