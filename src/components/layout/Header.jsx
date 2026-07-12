"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { services, localPages } from "@/data/services";
import { siteConfig } from "@/lib/seo";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { title: "Inicio", href: "/" },
    { title: "Estudio Contable", href: "/estudio-contable" },
    { title: "Actualidad", href: "/actualidad" },
    { title: "Preguntas frecuentes", href: "/faq" },
    { title: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="site-shell sticky top-0 z-40 border-b border-[var(--border)] bg-white/90 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between px-6 md:px-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/MODIFICACIONES/profile.png"
            alt="Cr. Darío Vallinas"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <span className="leading-tight">
            <b className="block text-xl text-[var(--primary)]">
              Cr. Darío Vallinas
            </b>
            <small className="text-[var(--text-soft)]">
              Contador Público · Mat. 9156
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-bold text-[var(--text)] xl:flex">
          <Link className="transition hover:text-[var(--primary)]" href="/">
            Inicio
          </Link>

          {/* Servicios */}
          <div className="group relative py-7">
            <button className="flex items-center gap-1 font-bold transition hover:text-[var(--primary)]">
              Servicios
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 rounded-3xl border border-[var(--border)] bg-white p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block rounded-2xl p-4 transition hover:bg-[var(--primary-soft)]"
                >
                  <b className="text-[var(--text)]">{s.title}</b>
                  <span className="mt-1 block text-xs font-medium text-[var(--text-soft)]">
                    {s.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            className="transition hover:text-[var(--primary)]"
            href="/estudio-contable"
          >
            Estudio Contable
          </Link>

          <Link className="transition hover:text-[var(--primary)]" href="/actualidad">Actualidad</Link>
          <Link className="transition hover:text-[var(--primary)]" href="/faq">Preguntas frecuentes</Link>

          {/* Atención por zonas */}
          <div className="group relative py-7">
            <button className="flex items-center gap-1 font-bold transition hover:text-[var(--primary)]">
              Atención por zonas
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 rounded-3xl border border-[var(--border)] bg-white p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
              {localPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block rounded-2xl p-4 transition hover:bg-[var(--primary-soft)]"
                >
                  <b className="text-[var(--text)]">{p.title}</b>
                  <span className="mt-1 block text-xs font-medium text-[var(--text-soft)]">
                    Atención online para tu provincia
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            className="rounded-full bg-[var(--primary)] px-5 py-3 text-white shadow-lg transition hover:bg-[var(--primary-dark)]"
          >
            Consultá con el Contador
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-[var(--primary)] xl:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[var(--border)] bg-white p-5 xl:hidden">
          {links.map((l) => (
            <Link
              onClick={() => setOpen(false)}
              key={l.href}
              href={l.href}
              className="block rounded-xl px-4 py-3 font-bold text-[var(--text)] hover:bg-[var(--primary-soft)]"
            >
              {l.title}
            </Link>
          ))}

          <p className="mt-4 px-4 text-xs font-black uppercase tracking-wide text-[var(--primary)]">
            Servicios
          </p>

          {services.map((l) => (
            <Link
              onClick={() => setOpen(false)}
              key={l.href}
              href={l.href}
              className="block rounded-xl px-4 py-3 font-bold text-[var(--text)] hover:bg-[var(--primary-soft)]"
            >
              {l.title}
            </Link>
          ))}

          <p className="mt-4 px-4 text-xs font-black uppercase tracking-wide text-[var(--primary)]">
            Atención por zonas
          </p>

          {localPages.map((l) => (
            <Link
              onClick={() => setOpen(false)}
              key={l.href}
              href={l.href}
              className="block rounded-xl px-4 py-3 font-bold text-[var(--text)] hover:bg-[var(--primary-soft)]"
            >
              {l.title}
            </Link>
          ))}

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            className="mt-4 block rounded-full bg-[var(--primary)] px-4 py-3 text-center font-bold text-white"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
