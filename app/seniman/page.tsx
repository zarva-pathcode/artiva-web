import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ArtistGrid from "@/components/gallery/ArtistGrid";
import { artists } from "@/lib/mock-data";

export const metadata = { title: "Seniman — Artiva" };

export default function SenimanPage() {
  return (
    <main>
      <Navbar variant="guest" />
      <ArtistGrid items={artists} />
      <Footer />
    </main>
  );
}
