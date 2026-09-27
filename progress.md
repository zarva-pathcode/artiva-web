# Progress Tracking — Artiva

Dokumen pelacak progres pengembangan platform Artiva. Diperbarui setiap awal/akhir sesi dan setelah milestone penting.

---

## Session 2026-09-21

### Completed
- [x] Analisis menyeluruh arsitektur, dependencies, skema database, dan prototipe UI HTML Artiva.
- [x] Pembuatan dokumen panduan agen `AGENTS.md` sesuai konvensi arsitektur Next.js App Router, SOLID, RBAC, dan PostgreSQL.
- [x] Inisialisasi file pelacak progres `progress.md`.

### Pending / Next Actions
- [ ] Refactor `app/page.tsx` untuk menggunakan singleton Prisma Client di `lib/prisma.ts` (Scout Rule).
- [ ] Setup design tokens dan font keluarga tema Artiva (`Cinzel`, `Manrope`, `Nunito`) pada `app/globals.css` dan `app/layout.tsx`.
- [ ] Buat branch `dev` untuk memisahkan alur pengembangan aktif dari `master`.
- [ ] Migrasi berkas prototipe statis (`index.html`, `gallery.html`, dll.) menjadi Next.js Server Components.
- [ ] Implementasi schema Transaksi / Order dan route checkout atomik dengan `prisma.$transaction`.

---

## Session 2026-09-21 (UI Port dari artiva-web)

### Completed
- [x] Menyalin 22 aset gambar (`assets/` → `public/images/`) dan 22 font (`fonts/` → `public/fonts/`) dari `D:\Zarva\project\web\artiva-web`.
- [x] Port `css/style.css` (1659 baris) menjadi `app/artiva-legacy.css` (path font disesuaikan ke `/fonts/`); wiring di `app/layout.tsx` + metadata Artiva (lang `id`).
- [x] Membangun landing page (`/`) dari `index.html`: `Navbar` (varian guest/user/admin + hamburger), `HeroSection`, `WhyArtiva`, `GalleryPreview`, `ShopCTA`, `ArtistCarousel` (port `carousel.js`), `Footer`.
- [x] Membuat routes public: `/galeri` (port `galeriGuest.html` + `galeri.js`), `/seniman` (port `seniman.php`), `/event` (port `event.html`), `/about` (port `about.html`), `/login` + `/register` (port `login.php`/`register.php`, UI-only).
- [x] Membuat routes user (`/user`, `/user/galeri`, `/user/seniman`, `/user/shop`, `/user/event`, `/user/about`) dan admin (`/admin`, `/admin/galeri|seniman|shop|event` + 4 halaman `tambah`) sebagai UI-only dengan mock data (`lib/mock-data.ts`).
- [x] Verifikasi: `npm run lint` 0 error (17 warning `no-img-element` disengaja demi parity CSS legacy); `npm run build` sukses 25/25 halaman static.
- [x] Menghapus `prisma.config.ts` (sintaks Prisma 7, tidak kompatibel dengan Prisma 5.22 — memecahkan build; Prisma 5 tidak membutuhkannya) dan menyesuaikan referensi di `AGENTS.md`.

### Catatan
- Logika PHP/MySQLi (`koneksi.php`, `session`, `get*.php`, `search.php`, `insertUser.php`) dan kredensial DB lama **tidak** ikut dimigrasi — sesuai kesepakatan hanya UI.
- Form login/register dan aksi tambah/hapus admin masih UI-only (submit di-`preventDefault`); penyambungan ke Prisma/auth menyusul.
- `<img>` dipakai (bukan `next/image`) agar selector CSS legacy tetap cocok; migrasi ke `next/image` masuk tahap konversi Tailwind.

### Pending / Next Actions
- [ ] Refactor `app/page.tsx` bila perlu menampilkan data seniman dari DB via singleton `lib/prisma.ts` (Scout Rule).
- [ ] Buat branch `dev` untuk memisahkan alur pengembangan aktif dari `master`.
- [ ] Sambungkan galeri/seniman/event/shop ke Prisma (ganti `lib/mock-data.ts`) + guard RBAC untuk `/user/*` dan `/admin/*`.
- [ ] Implementasi schema Transaksi / Order dan route checkout atomik dengan `prisma.$transaction`.
- [ ] Konversi bertahap `artiva-legacy.css` ke token Tailwind dengan QA visual.

---

## Session 2026-09-21 (Adaptasi UI Stitch: Gallery + Marketplace)

