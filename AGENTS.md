# AGENTS.md — artiva

Integrated Digital Art Gallery, Event Management & Marketplace platform for Indonesian artists.
Next.js App Router (SSR-first) + Prisma ORM + PostgreSQL. Single source of truth for agent behavior.

## Developer Commands

- **Install Dependencies**: `npm install`
- **Run Dev Server**: `npm run dev` (`http://localhost:3000`)
- **Build**: `npm run build`
- **Start Prod**: `npm start`
- **Lint**: `npm run lint` (`eslint.config.mjs` + `eslint-config-next`)
- **DB Migrate Dev**: `npx prisma migrate dev`
- **DB Studio**: `npx prisma studio`
- **Prisma Generate**: `npx prisma generate`

> Note: Proyek ini belum memiliki automated test runner. Jangan berasumsi `npm test` tersedia sebelum framework test (Vitest / Playwright) dikonfigurasi.

## Git & Version Control Restrictions (CRITICAL)

- **Branching Strategy**:
  - `master` / `main`: Production / stable releases only.
  - `dev`: Active development and integration branch.
  - Semua pengerjaan fitur baru, bugfix, dan development harian wajib menargetkan `dev` (atau branch fitur yang dibuat dari `dev`). Jangan pernah commit langsung ke `master`/`main` tanpa instruksi eksplisit user.
- **NEVER Push Autonomously**: JANGAN PERNAH menjalankan `git push` dalam kondisi apa pun kecuali ada instruksi eksplisit dari user.
- **NEVER Commit Autonomously**: JANGAN PERNAH membuat commit (`git commit`) atau mengamend history git tanpa instruksi eksplisit user.
- **Pre-Commit Inspection**: Saat diinstruksikan untuk commit, selalu jalankan dan periksa `git status` dan `git diff` terlebih dahulu. Pastikan TIDAK ADA file kredensial, secret, token, atau isi `.env` (`DATABASE_URL`) yang masuk ke staging area.
- **NO Destructive Operations**: Jangan pernah menjalankan `git push --force`, `git reset --hard`, atau menghapus branch tanpa konfirmasi eksplisit user.

## Tech Stack & Core Libraries

- **Framework**: Next.js `16.0.3` (App Router, prioritaskan Server Components & SSR untuk route publik demi SEO)
- **Language**: TypeScript (`strict: true` pada `tsconfig.json`, path alias `@/*`)
- **UI & Styling**: React `19.2.0`, Tailwind CSS v4 (`@tailwindcss/postcss`, `app/globals.css`). Desain mengacu pada palet warna prototipe HTML:
  - Primary: `#cd543c`
  - Background Light: `#efe2c2`
  - Background Dark: `#1d2a27`
  - Sage: `#8DA399`
  - Charcoal: `#191110`
  - Font Families: `Cinzel` (header), `Manrope` (display), `Nunito` (body)
- **Database & ORM**: Prisma `5.22.0` dengan PostgreSQL (`prisma/schema.prisma`, koneksi melalui `DATABASE_URL` di `.env`)
- **State & Data Mutations**: React Server Components + Server Actions; gunakan React Context / Client Components hanya bila mutlak dibutuhkan untuk interaktivitas UI
- **DO NOT USE**: Vite, Create React App client-side setup, atau raw SQL queries tanpa instruksi eksplisit. Seluruh manipulasi database harus melalui Prisma Client.

## SOLID Principles in Codebase

- **S (Single Responsibility)**:
  - `app/**/page.tsx`: Bertanggung jawab atas routing, layout composition, dan fetching data awal via Server Components.
  - `app/api/**/route.ts`: Bertanggung jawab atas parsing request, auth/RBAC guard, dan response formatting.
  - `lib/services/`: Mengelola domain logic (verifikasi ketersediaan stok, transaksi checkout, status mutasi).
  - `lib/prisma.ts`: Singleton instance PrismaClient untuk mencegah connection leak.
  - `components/`: Komponen presentasi UI murni, dilarang menjalankan query database langsung.
- **O (Open/Closed)**: Tambahkan fungsionalitas baru dengan membuat modul/komponen/service baru tanpa memodifikasi business logic transaksi yang sudah teruji.
- **L (Liskov Substitution)**: Setiap service layer atau data mapper harus dapat digantikan implementasi mock saat testing tanpa merusak alur data.
- **I (Interface Segregation)**: Buat interface / contract spesifik per domain (`ArtworkService`, `TransactionService`, `ArtistProfileService`) daripada satu God-service monolitik.
- **D (Dependency Inversion)**: Route Handler dan Server Actions bergantung pada abstraksi service/helper, bukan instansiasi langsung `new PrismaClient()` di setiap file.

