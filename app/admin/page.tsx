import Link from "next/link";
import Navbar from "@/components/common/Navbar";

const cards = [
  { href: "/admin/galeri", label: "Kelola Galeri" },
  { href: "/admin/seniman", label: "Kelola Seniman" },
  { href: "/admin/shop", label: "Kelola Shop" },
  { href: "/admin/event", label: "Kelola Event" },
];

export const metadata = { title: "Dashboard Admin — Artiva" };

export default function AdminDashboard() {
  return (
    <main>
      <Navbar variant="admin" />
      <section className="container-karya">
        <h1 className="header">Dashboard Admin</h1>
        <div className="gallery-container">
          {cards.map((c) => (
            <div key={c.href} className="gallery-item">
              <div className="gallery-title">{c.label}</div>
              <Link href={c.href}>Buka</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