### Completed
- [x] Menelusuri `stitch_artiva_gallery_grid` (5 pasang `code.html` + `screen.png`); memastikan `code.html` identik/hampir identik dengan prototipe di root artiva.
- [x] Mendaftarkan token Stitch di `app/globals.css` via `@theme` Tailwind v4 (`primary`, `background-light/dark`, `surface-light/dark`, `text-main/muted`, `stone-dark/light`, `font-display/manrope`, `font-serif/EB Garamond`) + `@custom-variant dark` (strategi class seperti prototipe) + font Google (EB Garamond, Manrope, Material Symbols) di `app/layout.tsx`.
- [x] Membangun route `/gallery` (port `gallery.html`): `GalleryNavbar`, `GalleryHero` (toggle AR murni CSS), 7 `ArtworkCard` masonry + badge Reserved + hover overlay, `Discover More`, `GalleryFooter` gelap.
- [x] Membangun route `/marketplace` (port `marketplace.html`): `MarketplaceNavbar`, `CollectionHero`, `FilterSidebar` (accordion `<details>` native), 6 `ProductCard` (badge Digital COA/Escrow, Quick View, `WishlistButton` client), `TrustStrip` + footer + FAB mobile.
- [x] Data mock terpusat di `lib/stitch-data.ts` (URL gambar + copy Inggris dipertahankan 1:1 sesuai keputusan user).
- [x] Perbaikan kontras & tema Stitch di `/gallery` dan `/marketplace`:
  - Menghapus media query `prefers-color-scheme: dark` di `app/globals.css` yang memaksa `--foreground` jadi putih di OS bertema gelap.
  - Menetapkan base `:root` `--background: #efe2c2` dan `--foreground: #191110` (charcoal kontras tinggi).
  - Mengunci `<html className="light">` di `app/layout.tsx`.
  - Memberikan warna teks eksplisit (`text-stone-900`, `text-stone-800`, `text-[#191110]`) pada navbar link, toolbar filter pills, label accordion, checkbox text, dan subtitle kartu.
  - Memperbaiki bug footer legacy CSS yang meng-hardcode teks putih di atas background krem.
- [x] Verifikasi: `npm run lint` 0 error (20 warning `no-img-element` disengaja — `<img>` untuk URL eksternal tanpa konfigurasi remotePatterns); `npm run build` sukses 27/27 halaman static.

### Catatan / Tech Debt
- Gambar Stitch hotlink ke `lh3.googleusercontent.com/aida-public` (URL sementara hasil generate AI) — bisa kedaluwarsa; ganti dengan aset lokal/DB saat backend siap.
- Filter, sort, search, slider harga, dan tombol aksi masih UI-only (belum ada state/logika); sambungkan ke query Prisma + URL search params berikutnya.
- Rute lama `/galeri` (UI PHP) dan `/gallery` (UI Stitch) hidup berdampingan — tentukan mana yang menjadi kanonis sebelum rilis.

### Pending / Next Actions
- [ ] Sambungkan `/gallery` + `/marketplace` ke Prisma (ganti `lib/stitch-data.ts`) + guard RBAC.
- [ ] Implementasi filter/sort/search fungsional + pagination `Discover More` / `Load More`.
- [ ] Tentukan rute kanonis galeri (`/galeri` vs `/gallery`) dan marketplace (`/user/shop` vs `/marketplace`).

---

## Session 2026-09-26 (Redesign Landing Page sesuai Artiva-Design.png)

### Completed
- [x] Analisis desain `public/images/Artiva-Design.png` (full-page screenshot 2160×8685) via pixel-sampling.
- [x] **Temuan kunci:** palet warna desain **identik** dengan legacy CSS yang ada — `#F6F0E3` (bg), `#EFE1C1` (label), `#8DA399` (sage), `#D05A3B` (brand), `#333333` (ink). Redesign murni masalah layout/tipografi/spacing, tanpa perubahan warna.
- [x] Menambah token Tailwind **aditif** di `app/globals.css` (nama baru, tidak bentrok dengan token Stitch): `cream`, `sage`, `label`, `brand`, `brand-soft`, `ink`, plus `font-playfair` (Playfair Display), `font-brand` (Cinzel), `font-body` (Nunito). Body di-lock ke Nunito + warna cream/ink.
- [x] Menambahkan **Playfair Display** ke link Google Fonts di `app/layout.tsx` (Cinzel & Nunito sudah termuat via `@font-face` global di `artiva-legacy.css`).
- [x] Membuat `lib/landing-data.ts` (nav links, stats, kolase, karya highlight, seniman, footer columns) sebagai sumber data terpusat.
- [x] Membangun 9 komponen landing baru di `components/landing/landing/`:
  - `LandingNavbar` — logo Cinzel, nav link sans-serif, "Daftar" teks polos + "Masuk" pill orange, hamburger mobile.
  - `LandingHero` — badge, judul ALL CAPS Playfair 3 baris, 2 CTA outline, artwork kanan.
  - `CtaPill` — pill outline/brand/solid dengan ikon panah lingkaran ( reusable).
  - `WhyArtiva` — band sage full-bleed, kolase mosaic 6 karya (tanpa rotasi, CCN), heading + 3 statistik inline.
  - `GallerySection` + `GalleryCarousel` — 3 kartu, tengah lebih besar, flanked 2 tombol panah lingkaran orange.
  - `SupportArtists` — teks kiri + collage foto kanan dengan 2 kartu offset (sage & brand).
  - `ArtistShowcase` — 5 portrait **berbentuk ARCH** (`rounded-t-[999px]`), nama di dalam frame, kartu tengah lebih tinggi, panah orange.
  - `NewsletterCta` — kartu sage **inset** dari tepi (bukan full-bleed), 2 tombol solid.
  - `LandingFooter` — grid 4 kolom rata kiri (tanpa separator `|`), baris bawah SINCE/copyright/TERM.
