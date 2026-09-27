"use client";

import { useState } from "react";

// Satu-satunya interaktivitas yang butuh state di kartu produk.
export default function WishlistButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      aria-label="Tambah ke wishlist"
      aria-pressed={active}
      onClick={() => setActive((v) => !v)}
      className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-black transition-colors"
    >
      <span
        className="material-symbols-outlined text-[20px]"
        style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
      >
        favorite
      </span>
    </button>
  );
}
