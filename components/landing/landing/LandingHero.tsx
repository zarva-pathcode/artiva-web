import CtaPill from "./CtaPill";

// Hero sesuai Artiva-Design.png: badge, judul ALL CAPS Playfair, 2 CTA outline,
// dan artwork di kanan (disediakan user).
export default function LandingHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <span className="inline-block rounded-full bg-label px-4 py-1.5 text-xs font-semibold text-ink">
            Asli Indonesia
          </span>

          <h1 className="mt-6 font-brand text-4xl font-medium uppercase leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Temukan Keindahan Seni
            <br />
            dan Budaya
            <br />
            Lokal Indonesia
          </h1>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/80 sm:text-lg">
            Dukung para seniman dan pengrajin lokal dengan menghargai, membeli,
            dan mendukung karya mereka melalui platform kami.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <CtaPill href="/galeri" variant="filled">
              Telusuri Karya
            </CtaPill>
            <CtaPill href="/seniman" variant="outline">
              Jelajahi Seniman
            </CtaPill>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/images/3d-sculpture.png"
            alt="Sculpture abstrak putih"
            className="w-full max-w-[460px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
