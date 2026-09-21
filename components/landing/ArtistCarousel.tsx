"use client";

import { useRef } from "react";

const featured = [
  { name: "Gita Sekar", image: "/images/pic-1.png" },
  { name: "A. Christy", image: "/images/pic-2.png" },
  { name: "Cynthia Y.", image: "/images/pic-3.png", middle: true },
  { name: "Marsha L.", image: "/images/pic-4.png" },
  { name: "J. Trisha", image: "/images/pic-5.png" },
];

const ITEM_WIDTH = 220;

export default function ArtistCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const max = -(el.scrollWidth - el.parentElement!.offsetWidth);
    const current = Number(el.dataset.x ?? 0);
    const next =
      dir === 1 ? Math.max(current - ITEM_WIDTH, max) : Math.min(current + ITEM_WIDTH, 0);
    el.dataset.x = String(next);
    el.style.transform = `translateX(${next}px)`;
  };

  return (
    <section className="para-seniman">
      <div className="content">
        <div className="tag">Para Seniman</div>
        <h1>Kenali Para Seniman dan Kisah Mereka</h1>
        <div className="carousel">
          <div className="items-container" ref={trackRef} data-x="0">
            {featured.map((a) => (
              <div key={a.name} className={`item${a.middle ? " middle" : ""}`}>
                <img src={a.image} alt={a.name} />
                <span>{a.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="buttons">
          <button type="button" onClick={() => slide(-1)} aria-label="Geser kiri">
            &#8592;
          </button>
          <button type="button" onClick={() => slide(1)} aria-label="Geser kanan">
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
