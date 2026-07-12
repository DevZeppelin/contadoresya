import Link from "next/link";
import { services, localPages } from "@/data/services";
import { siteConfig } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="site-shell bg-slate-950 text-white">
      <div className="container-page grid gap-10 px-8 md:px-16 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-black">Cr. Darío Vallinas</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">Contador Público Matriculado en Mendoza. Matrícula 9156 · C.P.C.E.M.D.Z.</p>
        </div>
        <div><h4 className="font-black">Servicios</h4>{services.map(s => <Link className="mt-3 block text-sm text-slate-300 hover:text-white" href={s.href} key={s.href}>{s.title}</Link>)}</div>
        <div><h4 className="font-black">Atención por zonas</h4>{localPages.map(s => <Link className="mt-3 block text-sm text-slate-300 hover:text-white" href={s.href} key={s.href}>{s.title}</Link>)}</div>
        <div>
          <h4 className="font-black">Contacto</h4>
          <p className="mt-3 text-sm text-slate-300">WhatsApp: {siteConfig.phone}</p>
          <p className="mt-2 text-sm text-slate-300">Email: {siteConfig.email}</p>
          <p className="mt-2 text-sm text-slate-300">Av. Bandera de los Andes 3170, Guaymallén, Mendoza · CP 5521</p>
          <p className="mt-2 text-sm text-slate-300">Lunes a Viernes de 9 a 18 hs.</p>
          <p className="mt-2 text-sm text-slate-300">Contador Público Darío Vallinas · Matrícula 9156 C.P.C.E.M.D.Z</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-400">© 2026 Cr. Darío Vallinas — Contador Público en Mendoza</div>
    </footer>
  );
}
