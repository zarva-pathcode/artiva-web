"use client";

import Link from "next/link";
import { useState } from "react";
import { landingNav } from "@/lib/landing-data";

// Navbar sesuai Artiva-Design.png:
// justify-between dengan 3 anak (logo | nav | auth) — karena grup auth lebih
// lebar dari logo, nav link otomatis terdorong ke kiri ~104px, sama seperti desain.
export default function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-[60px]">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-brand text-[32px] font-medium leading-none tracking-tight text-ink"
          >
            Artiva.
          </Link>

          {/* Nav link — disembunyikan di mobile, tengah di desktop */}
          <nav className="hidden items-center gap-12 md:flex">
            {landingNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-ink transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth — disembunyikan di mobile (ada di drawer) */}
          <div className="hidden items-center gap-10 md:flex">
            <Link
              href="/register"
              className="text-base font-medium text-ink transition-colors hover:text-brand"
            >
              Daftar
            </Link>
            <Link
              href="/login"
              className="inline-flex h-[38px] items-center rounded-full bg-brand px-9 text-base font-medium text-cream transition-colors hover:bg-brand-soft"
            >
              Masuk
            </Link>
          </div>

          {/* Hamburger — hanya mobile */}
          <button
            type="button"
            aria-label="Buka menu navigasi"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 text-ink select-none md:hidden"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>

        {/* Drawer mobile */}
        <div
          className={`absolute inset-x-0 top-full z-40 flex-col gap-6 border-b border-ink/10 bg-cream px-6 pb-8 pt-2 md:hidden ${
            open ? "flex" : "hidden"
          }`}
        >
          {landingNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-col gap-4 border-t border-ink/10 pt-6">
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink transition-colors hover:text-brand"
            >
              Daftar
            </Link>
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="inline-flex h-[38px] w-fit items-center rounded-full bg-brand px-9 text-base font-medium text-cream transition-colors hover:bg-brand-soft"
            >
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
