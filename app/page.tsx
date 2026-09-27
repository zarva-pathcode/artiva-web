import ArtistShowcase from "@/components/landing/landing/ArtistShowcase";
import GallerySection from "@/components/landing/landing/GallerySection";
import LandingFooter from "@/components/landing/landing/LandingFooter";
import LandingHero from "@/components/landing/landing/LandingHero";
import LandingNavbar from "@/components/landing/landing/LandingNavbar";
import NewsletterCta from "@/components/landing/landing/NewsletterCta";
import SupportArtists from "@/components/landing/landing/SupportArtists";
import WhyArtiva from "@/components/landing/landing/WhyArtiva";

export default function Home() {
  return (
    <div className="bg-cream font-body text-ink antialiased">
      <LandingNavbar />
      <main>
        <LandingHero />
        <WhyArtiva />
        <GallerySection />
        <SupportArtists />
        <ArtistShowcase />
        <NewsletterCta />
      </main>
      <LandingFooter />
    </div>
  );
}