- [x] Rewrite `app/page.tsx` untuk compose 7 section baru.
- [x] Memasang gambar hero final `3d-sculpture.png` (642×756, sculpture 3D putih) ke `LandingHero`.
- [x] Verifikasi: `npm run lint` **0 error** (25 warning `no-img-element` yang disengaja); `npm run build` sukses **27/27** halaman static; hasil prerender HTML landing page dikonfirmasi memuat seluruh section, arch shape (`999px`), token warna, dan font (`font-playfair`, `font-brand`) dengan benar.
- [x] Konfirmasi tidak ada kode mati: 7 komponen legacy (`HeroSection`, `WhyArtiva`, `GalleryPreview`, `ShopCTA`, `ArtistCarousel`, `common/Navbar`, `common/Footer`) masih dipakai 13 route lain (`/about`, `/user/*`, `/seniman`, `/event`, `/galeri`, `/admin/*`).

### Catatan / Tech Debt
- `font-brand` (Cinzel) & `font-body` (Nunito) bergantung pada `@font-face` yang didefinisikan di `artiva-legacy.css`. File tersebut masih di-import global di `layout.tsx`, jadi aman selama `/user/*`, `/seniman`, `/event`, `/galeri`, `/about`, `/admin/*` masih memakainya. Kalau legacy CSS dihapus, pindahkan `@font-face` Cinzel/Nunito ke `globals.css`.
- Navbar & Footer landing sekarang **duplikat** dari versi legacy (`components/common/`). Sengaja dipisah agar redesign tidak mengubah 13 route lain. Konsolidasi bisa dilakukan saat route lain ikut diredesain.
- `CtaPill` varian `solid` dipakai di `NewsletterCta` via Link langsung, bukan komponennya — konsistensi style CTA solid masih perlu dirapikan.
- Duplikasi nama: `components/landing/WhyArtiva.tsx` (legacy) vs `components/landing/landing/WhyArtiva.tsx` (baru). Berbeda path & sistem styling, tapi membingungkan — pertimbangkan rename saat konsolidasi.

### Pending / Next Actions
- [ ] QA visual oleh user di `localhost:3000` — cocokkan section-per-section dengan `Artiva-Design.png`.
- [ ] Backlog sebelumnya masih aktif: sambungkan `/gallery` + `/marketplace` ke Prisma + guard RBAC; tentukan rute kanonis galeri & marketplace.

---

## Session 2026-09-26 (Koreksi akurasi: skala desain, font, edge-bleed Mengapa Artiva)

### Analisis
- [x] Confirmasi lewat pixel-measurement pada `Artiva-Design.png` (2160×8685) bahwa file ini adalah **capture 2× retina dari viewport ~1080px**, bukan 1440px. Turunan font-size dari tinggi glyph: paragraf 16px, judul ~47px, angka stats ~52px, label ~11px.
- [x] Ketemu **8 ketidakakuratean** di section "Mengapa Artiva?" sebelumnya: container bertoken (bukan edge-to-edge), 6 gambar (harusnya 5), grid 3 kolom (harusnya masonry 2 kolom), gap 8px (harusnya ~30px), radius 8px (harusnya 16px + tepi square), teks `text-cream/90` (harusnya putih solid), spacing antar elemen terlalu rapat, angka stats masih serif.
- [x] Verifikasi **hanya "Mengapa Artiva" yang edge-to-edge** — hasil scan margin per section: Mengapa Artiva 0px, Para Seniman ~25px, Dukung 132px, Hero 128px, Galeri 252px. Section lain memang punya margin, jadi cukup DiperturbASI dengan `max-w-*`.
- [x] Ketemu **bug weight Cinzel**: `font-semibold` (600) melompat ke weight 700 (Cinzel-Black) karena Cinzel hanya punya 300/500/700. Judul terlihat terlalu berat.
- [x] Ketemu **pelanggaran kontras**: `text-cream/90` di atas sage `#8DA399` hanya ~2.3:1, gagal AA.

### Completed
- [x] **Typography standardization** (standar web convention, bukan meniru rasio 1080px):
  - Semua judul 6 section: `font-playfair` → **`font-brand` (Cinzel)** + `font-medium` (500) + responsive scale `text-3xl sm:text-4xl lg:text-5xl` (hero `text-4xl sm:text-5xl lg:text-6xl`, newsletter `text-2xl sm:text-3xl lg:text-4xl`).
  - Paragraf 5 section: 15px `font-light` → **`text-base sm:text-lg` `font-normal` + `max-w-prose`** (65ch, sesuai guideline 45-75 karakter).
  - Paragraf footer: 14px `font-light` → `text-[0.9375rem]` weight normal.
  - Angka statistik: Playfair → **Nunito `font-extrabold` `text-4xl sm:text-5xl`**, unit dipisah jadi `text-xl` baseline-sejajar.
  - Label statistik: 11px uppercase → **`text-sm` Title Case** (lebih mudah dibaca & aksesibel).
  - Teks di band sage: `text-cream/90`/`/80` → **`text-white` solid** (fix AA).
  - Container: `max-w-[1280px]` (arbitrary) → **`max-w-7xl`** (token Tailwind).
  - Section padding: diseragamkan `py-16 sm:py-20 lg:py-24`.
