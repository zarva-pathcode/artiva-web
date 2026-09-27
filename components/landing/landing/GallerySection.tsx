import CtaPill from "./CtaPill";
import GalleryCarousel from "./GalleryCarousel";

// Section "Galery Seni Karya": heading + deskripsi + CTA outline di tengah,
// lalu carousel.
export default function GallerySection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20 lg:px-8 lg:py-24">
        <h2 className="font-brand text-3xl font-medium uppercase tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Galery Seni Karya
        </h2>
        <p className="mx-auto mt-5 max-w-prose text-base leading-relaxed text-ink/80 sm:text-lg">
          Dukung para seniman dan pengrajin lokal dengan menghargai, membeli,
          dan mendukung karya mereka melalui platform kami.
        </p>

        <div className="mt-9 flex justify-center">
          <CtaPill href="/seniman" variant="outline">
            Jelajahi Seniman
          </CtaPill>
        </div>

        <GalleryCarousel />
      </div>
    </section>
  );
}
