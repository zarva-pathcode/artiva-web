import CollectionHero from "@/components/stitch-marketplace/CollectionHero";
import FilterSidebar from "@/components/stitch-marketplace/FilterSidebar";
import MarketplaceNavbar from "@/components/stitch-marketplace/MarketplaceNavbar";
import ProductCard from "@/components/stitch-marketplace/ProductCard";
import TrustStrip from "@/components/stitch-marketplace/TrustStrip";
import { marketplaceProducts } from "@/lib/stitch-data";

export const metadata = { title: "Artiva Marketplace & Secure Checkout" };

export default function MarketplacePage() {
  return (
    <div className="bg-[#efe2c2] font-display text-[#191110] min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <MarketplaceNavbar />
        <CollectionHero />
        <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10">
            <FilterSidebar />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-stone-800 font-medium">
                  <span className="text-[#191110] font-black">
                    124
                  </span>{" "}
                  artworks found
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stone-800 font-semibold hidden sm:inline">
                    Sort by:
                  </span>
                  <select className="text-sm font-bold text-[#191110] bg-white border border-stone-300 rounded-lg py-1 px-3 focus:ring-1 focus:ring-primary cursor-pointer shadow-xs">
                    <option>Newest Arrivals</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
              {marketplaceProducts.length === 0 ? (
                <p className="text-center py-16 text-stone-700 font-medium">
                  No artworks found.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {marketplaceProducts.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </div>
              )}
              <div className="flex justify-center mt-16">
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition-all shadow-xs cursor-pointer">
                  Load More Artworks
                </button>
              </div>
            </div>
          </div>
        </main>
        <TrustStrip />
      </div>
    </div>
  );
}
