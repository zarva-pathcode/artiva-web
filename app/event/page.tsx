import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import EventList from "@/components/gallery/EventList";
import { events } from "@/lib/mock-data";

export const metadata = { title: "Event — Artiva" };

export default function EventPage() {
  return (
    <main>
      <Navbar variant="guest" />
      <EventList items={events} />
      <Footer />
    </main>
  );
}