- [x] **`WhyArtiva` dirombak jadi full-bleed**: wrapper tanpa `mx-auto`/`max-w-*`/`px-*`; grid `lg:grid-cols-[36.3%_minmax(0,1fr)] lg:gap-x-[7.9%]`; kolase **flush tepi kiri** (2 sub-kolom, gap 30px, `rounded-r-2xl` saja pada kolom 1 karena sisi kirinya menempel tepi); 5 gambar dengan rasio terkunci dari desain (`371/344`, `371/617`, `371/227`, `371/461`, `371/229`); spacing `mt-10` (judul→paragraf) & `mt-12 sm:mt-16` (paragraf→stats).
- [x] **`lib/landing-data.ts` direstrukturisasi**: `LandingStat` dipecah jadi `value` + `unit`; `whyCollage` jadi 5 item bermetadata `column` + `aspect` (ganti gambar cukup update `src`); `footerColumns` diubah ke `LandingNavItem[][]` (hapus wrapper `title` kosong).
- [x] **Menghapus Playfair Display** dari link Google Fonts di `layout.tsx` dan token `font-playfair` dari `globals.css` (tak terpakai lagi setelah pindah ke Cinzel). EB Garamond + Manrope tetap (dipakai `/gallery` & `/marketplace`).
- [x] Verifikasi: `npm run lint` **0 error** (25 warning `no-img-element` disengaja); `npm run build` sukses **27/27**; hasil prerender HTML dikonfirmasi — `font-brand`, `max-w-7xl`, `max-w-prose`, grid full-bleed, `rounded-r-2xl`, `text-white` semua ada; `font-playfair`/`Playfair`/`max-w-[1280px]`/`text-cream\/9x`/`font-light` semua hilang; **tepat 5 `<img>`** di dalam band sage.

### Catatan / Tech Debt
- Judul "Mengapa Artiva?" dan section lain memakai Cinzel weight 500. Kalau nanti apparent*Cinzel kurang tegas pada ukuran besar, naikkan ke 700 (`font-bold`) — jangan pakai 600 karena tidak ada di Cinzel.
- Rasio dimensi landing tetap cocok untuk desain yang read-only; saat `whyCollage` diganti gambar, sesuaikan `aspect` dengan rasio gambar asli agar tinggi kedua sub-kolom tetap seimbang.
- `font-brand` & `font-body` masih bergantung pada `@font-face` di `artiva-legacy.css` (masih di-import global). Jika legacy CSS dihapus, pindahkan `@font-face` Cinzel/Nunito ke `globals.css`.
- Navbar & Footer landing tetap duplikat dari versi legacy (`components/common/`) agar 13 route lain tidak berubah.
- Duplikasi nama: `components/landing/WhyArtiva.tsx` (legacy) vs `components/landing/landing/WhyArtiva.tsx` (baru).

### Pending / Next Actions
- [ ] QA visual oleh user di `localhost:3000` — pastikan rasio typography terhadap layout sudah terasa seimbang.
- [ ] Kalau masih terasa kecil, naikkan container scale (mis. `max-w-6xl`) alih-alih memperbesar font — ini akan lebih mudah dipelihara.
- [ ] Backlog: sambungkan `/gallery` + `/marketplace` ke Prisma + guard RBAC; tentukan rute kanonis galeri & marketplace.

---

## Session 2026-09-26 (Koreksi navbar & tombol CTA)

### Analisis (delegasikan ke 2 sub-agent + pixel measurement)
- [x] **Navbar diukur**: logo 32px, nav link 15-16px weight 500, gap antar link ~50px, margin kiri/kanan **60px** simetris, jarak atas navbar ~40px, jarak navbar→hero ~116px, "Masuk" pill 120×37.5px (px 38 / py 13.5, teks 16px), jarak Daftar→Masuk 38px, tanpa border-bottom.
- [x] Temuan penting: desain memakai `justify-between` dengan **3 anak** (logo | nav | auth). Karena grup auth (399px) lebih lebar dari logo (192px), nav link otomatis terdorong ke kiri ~104px dan menghasilkan gap 281px — persis angka yang terukur di desain.
- [x] **Tombol CTA diukur**: semua tinggi 42px, radius pill penuh, teks 16px weight 600, bulatan ikon 36px dengan panah **diagonal ↗**. Desain memakai **campuran filled & outline**, bukan seragam.
- [x] Copy tombol section Support di desain adalah **"Belanja Sekarang"** (bukan "Telusuri Sekarang") — sesuai konfirmasi user dan sama dengan desain PHP lama.

### Completed
- [x] **`CtaPill` ditulis ulang** — akar masalah koreksi #4: sebelumnya semua tombol outline yang berubah filled saat hover, sehingga default-state salah.:
  - Variant `filled`: `bg-brand text-white` + ikon bulatan `bg-cream text-brand`
  - Variant `outline`: `border-2 border-brand text-brand` + ikon bulatan `bg-brand text-white`
  - Spesifikasi: `h-[42px]`, `rounded-full`, `pl-[22px] pr-[3px] gap-3`, teks `text-base font-semibold`, ikon `size-9`, panah **diagonal** `M7 17 17 7M9 7h8v8` (sebelumnya horizontal `M5 12h14`)
  - Ikon ikut bergerak diagonal saat hover (`translate-x-0.5 -translate-y-0.5`)
