export interface Artwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  image: string;
}

export interface Artist {
  id: string;
  name: string;
  born: string;
  died?: string;
  style: string;
  famousWork: string;
  description: string;
  image: string;
}

export interface ArtEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  status: string;
  image: string;
}

// Gambar inti dari artiva-web/assets (dipindah ke public/images).
// Isi galeri dinamis tetap dari database nantinya; ini placeholder visual.
export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Garuda Wisnu",
    artist: "Seniman Bali",
    description:
      "Patung megah dengan detail rumit yang menggambarkan mitologi Garuda Wisnu.",
    image: "/images/garuda-wisnu.png",
  },
  {
    id: "2",
    title: "Perahu Layar",
    artist: "Pelukis Pesisir",
    description:
      "Lukisan perahu layar di atas laut dengan langit senja yang hidup.",
    image: "/images/sailing-boat.png",
  },
  {
    id: "3",
    title: "Barong",
    artist: "Seniman Topeng",
    description:
      "Karya bertema mitologi dengan warna berani khas pertunjukan Barong.",
    image: "/images/barong.png",
  },
  {
    id: "4",
    title: "Karya Abstrak",
    artist: "Komunitas Seni",
    description: "Eksplorasi bentuk dan warna kontemporer Indonesia.",
    image: "/images/abstrak.jpg",
  },
  {
    id: "5",
    title: "Koleksi Karya",
    artist: "Berbagai Seniman",
    description: "Kompilasi karya pilihan dari para seniman Artiva.",
    image: "/images/karya.jpg",
  },
];

export const artists: Artist[] = [
  {
    id: "1",
    name: "Gita Sekar",
    born: "1985",
    style: "Tradisional Kontemporer",
    famousWork: "Tari Legong Series",
    description: "Fokus pada pelestarian motif tari tradisional Bali.",
    image: "/images/pic-1.png",
  },
  {
    id: "2",
    name: "A. Christy",
    born: "1978",
    style: "Realisme",
    famousWork: "Pesisir Nusantara",
    description: "Dikenal lewat lukisan pesisir dan kehidupan nelayan.",
    image: "/images/pic-2.png",
  },
  {
    id: "3",
    name: "Cynthia Y.",
    born: "1990",
    style: "Abstrak",
    famousWork: "Arus Warna",
    description: "Bermain dengan warna berani dan komposisi dinamis.",
    image: "/images/pic-3.png",
  },
  {
    id: "4",
    name: "Marsha L.",
    born: "1982",
    style: "Wayang Kontemporer",
    famousWork: "Bayang Modern",
    description: "Menghidupkan kembali wayang dalam medium modern.",
    image: "/images/pic-4.png",
  },
  {
    id: "5",
    name: "J. Trisha",
    born: "1995",
    style: "Seni Patung",
    famousWork: "Napas Batu",
    description: "Pematung dengan perhatian pada detail mitologi.",
    image: "/images/pic-5.png",
  },
];

export const events: ArtEvent[] = [
  {
    id: "1",
    title: "Pameran Seni Nusantara",
    description: "Pameran kolektif seniman dari berbagai daerah di Indonesia.",
    date: "2026-10-15",
    status: "Akan datang",
    image: "/images/main-image1.png",
  },
  {
    id: "2",
    title: "Festival Budaya Lokal",
    description: "Pertunjukan tari, musik, dan pasar karya seni.",
    date: "2026-11-02",
    status: "Pendaftaran dibuka",
    image: "/images/main-image2.png",
  },
  {
    id: "3",
    title: "Workshop Melukis Tradisional",
    description: "Belajar teknik melukis gaya Bali bersama seniman senior.",
    date: "2026-11-20",
    status: "Kuota terbatas",
    image: "/images/main-image3.png",
  },
];
