import ArtworkCard from "@/components/stitch-gallery/ArtworkCard";
import GalleryFooter from "@/components/stitch-gallery/GalleryFooter";
import GalleryHero from "@/components/stitch-gallery/GalleryHero";
import GalleryNavbar from "@/components/stitch-gallery/GalleryNavbar";
import { galleryArtworks } from "@/lib/stitch-data";

export const metadata = { title: "Artiva Gallery Grid" };

export default function GalleryPage() {
  return (
    <div className="bg-[#efe2c2] text-stone-900 font-display min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      <GalleryNavbar />
      <main className="flex-grow w-full max-w-[1600px] mx-auto px-6 py-8">
        <GalleryHero />
        {galleryArtworks.length === 0 ? (
          <p className="text-center py-16 text-stone-700 font-medium">
            No artworks available.
          </p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
            {galleryArtworks.map((item) => (
              <ArtworkCard key={item.id} item={item} />
            ))}
          </div>
        )}
        <div className="flex justify-center mt-20 mb-10">
          <button className="group px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 shadow-xs">
            Discover More
            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
              arrow_downward
            </span>
          </button>
        </div>
      </main>
      <GalleryFooter />
    </div>
  );
}
