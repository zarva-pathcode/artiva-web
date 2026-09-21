"use client";

import { useMemo, useState } from "react";
import type { Artist } from "@/lib/mock-data";

// Port dari seniman.php: kartu blur-on-hover + deskripsi expandable + search.
export default function ArtistGrid({ items }: { items: Artist[] }) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.style.toLowerCase().includes(q) ||
        a.famousWork.toLowerCase().includes(q),
    );
  }, [items, query]);

  return (
    <section className="container-seniman">
      <h1 className="header">Seniman</h1>
      <div className="searchbar">
        <span aria-hidden="true">&#128269;</span>
        <input
          type="text"
          id="search-input"
          placeholder="Cari seniman..."
          aria-label="Cari seniman"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {filtered.length === 0 ? (
        <p id="no-results" style={{ display: "block" }}>
          Tidak ada hasil ditemukan.
        </p>
      ) : (
        <div className="seniman-list" id="gallery">
          {filtered.map((a) => {
            const open = openId === a.id;
            return (
              <div key={a.id} className="card-item">
                <div className="card-title">{a.name}</div>
                <img src={a.image} alt={a.name} />
                <div
                  className="gallery-description"
                  style={{
                    display: open ? "block" : "none",
                    maxHeight: open ? 400 : 0,
                    opacity: open ? 1 : 0,
                  }}
                >
                  <p>
                    <strong>Seniman:</strong> {a.name}
                  </p>
                  <p>
                    <strong>Tahun Lahir:</strong> {a.born}
                  </p>
                  <p>
                    <strong>Aliran Seni:</strong> {a.style}
                  </p>
                  <p>
                    <strong>Karya Terkenal:</strong> {a.famousWork}
                  </p>
                  <p>{a.description}</p>
                </div>
                <button type="button" onClick={() => setOpenId(open ? null : a.id)}>
                  {open ? "Tutup" : "Selengkapnya"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
