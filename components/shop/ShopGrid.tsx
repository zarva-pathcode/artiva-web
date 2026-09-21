"use client";

import { useMemo, useState } from "react";
import type { Artwork } from "@/lib/mock-data";

// Port dari user/shopUser.php: kartu + harga + tombol beli (UI only).
export default function ShopGrid({ items }: { items: Artwork[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (it) =>
        it.title.toLowerCase().includes(q) ||
        it.artist.toLowerCase().includes(q),
    );
  }, [items, query]);

  return (
    <section className="container-seniman">
      <h1 className="header">Belanja Kesenian</h1>
      <div className="searchbar">
        <span aria-hidden="true">&#128269;</span>
        <input
          type="text"
          placeholder="Cari karya..."
          aria-label="Cari belanja"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {filtered.length === 0 ? (
        <p id="no-results" style={{ display: "block" }}>
          Tidak ada hasil ditemukan.
        </p>
      ) : (
        <div className="seniman-list">
          {filtered.map((it, i) => (
            <div key={it.id} className="card-item">
              <div className="card-title">{it.title}</div>
              <img src={it.image} alt={it.title} />
              <p>
                <strong>{it.artist}</strong>
              </p>
              <p>Rp {(2_500_000 + i * 750_000).toLocaleString("id-ID")}</p>
              <button type="button">Beli Sekarang</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
