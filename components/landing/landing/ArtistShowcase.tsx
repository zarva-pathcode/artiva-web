"use client";

import { useRef, useState } from "react";
import { featuredArtists } from "@/lib/landing-data";

// Section "Para Seniman".
// - Kartu = kapsul sage (rounded-full) berisi foto (rounded-t-full sendiri,
//   padding atas 7px + kiri/kanan 7.5px) lalu nama (padding atas 28px).
// - Barisan dibatasi max-w-[1057px] + w-max + mx-auto: di 1080px nyaris
//   menyentuh tepi, di layar lebar tetap terpusat, dan saat layar sempit
//   sisi KIRI selalu terjangkau (tidak seperti justify-center yang bisa
//   membuat overflow tidak bisa digulir ke awal).
// - Arrow bergaya glass menempel pada kartu pertama & terakhir (bukan overlay di
//   tepi), sehingga ikut ter-scroll bersama list.
const STEP = 222;
const LAST = featuredArtists.length - 1;

const sizes = [
  { card: "w-[173px] h-[262px]", name: "text-sm" },
  { card: "w-[207px] h-[314px]", name: "text-base" },
  { card: "w-[237px] h-[360px]", name: "text-lg" },
  { card: "w-[207px] h-[314px]", name: "text-base" },
  { card: "w-[173px] h-[262px]", name: "text-sm" },
] as const;

const glass =
  "flex size-[52px] items-center justify-center rounded-full " +
  "bg-white/50 backdrop-blur-md border border-white/30 " +
  "shadow-[0_4px_16px_rgba(0,0,0,0.18)] text-white " +
  "transition-colors hover:bg-white/65";

function Arrow({ dir, onClick }: { dir: -1 | 1; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === -1 ? "Seniman sebelumnya" : "Seniman berikutnya"}
      className={`${glass} absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2`}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path
          d={
            dir === -1 ? "M19 12H5M11 18l-6-6 6-6" : "M5 12h14M13 6l6 6-6 6"
          }
        />
      </svg>
    </button>
  );
}

export default function ArtistShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0);

  const shift = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track?.parentElement) return;
    const max = Math.min(0, track.scrollWidth - track.parentElement.clientWidth);
    setPos((prev) => Math.max(-max, Math.min(0, prev - dir * STEP)));
  };

  return (
    <section className="bg-cream">
      <div className="px-3 py-16 text-center sm:py-20 lg:py-24">
        <span className="inline-block rounded-full bg-label px-4 py-1.5 text-xs font-semibold text-ink">
          Para Seniman
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl font-brand text-[2.5rem] font-medium uppercase leading-[1.1] tracking-tight text-ink">
          Kenali Para
          <br />
          Seniman dan Kisah
          <br />
          Mereka
        </h2>

        <div className="mx-auto mt-10 max-w-[1057px] overflow-hidden">
          <div
            ref={trackRef}
            style={{ transform: `translateX(${-pos}px)` }}
            className="mx-auto flex w-max items-center gap-[15px] transition-transform duration-500 ease-out"
          >
            {featuredArtists.map((artist, i) => (
              <div key={artist.name} className="relative shrink-0">
                <figure
                  className={`flex flex-col overflow-hidden rounded-full bg-sage shadow-[0_10px_25px_rgba(0,0,0,0.12)] ${sizes[i].card}`}
                >
                  {/* Foto: 62.6% tinggi, padding atas 7px + kiri/kanan 7.5px, bawah 0 */}
                  <div className="h-[62.6%] w-full shrink-0 px-[7.5px] pt-[7px]">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="h-full w-full rounded-t-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  {/* Nama: sisa ~37.4%, padding atas 28px */}
                  <figcaption
                    className={`flex flex-1 items-start justify-center pt-7 text-center font-brand uppercase leading-none tracking-wide text-white ${sizes[i].name}`}
                  >
                    {artist.name}
                  </figcaption>
                </figure>

                {/* Arrow melekat pada kartu ujung, jadi ikut ter-scroll */}
                {i === 0 && <Arrow dir={-1} onClick={() => shift(-1)} />}
                {i === LAST && <Arrow dir={1} onClick={() => shift(1)} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
