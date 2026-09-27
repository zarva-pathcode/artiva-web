import Link from "next/link";

// Kartu newsletter "Mudah Untuk Memulai": kartu sage INSET dari tepi halaman
// (bukan full-bleed) dengan dua tombol pill solid.
export default function NewsletterCta() {
  return (
    <section className="bg-cream px-[15px]">
      <div className="rounded-md bg-sage px-6 pb-[54px] pt-[66px] text-center">
        <h2 className="font-brand text-[2.25rem] font-medium uppercase tracking-tight text-white">
          Mudah Untuk Memulai
        </h2>
        <p className="mx-auto mt-7 max-w-[484px] text-base leading-relaxed text-white">
          Dapatkan update eksklusif tentang karya terbaru, event, dan penawaran
          spesial langsung di inbox Anda.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          <Link
            href="/marketplace"
            className="inline-flex h-[42px] min-w-[157px] items-center justify-center rounded-full bg-brand px-8 text-base font-semibold text-white transition-colors hover:bg-brand-soft"
          >
            Coba Sekarang
          </Link>
          <Link
            href="/register"
            className="inline-flex h-[42px] min-w-[157px] items-center justify-center rounded-full bg-brand px-8 text-base font-semibold text-white transition-colors hover:bg-brand-soft"
          >
            Buat Akun
          </Link>
        </div>
      </div>
    </section>
  );
}