### Layer Separation & Pragmatic SOLID

- **MANDATORY Layer Separation**: Komponen UI di `components/` dan Client Components dilarang keras melakukan import PrismaClient secara langsung atau mengeksekusi raw query. Semua akses data harus melalui Server Components, Server Actions, atau Route Handlers.
- **Scout Rule**: `app/page.tsx` saat ini menginisiasi `const prisma = new PrismaClient();` secara lokal. Sebelum menambahkan fitur baru, kode ini **WAJIB** direfactor ke singleton `lib/prisma.ts`.
- **File Hygiene (Advisory)**: 1 file = 1 tanggung jawab utama; evaluasi pemecahan file yang melebihi 300 baris. Gunakan Server Components sebagai default; gunakan directive `'use client'` hanya pada boundary interaktif.
- **No UI Hardcoding**: Hindari hardcoding warna atau styling arbitrary langsung di komponen; gunakan token Tailwind dan semantic classes yang konsisten dengan tema Artiva.

## Architecture & Directory Structure

```text
artiva/
├── app/
│   ├── api/
│   │   └── transaction/         # Checkout API dengan prisma.$transaction
│   ├── artist/
│   │   └── [username]/          # Halaman profil seniman (migrasi artist_profile.html)
│   ├── exhibition/              # Pameran & virtual tour (migrasi exhibition.html)
│   ├── gallery/                 # Grid galeri karya seni (migrasi gallery.html)
│   ├── marketplace/             # Marketplace & checkout (migrasi marketplace.html)
│   ├── globals.css              # Setup Tailwind v4 & tema Artiva
│   ├── layout.tsx               # Root layout & global metadata SEO
│   └── page.tsx                 # Landing page (migrasi index.html & integrasi data seniman)
├── components/
│   ├── common/                  # Navbar, Footer, Modal, ThemeToggle
│   ├── gallery/                 # ArtworkCard, GalleryGrid, FilterBar
│   ├── marketplace/             # ProductCard, CartDrawer, CheckoutModal
│   └── ui/                      # Reusable atomics (Button, Badge, Input)
├── lib/
│   ├── prisma.ts                # PrismaClient singleton pattern
│   ├── auth.ts                  # Session handling & RBAC verification
│   └── services/                # ArtworkService, OrderService, UserService
├── prisma/
│   ├── migrations/              # Riwayat migrasi database PostgreSQL
│   └── schema.prisma            # Schema Prisma (User, ArtistProfile, Artwork, Category, dll.)
│                               # (Prisma 5: tanpa prisma.config.ts — koneksi via DATABASE_URL di .env)
├── public/                      # Aset statis publik (gambar, icon, svg)
└── [Prototipe Statis Root]      # index.html, gallery.html, marketplace.html,
                                 # exhibition.html, artist_profile.html
                                 # (Sebagai acuan visual, migrasikan ke Next.js)
```

## Routing & Auth Session Flow

- **Public SSR Routes**:
  - `/` (Landing page)
  - `/gallery` & `/gallery/[id]` (Galeri publik & detail karya — wajib SSR demi SEO)
  - `/exhibition` (Daftar pameran & event)
  - `/artist/[username]` (Profil publik seniman & daftar karyanya)
- **Protected Routes**:
  - `/dashboard/artist/*` (Manajemen karya seni, profil, dan workshop bagi seniman)
  - `/admin/*` (Moderasi karya, artikel, dan user management)
  - `/checkout/*` (Alur pembelian karya seni untuk member terotentikasi)
- **Role-Based Access Control (RBAC)**:
  - Role: `guest`, `member`, `artist`, `admin`.
  - API routes dan Server Actions wajib memvalidasi role user sebelum memproses mutasi data.
  - Seniman hanya memiliki izin mengedit atau menghapus karya seni milik mereka sendiri (`artwork.artist_id === user.id`).
- **Transaction & Double-Purchase Prevention**:
  - Alur pembelian karya seni wajib dibungkus dalam `prisma.$transaction`.
  - Verifikasi ketersediaan stok (`stock > 0`) sebelum mutasi.
  - Harga transaksi wajib dibaca langsung dari database, tidak mempercayai nilai harga dari client payload.

## Business Domain Quirks & Scope Constraints

