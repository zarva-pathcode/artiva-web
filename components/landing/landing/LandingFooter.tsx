import Link from "next/link";
import { footerColumns } from "@/lib/landing-data";

// Footer sesuai desain: TANPA divider atas, margin 60px, 3 kolom visual
// (brand 460px + grup kanan gap 132px), link 16px bold, email ber-underline,
// lalu divider bawah yang di-inset 82px dari tiap sisi.
export default function LandingFooter() {
  return (
    <footer className="bg-cream pb-9 pt-28">
      <div className="px-6 lg:px-[60px]">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-[460px]">
            <p className="font-brand text-2xl font-medium text-ink">Artiva.</p>
            <p className="mt-11 max-w-[460px] text-sm leading-relaxed text-ink/80">
              Artiva adalah platform yang berfokus pada pelestarian dan promosi
              seni serta budaya lokal Indonesia. Kami percaya bahwa seni
              memiliki kekuatan untuk menghubungkan masyarakat dengan akar
              budaya mereka.
            </p>
            <p className="mt-10 text-sm font-semibold text-ink">
              <a
                href="mailto:artiva@gmail.com"
                className="underline underline-offset-4 transition-colors hover:text-brand"
              >
                artiva@gmail.com
              </a>
            </p>
          </div>

          <div className="flex gap-[132px]">
            {footerColumns.map((col) => (
              <nav key={col[0].label} className="flex flex-col gap-7">
                {col.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base font-bold text-ink transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-ink/20 pt-8 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-xs font-medium tracking-wide text-ink">
            SINCE, 2024
          </p>
          <p className="text-xs font-medium tracking-wide text-ink">
            © 2024 COPYRIGHT BY ZARVAISM - ARTIVA
          </p>
          <p className="text-xs font-medium tracking-wide text-ink">
            <Link href="#" className="transition-colors hover:text-brand">
              TERM, PRIVACY POLICY
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
