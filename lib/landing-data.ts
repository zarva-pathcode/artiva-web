// Data untuk landing page (Artiva-Design.png).
// Warna & font diambil dari token Tailwind di app/globals.css.
// TODO: ganti dengan query Prisma (User + ArtistProfile + Artwork) saat backend siap.

export interface LandingNavItem {
  href: string;
  label: string;
}

export const landingNav: LandingNavItem[] = [
  { href: "/", label: "Beranda" },
  { href: "/galeri", label: "Galeri" },
  { href: "/event", label: "Event" },
  { href: "/about", label: "Tentang Artiva" },
];

// Statistik dipisah value + unit agar unit bisa dirender lebih kecil
// dengan baseline sejajar, sesuai desain.
export interface LandingStat {
  value: string;
  unit: string;
  label: string;
}

export const landingStats: LandingStat[] = [
  { value: "8,2", unit: "jt", label: "Pelaku Ekonomi Kreatif" },
  { value: "300", unit: "", label: "Lokasi Galeri Seni" },
  { value: "500", unit: "rb", label: "Seniman Indonesia" },
];

// Kolase mosaic section "Mengapa Artiva?".
// 4 karya dari referensi desain Artiva-Design.png, diekstrak pada lebar 247px.
// `column` menentukan sub-kolom, `aspect` memakai rasio asli file agar tinggi
// kedua sub-kolom seimbang (722px vs 768px pada lebar 185px).
export interface CollageItem {
  src: string;
  alt: string;
  column: 1 | 2;
  aspect: string;
}

export const whyCollage: CollageItem[] = [
  {
    src: "/images/image-section-2-1.png",
    alt: "Gadis Beranting Mutiara, lukisan Vermeer",
    column: 1,
    aspect: "247/289",
  },
  {
    src: "/images/image-section-2-2.png",
    alt: "Lukisan pohon dengan warna vibrant",
    column: 1,
    aspect: "247/411",
  },
  {
    src: "/images/image-section-2-3.png",
    alt: "Potret diri Arnold Böcklin dengan figur kematian",
    column: 2,
    aspect: "248/307",
  },
  {
    src: "/images/image-section-2-4.png",
    alt: "Pola geometris zigzag berwarna",
    column: 2,
    aspect: "247/439",
  },
];

// Carousel "Galery Seni Karya".
export const galleryHighlights: { src: string; alt: string }[] = [
  { src: "/images/garuda-wisnu.png", alt: "Patung dengan detail intricat" },
  { src: "/images/sailing-boat.png", alt: "Lukisan perahu layar" },
  { src: "/images/barong.png", alt: "Karya bertema mitologi" },
];

// Section "Dukung Seniman Lokal".
export const supportFeature = {
  image: "/images/belanja-image.jpg",
  alt: "Seniman lokal di depan karyanya",
};

// Arch-shaped portrait cards untuk section "Para Seniman".
export const featuredArtists: { name: string; image: string }[] = [
  { name: "Gita Sekar", image: "/images/pic-1.png" },
  { name: "A. Christy", image: "/images/pic-2.png" },
  { name: "Cynthia Y.", image: "/images/pic-3.png" },
  { name: "Marsha L.", image: "/images/pic-4.png" },
  { name: "J. Trisha", image: "/images/pic-5.png" },
];

export const footerColumns: LandingNavItem[][] = [
  [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/galeri", label: "Galeri" },
  ],
  [
    { href: "/seniman", label: "Seniman" },
    { href: "/marketplace", label: "Belanja" },
    { href: "/event", label: "Artikel" },
  ],
];
