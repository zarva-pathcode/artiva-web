import { landingStats, whyCollage } from "@/lib/landing-data";

// Section "Mengapa Artiva?" — satu-satunya section yang FULL-BLEED:
// band sage membentang penuh ke tepi kanan layar, dan kolase gambar
// menempel flush ke tepi kiri (x=0) tanpa padding sama sekali.
// Wrapper sengaja TIDAK memakai mx-auto / max-w-* / px-*;
// padding hanya diberikan ke kolom teks.
const columns = [1, 2] as const;

export default function WhyArtiva() {
  return (
    <section className="bg-sage">
      <div className="grid items-center lg:grid-cols-[36.3%_minmax(0,1fr)] lg:gap-x-[7.9%]">
        {/* Kolase: flush ke tepi kiri viewport, tanpa padding kiri */}
        <div className="order-2 grid grid-cols-2 gap-6 lg:order-1 lg:gap-[30px]">
          {columns.map((col) => (
            <div key={col} className="flex flex-col gap-6 lg:gap-[30px]">
              {whyCollage
                .filter((item) => item.column === col)
                .map((item, idx, arr) => (
                  <div
                    key={item.src}
                    style={{ aspectRatio: item.aspect }}
                    className={
                      // Kolom 1 menempel tepi kiri layar → hanya sisi kanan yang membulat.
                      col === 1
                        ? "overflow-hidden rounded-r-2xl"
                        : "overflow-hidden " +
                          (idx === 0
                            ? "rounded-t-2xl"
                            : idx === arr.length - 1
                              ? "rounded-b-2xl"
                              : "rounded-2xl")
                    }
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Kolom teks: dapat padding agar tetap terbaca & ada margin kanan */}
        <div className="order-1 px-6 py-16 sm:px-10 lg:order-2 lg:px-0 lg:py-0 lg:pr-[6%]">
          <h2 className="font-brand text-3xl font-medium uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Mengapa Artiva?
          </h2>

          <p className="mt-10 max-w-prose text-base leading-relaxed text-white sm:text-lg">
            Artiva hadir untuk memperkenalkan seni dan budaya tradisional
            Indonesia ke panggung dunia digital. Kami percaya bahwa setiap
            karya seni memiliki cerita, nilai, dan sejarah yang patut
            dilestarikan.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-8 sm:mt-16 sm:grid-cols-3">
            {landingStats.map((stat) => (
              <div key={stat.label}>
                <dd className="flex items-baseline gap-1.5">
                  <span className="font-body text-4xl font-extrabold leading-none text-white sm:text-5xl">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="font-body text-xl font-semibold text-white/90">
                      {stat.unit}
                    </span>
                  )}
                </dd>
                <dt className="mt-3 text-sm font-medium text-white/90">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
