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

**Suggested Commit:**
```text
feat: port legacy PHP UI to Next.js App Router with mock data
```