- [x] **`LandingNavbar` direstrukturisasi** jadi 3 anak `justify-between` (logo | nav | auth) agar gap 281px tereproduksi; `h-[72px]` → `py-10`; `lg:px-8` → `lg:px-[60px]`; logo `text-[26px]` → `text-[32px]`; nav link & Daftar `text-sm` → `text-base`; gap link `md:gap-8` → `md:gap-12`; gap auth `gap-5` → `gap-10`; "Masuk" → `h-[38px] px-9 text-base`. Drawer mobile dipindah ke `top-full` (header jadi `relative`) supaya ikut mengikuti tinggi navbar baru.
- [x] **Penempatan variant per section**: Hero "Telusuri Karya" = `filled` + "Jelajahi Seniman" = `outline`; Galeri = `outline`; Support = `filled` + copy diubah ke "Belanja Sekarang"; Newsletter = filled **tanpa ikon**, `h-[42px] min-w-[160px] text-base` (sesuai desain: tidak ada ikon di kedua tombol newsletter).
- [x] Jarak navbar→hero dinaikkan: `lg:py-24` → `lg:py-28` (112px, sesuai 116px di desain).
- [x] Verifikasi: `npm run lint` **0 error** (25 warning `no-img-element` disengaja); `npm run build` sukses **27/27**; HTML prerender dikonfirmasi memuat `py-10`, `lg:px-[60px]`, `text-[32px]`, `gap-12`, `gap-10`, `h-[38px]`, `px-9`, `size-9`, `h-[42px]`, `min-w-[160px]`, path panah diagonal, dan copy "Belanja Sekarang"; serta **tidak ada lagi** `variant="brand"`, `text-[26px]`, `md:gap-8`, `top-[72px]`, `Telusuri Sekarang`.
- [x] Konfirmasi panah horizontal `M5 12h14` masih ada **hanya** di `GalleryCarousel` & `ArtistShowcase` (tombol prev/next carousel) — itu memang benar, bukan bug.

### Catatan / Tech Debt
- Nilai `lg:px-[60px]`, `h-[42px]`, `h-[38px]`, `size-9`, `pl-[22px]`, `pr-[3px]` sengaja arbitrary karena diturunkan dari pengukuran piksel desain pada viewport 1080px. Kalau dirasa perlu, bisa diangkakan ke token spacing Tailwind.
- Tombol Newsletter sengaja tidak memakai `CtaPill` karena desainnya tanpa ikon. Kalau di kemudian hari dibutuhkan, tambahkan opsi `hideIcon` pada `CtaPill`.
- Variant filled/outline perlu dipakai konsisten: primary action = `filled`, secondary = `outline`.

### Pending / Next Actions
- [ ] QA visual oleh user di `localhost:3000` — cek navbar (jarak atas, ukuran font, posisi 3 bagian) dan tombol CTA (filled vs outline, arah panah diagonal).
- [ ] Backlog: sambungkan `/gallery` + `/marketplace` ke Prisma + guard RBAC; tentukan rute kanonis galeri & marketplace.

---

## Session 2026-09-26 (Koreksi section 4 ke bawah: Dukung Seniman, Para Seniman, Newsletter, Footer)

### Analisis (2 sub-agent + pixel-scan manual)
- [x] **Koreksi fundamental**: bentuk kartu Para Seniman ternyata **KAPSULE (rounded-full)**, bukan arch. Dibuktikan pixel-scan kartu 1 (x 30-370): lebar sage 287px di y=6400, **345px penuh** di y=6500-6600, 341px di y=6700, 237px di y=6800, hilang di y=6900 → melengkung di atas **dan** bawah.
- [x] **Tombol panah tidak ada** di desain. Dibuktikan: 0 piksel non-cream di margin kiri (x 0-23) dan kanan (x 2139-2159) sepanjang y 6200-7050; piksel terracotta hanya di dalam foto. Implementasi sebelumnya punya 2 tombol panah + logika carousel yang tidak berdasar.
- [x] Lebar 5 kartu terukur dari runs non-cream di y=6600: 172 / 207 / **237** / 207 / 173 CSS, gap 15.5px, jarak ke tepi layar ~12px, kartu 1 = 172×270 CSS.
- [x] Komposisi "Dukung Seniman" terukur: kartu terracotta **di kanan-atas** (390×275, offset +35/−35), frame sage 400×480 radius 30px dengan **padding 12px**, foto radius 20px. Versi sebelumnya memakai 2 kartu offset full-size dengan terracotta di kanan-bawah — salahsusunan.
- [x] Newsletter: inset **15px** simetris, radius **6px**, padding 66/54px, gap tombol 31px. Versi sebelumnya: inset 24/32px, radius 24px.
- [x] Footer: **tanpa divider atas**, margin 60px, 3 kolom visual (brand 460px + grup kanan gap 132px), link **16px bold**, email ber-underline, divider bawah di-inset 82.5px per sisi.

