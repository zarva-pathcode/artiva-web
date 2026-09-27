// Data mock 1:1 dari prototipe Stitch (gallery.html & marketplace.html).
// URL gambar hotlink asli dipertahankan; teks bahasa Inggris dipertahankan.
// TODO: ganti dengan query Prisma (Artwork + ArtworkImage + User) saat backend siap.

export interface StitchArtwork {
  id: string;
  title: string;
  artist: string;
  medium: string;
  price: string;
  image: string;
  alt: string;
  reserved?: boolean;
}

export interface StitchProduct {
  id: string;
  title: string;
  artist: string;
  year: string;
  price: string;
  image: string;
  alt: string;
  aspect: "tall" | "wide";
  badges: ("coa" | "escrow")[];
}

const g = (id: string) =>
  `https://lh3.googleusercontent.com/aida-public/${id}`;

export const galleryArtworks: StitchArtwork[] = [
  {
    id: "silent-echo",
    title: "The Silent Echo",
    artist: "Elena Vance",
    medium: "Oil on Canvas",
    price: "$4,500",
    image: g(
      "AB6AXuCFBzAigvdD-jpSAm9T-PGjksoCxJrFuO7028Q_7WpP04aBwoVIKN2-ZXq6ZIf9uS3NzpSZqDDwdwfud9CdfJZieTTVk0W80qBTqH64QH2bijuwuQuMP47V3icTOxuSdVSBzXq9OHs6rEl2HvfnwC3IQuy0fjAkzgauGm5ysBvo_katW8Z04OKz4sNTf-VnbiSLyZ2RGwsH2bhTa8H3cmub0LYnZQ2nsvV999_URsL7j5DMcLVEEFtYZj4YiTAZWF1xH_IVpNgX4pI",
    ),
    alt: "Abstract oil painting with vertical strokes of beige and deep blue",
  },
  {
    id: "coastal-refractions",
    title: "Coastal Refractions",
    artist: "Liam O'Connor",
    medium: "Photography",
    price: "$3,200",
    image: g(
      "AB6AXuDj93K997BpPCDqFAvxMLGk7MHSRKsq1NoKcZGodpv2PGa1R_Op4rEYzZooVYtW7v9mcADn8cfhR139z8nEiuMNAjK73Xes-f3H33gOem6jYPLbqf-qiLFe44Owb_IySQ-kIKcRsnOmS2ZhU-DodQ1HuR3Y_2ttCPby1xtx01KRZeSJWwMdcsrxXg03tCccgMQs8G28q82FB0YNh-eTehindYRssOaNWJCMbJe4XMY6i1Y2ysRZToCMm1CkxMqvqRyW8aOT0xeixVs",
    ),
    alt: "Moody landscape photography with fog and forest",
  },
  {
    id: "urban-decay",
    title: "Urban Decay IV",
    artist: "Marcus Thorne",
    medium: "Digital Mixed Media",
    price: "$1,200",
    image: g(
      "AB6AXuDNWU5WDKNSmRuYYoSw5PC1Im8CGCahJ6y4SG-Lx_Xq_TgZIvLm3DTKnk5iXcrCFK2WWJi1qSlfITarpoD33Ac-0m4Zy6-XWB_9hI4UVKscVnToc-xIcZHHS40YWE9R1PEGmTw8QkcygBPOT6Dp9H10gpx97Y-wJDR0LuZzWS-AG4JWFDLZ1p-LvWQ3KEkLwCZSK-uHLal1QQm8JNfVNzQT_l0elObsnzTPo4Tz3k9fpr8K_5WJ3NxgSrNpOPS4FhDQsLe_wXJ-tnE",
    ),
    alt: "Abstract portrait with geometric shapes and earth tones",
    reserved: true,
  },
  {
    id: "sienna-dreams",
    title: "Sienna Dreams",
    artist: "Aria J.",
    medium: "Ceramic",
    price: "$8,000",
    image: g(
      "AB6AXuCpCOmaMg6UlBRQmYG61FpHPotNPHvXX8uhZjNZzrTK1u8J4FjihaoM-RUuHmH92fKAEVxbtXIKgZGMak8H7B-0h3tfilZlTWNGvP18e4TLEUJyl5fkYht8WKP4cuevJ2K-TOn9Shw0M2bbrvGkyDHMX5ri3SEvjkn2NdpmytLDyXrxKsij551apjSl-YEA0_Bx_uAyJ0CR2lNQ_RVL76A6G_IYDvZv8R89qRgjn673y1mU617vE9ov-WA",
    ),
    alt: "Minimalist white ceramic sculpture with organic curves",
  },
  {
    id: "fierce-motion",
    title: "Fierce Motion",
    artist: "Elena Vance",
    medium: "Acrylic on Wood",
    price: "$3,800",
    image: g(
      "AB6AXuB3ubCiLUQcvIltZLy9UJTAVgFSZpXCAJpj9YBgxNQ4wFQASdQqe4QnkEnlX3I2YWJ7nq7tnt2E9ztf86JaCTEILP12BneqjiBpzRf_GDtDRpqINAAtQuFBDnfotgwrBgfG-dhnDz6F1QzNVJMJWpMkElf2XBDJtqlAvpnvygAyMq-PyTgQZFbkiOdduHM4gHkex5x7tPTnCfiVIHfAxRi3yMOZmNsQ60wVckJq5KKB1xcqXcc6se5MIOEdsYDIo4-NMC6DKo1wf-M",
    ),
    alt: "Vibrant abstract art with splashes of red and orange",
  },
  {
    id: "void-structure",
    title: "Void Structure",
    artist: "K. L. Peterson",
    medium: "Charcoal",
    price: "$950",
    image: g(
      "AB6AXuC7yTX94fmwwJI2mtZUftVFgG8SgPcMIqBPOsZZhSnnh5P0PlJdwJOey6u-lzBda5O4EJeVRLW4olO-3RewTw23Rk6PQ1UBDaiPZU1IILmlLWCND4nkG8ZVI-iNl6SDcrF4D7YvPPv6nX6PbGwBL5-LS-t0lQSmcokmlX61cymf_rXHToRC26SJf__rRvCYC8o18kwacjwgZy3CYU4_dNqHofKv7NV-j9X8ObfGGQWY5K2FB9E-wEDBp1YauFDhTE7QzOM0ciBs92I",
    ),
    alt: "Dark textured background with light illuminating from center",
  },
  {
    id: "morning-haze",
    title: "Morning Haze",
    artist: "Sarah Jenkins",
    medium: "Watercolor",
    price: "$2,100",
    image: g(
      "AB6AXuBosLgkb40ar9ATiKSuBiN22XbMlTX7j6N6OfkAgItbgzCBdhgHJzjFN16wVtCbvysqPUM2k-dJqSDEGTnO52PUfF6rO1zM13y8kGsl0FYJbOt3KdKUTTqbvBG8aFDFCrv2jCBaG3RIFjiwBzYFXO1zYUMXeLVo15jRWDJiJdMd1rurPokO3a-LPlP70AKClLyydl8fgWr3rnmeZ4-LduKn2CrsUUvKTkqaZqpVar_daqw2OVVyizq4pn3QQEjlwETSCWMsq5HNbqY",
    ),
    alt: "Horizontal abstract painting with pastel colors",
  },
];

