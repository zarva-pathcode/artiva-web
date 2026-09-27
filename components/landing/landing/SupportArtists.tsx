import CtaPill from "./CtaPill";
import { supportFeature } from "@/lib/landing-data";

// Section "Dukung Seniman Lokal".
// Komposisi gambar (diukur dari desain): kartu terracotta di belakang di
// kanan-atas (390x275, offset +35px kanan / -35px atas), lalu frame sage
// 400x480 radius 30px dengan padding 12px, dan foto di dalamnya radius 20px.
export default function SupportArtists() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
        <div>
          <span className="inline-block rounded-full bg-label px-4 py-1.5 text-xs font-semibold text-ink">
            Belanja Kesenian
          </span>

          <h2 className="mt-5 font-brand text-[2.625rem] font-medium uppercase leading-[1.1] tracking-tight text-ink">
            Dukung
            <br />
            Seniman Lokal
            <br />
            Dengan Setiap
            <br />
            Pembelian
          </h2>

          <p className="mt-6 max-w-prose text-sm leading-relaxed text-ink/70">
            Dukung para seniman dan pengrajin lokal dengan menghargai, membeli,
            dan mendukung karya mereka melalui platform kami.
          </p>

          <div className="mt-7">
            <CtaPill href="/marketplace" variant="filled">
              Belanja Sekarang
            </CtaPill>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] pr-[35px] pt-[35px]">
            {/* Layer belakang: kartu terracotta di kanan-atas */}
            <div className="absolute right-0 top-0 h-[275px] w-[390px] rounded-[30px] bg-brand" />
            {/* Layer depan: frame sage dengan padding 12px, foto di dalam */}
            <div className="relative aspect-[400/480] w-full rounded-[30px] bg-sage p-3">
              <img
                src={supportFeature.image}
                alt={supportFeature.alt}
                className="h-full w-full rounded-[20px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