### Completed
- [x] **`SupportArtists.tsx`**: judul jadi 4 baris eksplisit (Dukung / Seniman Lokal / Dengan Setiap / Pembelian) `text-[2.625rem]` `leading-[1.1]`; paragraf `text-sm` + `text-ink/70`; spasi `mt-5`/`mt-6`/`mt-7`; komposisi gambar dirombak jadi 3 layer (terracotta 390×275 di kanan-atas → frame sage `aspect-[400/480] rounded-[30px] p-3` → foto `rounded-[20px]`).
- [x] **`ArtistShowcase.tsx`**: dihapus 2 tombol panah, `"use client"`, `useRef`/`useState`, dan `move()` → menjadi **Server Component** murni. Kartu jadi `rounded-full` + `ring-2 ring-sage ring-offset-[7px] ring-offset-cream`; 5 ukuran lebar `[172, 207, 237, 207, 173]` × tinggi `[270, 325, 372, 325, 271]`; `items-center gap-4`; container `px-3` tanpa max-w (kartu ~12px dari tepi layar); struktur flex-col (foto `flex-1` + band nama sage solid, bukan gradient); nama 13px/17px `tracking-widest`; judul 3 baris `text-[2.5rem]`.
- [x] **`NewsletterCta.tsx`**: `px-6 pb-16 sm:pb-20 lg:px-8` + `max-w-7xl rounded-3xl py-14` → `px-[15px]` tanpa padding bawah + `rounded-md` `pt-[66px] pb-[54px]`; judul `text-[2.25rem]`; paragraf `max-w-[484px] mt-7`; tombol `gap-8 min-w-[157px] mt-8`.
- [x] **`LandingFooter.tsx`**: dihapus `border-t border-ink/15` dan `pt-14`; `px-6 lg:px-8 pb-10` → `pt-28 pb-9 lg:px-[60px]`; grid 4 kolom → flex dengan brand `max-w-[460px]` + grup kanan `gap-[132px]`; link `text-base font-bold` + `gap-7`; paragraf `text-sm`; email jadi `<a href="mailto:">` dengan `underline underline-offset-4`; baris bawah `text-xs font-medium` (bukan `font-brand`).
- [x] Verifikasi: `npm run lint` **0 error** (25 warning `no-img-element` disengaja); `npm run build` sukses **27/27**; HTML prerender mengonfirmasi seluruh class baru ada (`w-[172px]`, `w-[237px]`, `rounded-full bg-sage ring-2`, `ring-offset-[7px]`, `text-[2.625rem]`, `aspect-[400/480]`, `h-[275px]`, `w-[390px]`, `px-[15px]`, `rounded-md bg-sage`, `pt-[66px]`, `pb-[54px]`, `gap-[132px]`, `text-base font-bold`, `underline-offset-4`) dan class lama **tidak ada lagi** (`rounded-t-[999px]`, `Seniman sebelumnya/berikutnya`, `pt-14`, `rounded-3xl bg-sage px-6 py-14`).
- [x] Grep konfirmasi `ArtistShowcase.tsx` tidak lagi punya `"use client"` / `useState` / `useRef`; hanya `GalleryCarousel` (carousel nyata, tetap client) dan `LandingNavbar` (hamburger drawer) yang client.

### Catatan / Tech Debt
- `ArtistShowcase` sekarang **statis** (5 kartu, tanpa scroll/panah) sesuai desain. Kalau nanti butuh carousel sungguhan, baris kartu tidak lagi muat 5 dalam 1080px — perlu `overflow-x-auto` + snap atau breakpoint khusus.
- Nilai arbitrary (`w-[172px]`, `ring-offset-[7px]`, `h-[275px]`, `pt-[66px]`, `gap-[132px]`, dll.) berasal dari pengukuran piksel pada viewport 1080px. Pada layar lebih lebar posisi kartu tidak otomatis tetap simetris karena lebar kartu tetap — masih perlu QA visual.
- `CtaPill` masih `h-[42px]` sedangkan CTA di section "Dukung Seniman" terukur 38px. perbedaan kecil, dibiarkan agar konsisten dengan section lain.

### Pending / Next Actions
- [ ] QA visual oleh user di `localhost:3000` — khusus section 4 ke bawah: bentuk capsule kartu seniman, komposisi 3 layer gambar, padding edge newsletter, dan layout footer.
- [ ] Backlog: sambungkan `/gallery` + `/marketplace` ke Prisma + guard RBAC; tentukan rute kanonis galeri & marketplace.

---

## Session 2026-09-26 (Koreksi ulang Section 5 — Para Seniman)

