import { MARKETPLACE_HERO_IMAGE } from "@/lib/stitch-data";

// Port 1:1 hero "The Collection" marketplace.html (Stitch).
export default function CollectionHero() {
  return (
    <section className="relative w-full px-4 md:px-10 py-12 max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-center bg-surface-light dark:bg-surface-dark p-6 md:p-10 rounded-xl shadow-sm border border-[#e4d6d3] dark:border-white/5">
        <div className="w-full lg:w-1/2 aspect-video md:aspect-[21/9] lg:aspect-video rounded-lg overflow-hidden relative group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            data-alt="Featured abstract artwork with warm tones"
            style={{ backgroundImage: `url('${MARKETPLACE_HERO_IMAGE}')` }}
          ></div>
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-text-main dark:text-white">
            Featured Artist
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-4 text-[#191110]">
              The Collection
            </h1>
            <p className="text-lg text-stone-700 max-w-lg leading-relaxed font-medium">
              Discover curated fine art with verified provenance. Every piece
              includes a digital Certificate of Authenticity (COA) and is
              secured via Escrow.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-colors flex items-center gap-2 shadow-sm">
              Explore Featured
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white border border-[#d6cbb3] shadow-xs">
              <span className="material-symbols-outlined text-green-700">
                verified_user
              </span>
              <span className="text-sm font-bold text-[#191110]">
                Secure Escrow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
