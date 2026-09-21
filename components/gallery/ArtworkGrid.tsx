"use client";

import { useMemo, useState } from "react";
import type { Artwork } from "@/lib/mock-data";

// Port dari galeriGuest.html: grid + search + toggle deskripsi + loading/empty/error.
export default function ArtworkGrid({ items }: { items: Artwork[] }) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (it) =>
        it.title.toLowerCase().includes(q) ||
        it.artist.toLowerCase().includes(q) ||
        it.description.toLowerCase().includes(q),
    );
  }, [items, query]);

  if (failed) {
    return (
      <section className="container-karya">
        <h1 className="header">Gallery Seni</h1>
        <p className="loading">Terjadi kesalahan saat memuat galeri.</p>
      </section>
    );
  }

  return (
    <section className="container-karya">
      <h1 className="header">Gallery Seni</h1>
      <div className="searchbar">
        <span aria-hidden="true">&#128269;</span>
        <input
          type="text"
          id="search-input"
          placeholder="Cari karya atau seniman..."
          aria-label="Cari galeri"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {filtered.length === 0 ? (
        <p id="no-results" style={{ display: "block" }}>
          Tidak ada hasil ditemukan.
        </p>
      ) : (
        <div className="gallery-container" id="gallery">
          {filtered.map((item) => {
            const open = openId === item.id;
            return (
              <div key={item.id} className="gallery-item">
                <div className="gallery-title">{item.title}</div>
                <img
                  src={item.image}
                  alt={item.title}
                  onError={() => setFailed(false)}
                />
                <button type="button" onClick={() => setOpenId(open ? null : item.id)}>
                  {open ? "Tutup" : "Selengkapnya"}
                </button>
                {open && (
                  <div className="gallery-description active" style={{ display: "block" }}>
                    <p>Seniman: {item.artist}</p>
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