### Koreksi atas analisis sebelumnya (saya sempat salah)
- [x] **Kesalahan saya**: pada sesi sebelumnya saya menyimpulkan "tidak ada tombol panah" karena scan piksel tidak menemukan **disk terracotta solid**. Itu keliru — scan tersebut hanya membuktikan tidak ada warna solid, bukan tidak ada elemen. Arrow-nya justru **glassmorphism translucency**, jadi tidak pernah terdeteksi sebagai terracotta.
- [x] Verifikasi ulang (2 sub-agent + scan `LockBits`): arrow **ada**, menumpuk di atas kartu, bbox kiri x 120–224 y 6525–6629 (diameter 105 kanvas = 52.5 CSS), bbox kanan x 1935–2039 y 6525–6629. Scan `LockBits` untuk run terracotta solid >25px di seluruh band y 6250-6950 menghasilkan **0 hasil** — konsisten dengan hipotesis bahwa warnanya translucent, bukan solid.
- [x] **Struktur internal kartu** terukur pada kartu tengah (Cynthia Y.): kartu 237×360 CSS `rounded-full` bg sage `#8DA399` **tanpa ring/outline**, dengan soft drop shadow `0 10px 25px rgba(0,0,0,0.12)`; foto 222×225.5 CSS = **62.6%** tinggi dengan padding atas 7px + kiri/kanan 7.5px + bawah 0; area nama 35–39% dengan padding atas 28px, Cinzel putih uppercase `tracking-wide` ~18px rata tengah. Proporsi 60/40 **identik di kelima kartu**.

### Completed
- [x] **`ArtistShowcase.tsx` ditulis ulang** mengikuti deskripsi user + hasil ukur:
  - `ring-2 ring-sage ring-offset-[7px] ring-offset-cream` → **dihapus**; diganti `shadow-[0_10px_25px_rgba(0,0,0,0.12)]` (sesuai desain: tanpa outline, ada drop shadow).
  - Kapasite sebagai **container sage** (`bg-sage` + `overflow-hidden rounded-full`) — capsule yang memotong foto, bukan outline di luar gambar.
  - Struktur isi: blok foto `h-[62.6%]` dengan `px-[7.5px] pt-[7px]` (tanpa padding bawah, foto menyentuh area nama) → `figcaption` `flex-1 pt-7` (padding atas 28px).
  - 3 ukuran: tengah `w-[237px] h-[360px]`, adjacent `w-[207px] h-[314px]`, ujung `w-[173px] h-[262px]`; nama `text-lg`/`text-base`/`text-sm`.
  - `px-3` (12px margin edge, tipis sesuai catatan user), `gap-[15px]`, `items-center` dipertahankan.
- [x] **Arrow dikembalikan** dengan gaya *liquid glass* (sesuai permintaan user "liquid glass tapi jangan terlalu transparan"): `size-[52px] rounded-full` + `bg-[#2B2724]/45 backdrop-blur-md border border-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.18)] text-white`, `absolute left-0/right-0 top-1/2 -translate-y-1/2 z-10` sehingga **menumpuk di atas kartu** pertama & terakhir (bukan di margin).
- [x] **Perilaku carousel: shift + clamp** — komponen kembali jadi Client Component (`useState` + `useRef`); `shift(dir)` Menggeser 222px per klik di-clamp ke `-(scrollWidth - clientWidth)`, transform diterapkan lewat `style` (bukan mutasi DOM langsung) supaya React yang memegang.
- [x] Verifikasi: `npm run lint` **0 error** (25 warning `no-img-element` disengaja); `npm run build` sukses **27/27**; HTML prerender mengonfirmasi seluruh class baru ada (`w-[237px] h-[360px]`, `h-[62.6%]`, `px-[7.5px] pt-[7px]`, `pt-7`, `shadow-[0_10px_25px_rgba(0,0,0,0.12)]`, `size-[52px]`, `backdrop-blur-md`, `bg-[#2B2724]/45`, `gap-[15px]`, `translateX`) dan class lama **tidak ada lagi** (`ring-2`, `ring-offset-[7px]`, `ring-sage`, `rounded-t-[999px]`). Hitungan: 8 `<figure>` (5 kartu + 3 di `GalleryCarousel`) dan 2 tombol arrow — sesuai.

### Catatan / Tech Debt
- Total lebar 5 kartu + 4 gap = **1057px**, nyaris pas di viewport 1080px. Artinya di layar lebar arrow praktis tidak punya ruang untuk digeser (clamp = 0) — sesuai keputusan user "shift track + clamp". Kalau ingin arrow benar-benar fungsional, jumlah kartu perlu lebih banyak atau dibuat scrollable.
- Warna `bg-[#2B2724]/45` untuk arrow dipilih berdasarkan request "liquid glass, jangan terlalu transparan" — hasil pengukuran piksel hanya memberi rata-rata warna (`#887D76`) karena foto di bawahnya menyerap warna, jadi nilai pastinya belum bisa dipastikan. Perlu QA visual.
- Sisi mobile belum diuji khusus; ukuran kartu fixed (px) kemungkinan meluber di layar < 1080px.

### Pending / Next Actions
- [ ] QA visual oleh user di `localhost:3000` — khusus section 5: bentuk capsule, rasio 60/40 + padding, gaya & posisi arrow, margin edge 12px.
- [ ] Backlog: sambungkan `/gallery` + `/marketplace` ke Prisma + guard RBAC; tentukan rute kanonis galeri & marketplace.

---

## Session 2026-09-27 (Koreksi final Section 5 — rounded foto, edge margin, arrow stack di list)

