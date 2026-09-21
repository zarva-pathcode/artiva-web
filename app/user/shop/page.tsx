import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ShopGrid from "@/components/shop/ShopGrid";
import { artworks } from "@/lib/mock-data";

export const metadata = { title: "Belanja — Artiva" };

export default function UserShopPage() {
  return (
    <main>
      <Navbar variant="user" />
      <ShopGrid items={artworks} />
      <Footer />
    </main>
  );
}