export const WATERMARK_URL = g(
  "AB6AXuAq5WvQ-PiEY-D4NZnqQoFn10Dnyktr2UWhcg7BxMkd4lS36lnpk6_HlWwQmt3HBRc8yIizWQcUnoF9NPmREvUDlpJCsJF37m5pIO8KxPxy6ITSJzuCbURKUvde1n2oHD3fOSJYGb0PlPPiLEvbzeFv5fHkZSTC85RA84ZaiU5IoNdVQz4OwxlHA8O0fdMjPxD50iRloyqh5Ig_3fyP-wY7wffMBh5H_k7alGMT2KLNIvktNshtKr4_i6mjS7sbr717j8VGA7Chr7Q",
);

export const marketplaceProducts: StitchProduct[] = [
  {
    id: "blue-ethereal",
    title: "Blue Ethereal",
    artist: "Elena Voro",
    year: "2023",
    price: "$4,200",
    image: g(
      "AB6AXuCuSG_TYJNiTBdENwNNpVnDz1gPPlnsNaxmpeoJ_t2qq5cWO_YNGOXdl9XJO3N6PHQJnsvtEV7GKIkTF3ZTAHlbuFMPsuSu9VfFRxtBSDSDmUVvSSbcESfu2NJbfD3Q6HwDTXqRFWH3EUmoPKVscu_rjDXy4fCwsNBseuYOo8_gjohRg_iWl1ihtPEbpO874TBGvtdfYaTMB3u7Zahlm9J4DFGcMaQxravelKy9PNOy9bOl4kLcRQWHGS-eMGkH-dyJgWSpBVkxoXM",
    ),
    alt: "Abstract oil painting with deep blues and gold",
    aspect: "tall",
    badges: ["coa"],
  },
  {
    id: "fluidity-5",
    title: "Fluidity No. 5",
    artist: "Marcus Chen",
    year: "2024",
    price: "$12,500",
    image: g(
      "AB6AXuDaQWMGJHX7rP9KgIx2l9w5oEHQwa3Sy0umxD7dCnPHThB5_TyK1sEvIBLPbO_M8D2v3UzeZToPhwCc87o5moLHJ5GOXb0hUaH7-shcP1b4Ikj5gAR3GHaAhv6_9SFIIEwvRNa5F9QfFS-PcOb4DQjMXouapWt3tj9wlYPBmQ25aFE9_NiaEVbMcNLFkr7NqB08kxZnf7kKVJAEPFX1Avc3NOhHJyuvUKcVXC0PBb7NuR40SxCdSQZnku2OT9VItTtEbNbBtmWMRSc",
    ),
    alt: "Modern sculpture white marble organic shapes",
    aspect: "tall",
    badges: ["escrow"],
  },
  {
    id: "neon-soul",
    title: "Neon Soul",
    artist: "Sarah Jenkins",
    year: "2023",
    price: "$2,800",
    image: g(
      "AB6AXuADOiMs8HJoh-w0Lb9f-Ggzcq_LaiFHBDU_v5sulAMUSv7vm5aODbdJQHbgRw22-vku2YpzLJwRxK3PIKr3bUWydQW5Y8K4-G_URJMNkvdsM-cLSGfgrRlmP6wxi0xCIuzYQJadSJgkVsfzhie-VbKNUSm0mXrGqwSQs-u-AMo3KYwrBcMoR8H3IPJ3nTRXGAH7cPybXsPKsTJ4QNgGQXRJk6yY7Zu2DgxcI2DrR06qduSeAbPTyamfnSil_aEQZmi6bOQYD5R2oH8",
    ),
    alt: "Digital art glitch portrait pink and cyan",
    aspect: "tall",
    badges: ["coa"],
  },
  {
    id: "desert-silence",
    title: "Desert Silence",
    artist: "Elena Voro",
    year: "2022",
    price: "$5,600",
    image: g(
      "AB6AXuDKPcgStevN5DqHQVJ7eYptQTJ1pjlClDZqMozjvbu0x06QMqRUB91c-R1sYmhlxJobot3JmAg0xN2Av3vh_Zw08sqQnpXn2IUWA7dubqaQrRx4xaTqBLYCbTfKitbm6JJSZdhzYglJZIdm6IT6MBtVWVuV775ceTelV4P20aIzj4UH7-RU2oyG8NsizqJOaEqm64Vd_ZNRsmb-OOy_tsFUijU0yWigeK8YE0TF6xYz6PvD8tjRsHDh5ncDUPInwRi_OksIDJ1aysA",
    ),
    alt: "Minimalist landscape painting beige and brown",
    aspect: "tall",
    badges: ["coa"],
  },
  {
    id: "red-horizon",
    title: "Red Horizon (Masterpiece Series)",
    artist: "Marcus Chen",
    year: "2023",
    price: "$28,000",
    image: g(
      "AB6AXuDACme3hSAfTmW8k8rT-AjB8RXbL-CbnGonJvEC_QgvJYynM8T8kTdm7SM1XMmmRow8taZ8WIymg3WxI5J9G4FdEl6M32dfAgWXTFjjGKuQP7DPlKQb6EkAMLnThuZjcarYQBAJb0iAJ4aN347K3r4-81-d-U_vuX_9_CY0gqlT8OyOkwJxRQ3vgyuAooTxO0otMPkvut_Mre5toxJ2yNUBfxOswGj8jggq-xm3i5y9NjYRD9g_A-jMdlOQS_pWApqBSZtgOOx7FYo",
    ),
    alt: "Wide panoramic abstract painting with red and orange textures",
    aspect: "wide",
    badges: ["coa", "escrow"],
  },
  {
    id: "fade-to-black",
    title: "Fade to Black",
    artist: "Sarah Jenkins",
    year: "2021",
    price: "$1,800",
    image: g(
      "AB6AXuB0-o67r6occOyVo27xEAxkR_98bRvwAxOqGItlL8lnyHpMju9R66w3Bf0Wdp-YELUPR4UDszHcy41aJMCpa2vvyIBML5I6zvwTQnvL43Qt1gu2J4O27CdaVbjxGeIp8OJnRPz_1awN_iHtpKIb4r817NuXqDdkSuL3cYyWzBjQSfzDu23sSbtwJ3tVb57_xvIk5xPvr5yV-l5O1rCfbkWMGAMuwqtO1omNCDyZiiAPpg6lCjSSk8i1e6eqCn52iTGCNJQ2M-tysNw",
    ),
    alt: "Charcoal sketch portrait of a woman",
    aspect: "tall",
    badges: ["coa"],
  },
];