- **Single / Limited Edition Artworks**: Mayoritas karya berstatus `stock: 1` (karya seni unik). Logika pengurangan stok harus atomik untuk menghindari race condition.
- **Relasi Gambar Karya**: Satu artwork dapat memiliki banyak gambar via `ArtworkImage`, dengan satu gambar primer bertanda `is_primary: true`.
- **Profil Seniman**: Terpisah dari tabel autentikasi via relasi 1-to-1 (`User` -> `ArtistProfile`). Data profil bisa null jika user hanya berperan sebagai `member` biasa.
- **Database Truth**: PostgreSQL adalah database resmi project ini (koreksi atas referensi lama yang mencatat MySQL).
- **Scope Boundary**: Jangan membangun integrasi payment gateway pihak ketiga atau canvas 3D kompleks sebelum ada spesifikasi dan persetujuan dari user. Fokus utama saat ini adalah kelengkapan fungsionalitas App Router dan migrasi UI prototipe.

## Definition of Done (DoD)

Sebelum menandai tugas atau fitur selesai:
1. **Linting & Type-Checking**: `npm run lint` berjalan sukses tanpa error maupun warning. TypeScript tidak menghasilkan type mismatch.
2. **Prisma & Database Integrity**: Perubahan skema divalidasi dengan `npx prisma validate`. Migrasi tersimpan di `prisma/migrations/`. Tidak ada inisialisasi `new PrismaClient()` baru di luar `lib/prisma.ts`.
3. **Layer Separation**: Tidak ada pemanggilan Prisma langsung pada Client Components. Business logic dan kalkulasi harga berada pada service layer atau Server Actions.
4. **State Coverage**: UI menangani 4 status utama secara eksplisit: Loading state (skeleton/spinner), Empty state, Error state (fallback UI / boundary), dan Success state.
5. **No Scope Creep**: Implementasi hanya yang diminta sesuai tiket/spesifikasi.
6. **Chaos Gatekeeper Protocol**:
    - AI wajib menguji/mensimulasikan skenario error ekstrem: koneksi database terputus / query timeout, payload request tidak valid / data relasi bernilai null (misal `artistProfile` null), dan stok karya habis saat checkout.
    - Menjamin aplikasi tidak mengalami white screen of death / unhandled runtime crash.
7. **Commit & Push Prompt (MANDATORY)**: Setelah DoD terpenuhi atau `progress.md` diperbarui, agent **WAJIB** secara proaktif mengusulkan commit dengan format Conventional Commits dan meminta konfirmasi user sebelum menjalankan `git push` (dilarang commit/push otomatis).

## 📋 Progress Tracking

Proyek ini memelihara file `progress.md` pada root workspace untuk memonitor progres pengembangan.

**Rules untuk `progress.md`:**
- **Agent WAJIB membaca `progress.md` di AWAL sesi** untuk memahami status terakhir sebelum mulai bekerja.
- **Agent WAJIB memperbarui `progress.md` di AKHIR sesi** (End of Session) dan setelah menyelesaikan fitur penting, bugfix, atau refactor.
- Dokumentasikan item yang **completed**, **pending/blocked**, dan **next actions** yang konkret.
- Format: Checklist (`- [x]` selesai, `- [ ]` pending, `- [~]` in-progress).
- Jangan menimpa riwayat sesi sebelumnya — tambahkan secara kronologis dengan header sesi bertanggal `## Session [Date]`.
- Setiap kali memperbarui `progress.md`, sertakan **Suggested Commit** dengan format Conventional Commits sebagai prompt untuk user.

## 🏁 End of Session Checklist

Di setiap akhir sesi pengerjaan, agent WAJIB:
1. Menjalankan `npm run lint` untuk memastikan tidak ada compilation / lint error.
2. Memperbarui `progress.md` dengan ringkasan pekerjaan yang selesai, blocker, dan langkah berikutnya.
3. **MENGINGATKAN USER** untuk melakukan commit dan push perubahan, disertai rekomendasi commit message berformat Conventional Commits. **Jangan pernah mengeksekusi `git commit` atau `git push` secara otonom.**

## Key References

- `.agents/AGENTS.md` (Catatan arsitektur awal)
- `prisma/schema.prisma` (Definisi model data)
- `app/page.tsx` (Implementasi awal server component galeri)
- `index.html`, `gallery.html`, `marketplace.html`, `exhibition.html`, `artist_profile.html` (Prototipe desain antarmuka)
- `package.json`, `tsconfig.json`, `next.config.ts` (Konfigurasi runtime dan build)
