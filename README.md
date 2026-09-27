# Artiva

> **Repository ini sedang ditulis ulang dari PHP ke Next.js.**
> Legacy PHP version sudah dihapus dari `main` karena memuat kredensial database
> yang tidak boleh disimpan di version control.

## Status

| Branch | Isi | Status |
| --- | --- | --- |
| `main` | README saja (pointer) | Stabil |
| `dev` | **Next.js rewrite (aktif dikembangkan)** | Active development |

## Development underway di `dev`

Aplikasi Artiva dibangun ulang dengan:

- **Next.js 16** (App Router, Server Components, SSR-first untuk SEO)
- **React 19** + **Tailwind CSS v4**
- **Prisma ORM** + **PostgreSQL**
- TypeScript `strict`

### Route publik (SSR)

- `/` — landing page
- `/gallery`, `/gallery/[id]` — galeri karya
- `/exhibition` — pameran & event
- `/marketplace` — marketplace
- `/artist/[username]` — profil seniman

### Route terproteksi

- `/dashboard/artist/*` — manajemen karya & workshop
- `/admin/*` — moderasi & user management
- `/checkout/*` — alur pembelian

### Role

`guest` · `member` · `artist` · `admin`

## ⚠️ Tindakan wajib untuk collaborator

Kredensial database **pernah ter-commit** pada riwayat branch `main` versi lama.
Histori tersebut sudah dihapus dari branch, namun nilai yang ekspos **tetap harus
dianggap bocor**.

1. **Rotasi password database** di hosting (cPanel / Plesk / DirectAdmin).
2. Buat user database baru dengan hak akses sama, ubah konfigurasi aplikasi.
3. Setelah terverifikasi, drop user database lama.
4. Hapus salinan clone lama dari semua mesin (`rm -rf .git` lalu clone ulang).

## Konfigurasi lokal

```bash
npm install
cp .env.example .env    # isi DATABASE_URL sesuai lingkungan Anda
npx prisma migrate dev
npm run dev
```

Jangan pernah commit file `.env` — sudah di-ignore, dan `.env.example` tersedia
sebagai template tanpa nilai rahasia.

## Kontribusi

Semua development baru **wajib** targeting branch `dev`.

```bash
git checkout dev
git pull origin dev
# ... kerjakan ...
git commit -m "feat(scope): deskripsi singkat"
git push origin dev
```

`main` hanya untuk rilis stabil, dan saat ini hanya berisi README.