export const MARKETPLACE_HERO_IMAGE = g(
  "AB6AXuAD8tz1YsoNuXYCqRrR5ekX4BP0P7uYVVlMF70U0U_0PChjcEhSqsFGbOYvtulaiipWq0cZ4imffl86UstxFJ76GzKYX33AsBPbNDVYMQezaqbv89_ahZHUnwaxHkAX92lRthIL5Hb3x18WwA6trnHsXzmSLqp0QVVEvza6Vql9LRU8S1pVRcN7cuTmw3fdJO22BqqHjlmTiQR4aWUV6Dnxa2RzmbsCW9oTPCdSVfk5HIzZqVNTdY-dRyxZynDZx2tjrCuqfSKrymo",
);

export const MARKETPLACE_AVATAR_IMAGE = g(
  "AB6AXuA50bq5GBOS3XbsqN5IwCYHV0X5mVDphklwP77ffLZorp3UGG4s2OdebDvqHqBZTjjuDZK5yeUjY7XPYert8xdqp1nbJZ85HEWN-ED8zuPUMxpqo11eH9OUc-XI5pIFDhyEHoUBWQ2UsQBTxq-ix8VMOuYZZ9CTjrl3WT4xgm0XBvTb3FqrxhRB3WPuW8wNUrIsEBxS1p-oqvvYF_68U3SCU6mko5tUsKzWZfkGaaYTcHPP7H0qK7jUrTHP4jDJbvtXd2PFvWgKZIQ",
);
