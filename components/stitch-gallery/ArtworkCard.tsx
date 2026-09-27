import type { StitchArtwork } from "@/lib/stitch-data";
import { WATERMARK_URL } from "@/lib/stitch-data";

// Port 1:1 kartu masonry gallery.html (hover overlay + badge Reserved + watermark).
export default function ArtworkCard({ item }: { item: StitchArtwork }) {
  return (
    <div className="group break-inside-avoid relative mb-8">
      <div className="relative overflow-hidden rounded-lg bg-stone-200 dark:bg-stone-800">
        {item.reserved && (
          <div className="absolute top-3 left-3 z-20 bg-stone-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Reserved
          </div>
        )}
        <div
          className="absolute inset-0 z-10 watermark opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url(${WATERMARK_URL})` }}
        ></div>
        <div className="absolute inset-0 z-20 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <button className="flex-1 bg-white text-stone-900 py-3 rounded-lg text-sm font-bold shadow-lg hover:bg-stone-50 transition-colors flex items-center justify-center gap-2">
              View Details
            </button>
            <button
              className="aspect-square bg-primary text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
              title="View in Room"
            >
              <span className="material-symbols-outlined">view_in_ar</span>
            </button>
          </div>
        </div>
        <img
          alt={item.alt}
          className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          src={item.image}
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="font-serif text-xl text-stone-900 leading-tight group-hover:text-primary transition-colors font-medium">
            {item.title}
          </h3>
          <p className="text-sm text-stone-700 mt-1 font-medium">
            {item.artist}
          </p>
          <p className="text-xs text-stone-600 mt-0.5 font-semibold uppercase tracking-wide">
            {item.medium}
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold text-primary text-lg">{item.price}</p>
        </div>
      </div>
    </div>
  );
}
