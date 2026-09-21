import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ArtistCarousel from "@/components/landing/ArtistCarousel";
import GalleryPreview from "@/components/landing/GalleryPreview";
import HeroSection from "@/components/landing/HeroSection";
import ShopCTA from "@/components/landing/ShopCTA";
import WhyArtiva from "@/components/landing/WhyArtiva";

export const metadata = { title: "Beranda — Artiva" };

export default function UserHome() {
  return (
    <main>
      <Navbar variant="user" />
      <HeroSection />
      <WhyArtiva />
      <GalleryPreview />
      <ShopCTA />
      <ArtistCarousel />
      <Footer />
    </main>
  );
}
