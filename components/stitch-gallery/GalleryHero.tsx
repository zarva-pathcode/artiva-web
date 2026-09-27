// Port 1:1 blok judul + kontrol gallery.html.
// Toggle AR murni CSS (has-[:checked:]) sehingga tetap Server Component.
const pills = ["Medium", "Price Range", "Artist"];

export default function GalleryHero() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-12">
      <div className="max-w-2xl">
        <p className="text-primary font-extrabold tracking-widest uppercase text-xs mb-3">
          Curated Collection
        </p>
        <h2 className="font-serif text-5xl md:text-6xl text-stone-900 leading-[0.95] mb-4">
          Modern Abstraction &amp; <br />
          <span className="italic text-stone-700">
            Silent Echoes
          </span>
        </h2>
        <p className="text-stone-800 max-w-lg text-lg font-serif leading-relaxed">
          Discover distinct pieces for your personal collection. Each artwork is
          verified with a digital Certificate of Authenticity.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full xl:w-auto">
        <div className="flex items-center justify-between xl:justify-end gap-4 p-2 pl-4 bg-white/70 rounded-xl border border-[#d6cbb3] shadow-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">
              view_in_ar
            </span>
            <span className="text-sm font-bold text-stone-900">
              AR Preview Mode
            </span>
          </div>
          <label className="relative flex h-[24px] w-[44px] cursor-pointer items-center rounded-full bg-stone-300 p-1 has-[:checked]:justify-end has-[:checked]:bg-primary transition-colors duration-300">
            <div className="h-[18px] w-[18px] rounded-full bg-white shadow-sm transition-all"></div>
            <input className="invisible absolute" type="checkbox" />
          </label>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          {pills.map((p) => (
            <button
              key={p}
              className="flex items-center gap-2 px-4 py-2 bg-white/50 border border-stone-500 text-stone-800 rounded-full hover:border-primary hover:text-primary transition-colors text-sm font-semibold shadow-xs"
            >
              {p}{" "}
              <span className="material-symbols-outlined text-[18px] text-stone-700">
                expand_more
              </span>
            </button>
          ))}
          <div className="h-6 w-[1px] bg-stone-400 mx-1 hidden sm:block"></div>
          <button className="flex items-center gap-2 px-4 py-2 text-stone-800 hover:text-primary transition-colors text-sm font-semibold ml-auto sm:ml-0">
            <span className="material-symbols-outlined text-[18px] text-stone-700">sort</span>
            Sort by: Recommended
          </button>
        </div>
      </div>
    </div>
  );
}
