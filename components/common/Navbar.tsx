"use client";

import Link from "next/link";
import { useState } from "react";

type NavbarVariant = "guest" | "user" | "admin";

const menus: Record<NavbarVariant, { href: string; label: string }[]> = {
  guest: [
    { href: "/seniman", label: "Seniman" },
    { href: "/galeri", label: "Galeri" },
    { href: "/event", label: "Event" },
    { href: "/about", label: "Tentang Artiva" },
  ],
  user: [
    { href: "/user/seniman", label: "Seniman" },
    { href: "/user/galeri", label: "Galeri" },
    { href: "/user/event", label: "Event" },
    { href: "/user/shop", label: "Belanja" },
  ],
  admin: [
    { href: "/admin/galeri", label: "Galeri" },
    { href: "/admin/seniman", label: "Seniman" },
    { href: "/admin/shop", label: "Shop" },
    { href: "/admin/event", label: "Event" },
  ],
};

export default function Navbar({
  variant = "guest",
}: {
  variant?: NavbarVariant;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <Link className="logo" href={variant === "guest" ? "/" : `/${variant}`}>
        Artiva.
      </Link>
      <div
        className="hamburger"
        onClick={() => setOpen((v) => !v)}
        aria-label="Buka menu navigasi"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") setOpen((v) => !v);
        }}
      >
        &#9776;
      </div>
      <div className={`menu${open ? " active" : ""}`}>
        {menus[variant].map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <div className="auth">
          {variant === "guest" ? (
            <>
              <Link href="/register" className="daftar">
                Daftar Akun
              </Link>
              <Link href="/login" className="masuk">
                Masuk
              </Link>
            </>
          ) : (
            <Link href="/" className="masuk">
              Keluar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
