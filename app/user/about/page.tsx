import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import WhyArtiva from "@/components/landing/WhyArtiva";

export const metadata = { title: "Tentang Artiva" };

export default function UserAboutPage() {
  return (
    <main>
      <Navbar variant="user" />
      <WhyArtiva />
      <Footer />
    </main>
  );
}
