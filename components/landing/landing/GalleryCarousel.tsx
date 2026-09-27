"use client";

import { useState } from "react";
import { galleryHighlights } from "@/lib/landing-data";

// Carousel "Galery Seni Karya": 3 kartu, kartu tengah lebih tinggi,
// flanked tombol panah lingkaran orange (sesuai desain).
export default function GalleryCarousel() {
  const [offset, setOffset] = useState(0);
  const total = galleryHighlights.length;

  const shift = (dir: 1 | -1) =>
    setOffset((v) => (v + dir + total) % total);

  const visible = [-1, 0, 1].map((d) => ({
    item: galleryHighlights[(offset + d + total) % total],
    isCenter: d === 0,
  }));

  return (
    <div className="relative mt-14 flex items-center justify-center gap-4 lg:gap-6">
      <button
        type="button"
        aria-label="Karya sebelumnya"
        onClick={() => shift(-1)}
        className="absolute -left-1 z-10 flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-cream transition-colors hover:bg-brand-soft lg:left-0"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 12H5M11 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="flex w-full items-center justify-center gap-4 lg:gap-6">
        {visible.map(({ item, isCenter }, i) => (
          <figure
            key={`${item.src}-${i}`}
            className={`overflow-hidden rounded-2xl bg-sage/20 transition-all duration-500 ${
              isCenter
                ? "z-10 w-[52%] max-w-[380px] shadow-xl"
                : "w-[24%] max-w-[240px] opacity-80"
            }`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={`w-full object-cover ${
                isCenter ? "aspect-[3/4]" : "aspect-[3/4]"
              }`}
              loading="lazy"
            />
          </figure>
        ))}
      </div>

      <button
        type="button"
        aria-label="Karya berikutnya"
        onClick={() => shift(1)}
        className="absolute -right-1 z-10 flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-cream transition-colors hover:bg-brand-soft lg:right-0"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
