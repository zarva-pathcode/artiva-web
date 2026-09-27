import type { StitchProduct } from "@/lib/stitch-data";
import WishlistButton from "./WishlistButton";

// Port 1:1 kartu produk marketplace.html (badge COA/Escrow + Quick View + wishlist).
export default function ProductCard({ item }: { item: StitchProduct }) {
  const wide = item.aspect === "wide";

  return (
    <div className={`group flex flex-col gap-4${wide ? " md:col-span-2" : ""}`}>
      <div
        className={`relative w-full rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm transition-shadow hover:shadow-xl ${
          wide ? "aspect-[2/1]" : item.id === "fluidity-5" ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out ${
            wide ? "group-hover:scale-105" : "group-hover:scale-110"
          }`}
          data-alt={item.alt}
          style={{ backgroundImage: `url('${item.image}')` }}
        ></div>
        <div className="absolute top-3 left-3 flex flex-col items-start gap-2">
          {item.badges.includes("coa") && (
            <div className="bg-white/95 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-xs text-[#191110] flex items-center gap-1 border border-stone-300">
              <span className="material-symbols-outlined text-[14px]">
                verified
              </span>{" "}
              Digital COA
            </div>
          )}
          {item.badges.includes("escrow") && (
            <div className="bg-white/95 backdrop-blur text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-xs text-[#191110] flex items-center gap-1 border border-stone-300">
              <span className="material-symbols-outlined text-[14px] text-green-700">
                lock
              </span>{" "}
              Escrow Secure
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-stone-900 px-6 py-3 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:bg-stone-100">
            Quick View
          </button>
        </div>
        <WishlistButton />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3
            className={`font-bold leading-tight text-[#191110] group-hover:text-primary transition-colors cursor-pointer ${
              wide ? "text-xl" : "text-lg"
            }`}
          >
            {item.title}
          </h3>
          <p className="text-sm text-stone-700 mt-1 font-medium">
            {item.artist}, {item.year}
          </p>
        </div>
        <div className="text-right">
          <p className={`font-extrabold text-primary${wide ? " text-xl" : " text-lg"}`}>
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );
}
