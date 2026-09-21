import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ArtworkGrid from "@/components/gallery/ArtworkGrid";
import { artworks } from "@/lib/mock-data";

export const metadata = { title: "Galeri — Artiva" };

export default function UserGaleriPage() {
  return (
    <main>
      <Navbar variant="user" />
      <ArtworkGrid items={artworks} />
      <Footer />
    </main>
  );
}