### Analisis (2 sub-agent + pixel-scan)
- [x] **Struktur internal kartu terukur** (kartu tengah, Cynthia Y.): kartu 237×360 CSS `rounded-full` bg sage **tanpa ring/outline** + soft drop shadow `0 10px 25px rgba(0,0,0,0.12)`; foto 222×225.5 CSS = **62.6%** tinggi dengan padding atas 7px + kiri/kanan 7.5px + bawah 0, dan **foto punya `rounded-t-full` sendiri** (radius 111 = setengah lebar foto); area nama 35–39% dengan padding atas 28px, Cinzel putih uppercase `tracking-wide` ~18px. Proporsi 60/40 identik di kelima kartu.
- [x] **Arrow terverifikasi menumpuk di atas kartu**: bbox kiri x 120–224 y 6525–6629 (diameter 105 kanvas = 52.5 CSS) — **di dalam** rentang kartu 1 (x 24–368), bukan di margin. Peta luminasi disk menunjukkan glif panah `←` (chevron kiri + shaft). Jadi arrow melekat ke kartu → ikut ter-scroll.
- [x] **Bug warna disc ditemukan lewat profiling baris `y=6577`**: di atas foto hampir hitam (`#050505`), disc terbaca `#808070` → `128 = 255·α + 5·(1−α)` → **α ≈ 0.49**. Artinya disc adalah **overlay putih ~50%**, bukan gelap. Implementasi sebelumnya `bg-[#2B2724]/45` (gelap) terbalik total.
- [x] **Bug edge margin**: `px-3` (12px) + `px-14` (56px) = inset efektif 68px per tepi; track butuh 1057px tapi hanya tersedia 944px → **overflow 113px dan ter-clip**. Desain: kartu 1 mulai 12px dari tepi, kartu 5 berakhir 11px dari tepi kanan (hampir mentok).

### Completed
- [x] **`<img>` mendapat `rounded-t-full`** — sebelumnya tanpa radius dan hanya dipotong capsule container, sehingga 7px dari atas kartu capsule hanya ~80px lebar sementara foto 222px rectanguler → pita atas terpotong jadi sliver. Dihitung ulang: dengan radius sendiri, lengkungan foto **selalu lebih sempit** daripada capsule di setiap kedalaman, jadi container tidak pernah memotongnya dan padding sage 7.5px di sisi terlihat jelas.
- [x] **Wrapper track**: `px-14` dihapus, diganti `mx-auto max-w-[1057px] overflow-hidden` + track `mx-auto flex w-max` (bukan `justify-center`). Di 1080px barisan 1057px nyaris menyentuh tepi; di layar lebar tetap terpusat; di layar sempit **sisi kiri selalu terjangkau** (menghindari bug flexbox centering yang membuat overflow start tidak bisa digulir).
- [x] **Arrow dipindahkan ke dalam track**: tiap kartu dibungkus `<div class="relative shrink-0">`, arrow `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10`. Sekarang arrow **ikut ter-scroll bersama list** dan posisinya selalu tepat di pusat kartu luar berapa pun lebar viewport (sebelumnya `left-0`/`right-0` dari container → pusatnya 38px & 1042px, terlalu jauh keluar).
- [x] **Disc arrow** `bg-[#2B2724]/45` → **`bg-white/50`** + `backdrop-blur-md` + `border-white/30` + `shadow-[0_4px_16px_rgba(0,0,0,0.18)]`, hover `bg-white/65`, glif tetap putih (kontras 255 vs 128 ≈ 3.9:1, lolos AA untuk ikon besar).
- [x] Verifikasi: `npm run lint` **0 error** (25 warning `no-img-element` disengaja); `npm run build` sukses **27/27**; HTML prerender mengonfirmasi `max-w-[1057px]`, `mx-auto flex w-max`, `rounded-t-full object-cover`, `bg-white/50`, `bg-white/65`, `backdrop-blur-md`, `left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2`, 5× `relative shrink-0`, 2× `size-[52px]`; serta `px-14`, `bg-[#2B2724]/45`, `justify-center gap-[15px]`, `absolute left-0` **tidak ada lagi**. (`absolute right-0` yang masih ada berasal dari `SupportArtists` — layer kartu terracotta, memang disengaja.)

### Catatan / Tech Debt
- Lebar barisan 1057px hanya "mentok" pada viewport ≈1080px. Di layar 1440px+ kartu tetap 1057px terpusat dengan margin simetris — ini konsekuensi dari keputusan user "max-width 1057px, center", bukan bug.
- Di bawah 1080px kartu ter-clip di sisi kanan; navigasi memakai tombol panah (shift + clamp 222px per klik), bukan scroll native.
- `hover:bg-white/65` memakai opacity modifier non-default; valid di Tailwind v4 tapi tidak ada di palet standar.
- Warna `bg-white/50` derives dari perhitungan alpha ≈0.49 terhadap foto gelap. Di atas foto terang disc akan tampak lebih samar — masih perlu QA visual.
- Sisi mobile belum diuji khusus.

### Pending / Next Actions
- [ ] QA visual oleh user di `localhost:3000` — khusus section 5: rounded foto, posisi/jarak tepi, disc arrow, dan perilaku panah saat digeser.
- [ ] Backlog: sambungkan `/gallery` + `/marketplace` ke Prisma + guard RBAC; tentukan rute kanonis galeri & marketplace.

---

**Suggested Commit:**
```text
fix: match artist card photo rounding, edge margin, and stacked glass arrows
```
