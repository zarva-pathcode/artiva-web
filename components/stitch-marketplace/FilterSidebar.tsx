// Port 1:1 sidebar filter marketplace.html (Stitch).
// Accordion memakai <details> native sehingga tetap Server Component.
const mediums = ["Oil Painting", "Acrylic", "Sculpture", "Digital Art"];
const artists = ["Elena Voro", "Marcus Chen", "Sarah Jenkins"];

export default function FilterSidebar() {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-28 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-lg text-[#191110]">Filters</h3>
          <button className="text-xs font-bold text-primary hover:underline cursor-pointer">
            Reset All
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <details
            className="group rounded-xl bg-white border border-[#d6cbb3] shadow-xs"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between p-4">
              <span className="font-bold text-sm text-[#191110]">Medium</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-stone-700">
                keyboard_arrow_down
              </span>
            </summary>
            <div className="px-4 pb-4 pt-0 flex flex-col gap-2.5">
              {mediums.map((m, i) => (
                <label
                  key={m}
                  className="flex items-center gap-3 cursor-pointer group/item"
                >
                  <input
                    defaultChecked={i === 0}
                    className="rounded border-gray-400 text-primary focus:ring-primary h-4 w-4"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-[#191110] group-hover/item:text-primary transition-colors">
                    {m}
                  </span>
                </label>
              ))}
            </div>
          </details>
          <details
            className="group rounded-xl bg-white border border-[#d6cbb3] shadow-xs"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between p-4">
              <span className="font-bold text-sm text-[#191110]">Price Range</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-stone-700">
                keyboard_arrow_down
              </span>
            </summary>
            <div className="px-4 pb-6 pt-2">
              <div className="relative h-1.5 w-full bg-stone-300 rounded-full mb-6">
                <div className="absolute left-[20%] right-[30%] top-0 bottom-0 bg-primary rounded-full"></div>
                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-sm cursor-grab"></div>
                <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-sm cursor-grab"></div>
              </div>
              <div className="flex justify-between items-center text-xs font-extrabold text-[#191110]">
                <span>$1,200</span>
                <span>$15,000</span>
              </div>
            </div>
          </details>
          <details className="group rounded-xl bg-white border border-[#d6cbb3] shadow-xs">
            <summary className="flex cursor-pointer items-center justify-between p-4">
              <span className="font-bold text-sm text-[#191110]">Artist</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-stone-700">
                keyboard_arrow_down
              </span>
            </summary>
            <div className="px-4 pb-4 pt-0">
              <input
                className="w-full text-sm rounded-lg border border-gray-300 bg-stone-50 p-2 text-[#191110] placeholder:text-stone-500 mb-3 focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Search artist..."
                type="text"
              />
              <div className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-2">
                {artists.map((a) => (
                  <label
                    key={a}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      className="rounded border-gray-400 text-primary h-4 w-4"
                      type="checkbox"
                    />
                    <span className="text-sm font-medium text-[#191110]">{a}</span>
                  </label>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </aside>
  );
}
