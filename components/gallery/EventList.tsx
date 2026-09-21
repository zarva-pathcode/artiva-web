import type { ArtEvent } from "@/lib/mock-data";

// Port dari event.html: panel hijau sage per event.
export default function EventList({ items }: { items: ArtEvent[] }) {
  return (
    <>
      <h1 className="header">Event</h1>
      <div className="container" id="eventsContainer">
        {items.length === 0 ? (
          <p>Tidak ada event yang tersedia.</p>
        ) : (
          items.map((e) => (
            <div key={e.id} className="panel">
              <img src={e.image} alt={e.title} />
              <div className="info">
                <h3>{e.title}</h3>
                <p className="location">{e.description}</p>
                <p className="date">Tanggal: {e.date}</p>
                <p className="status">Status: {e.status}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
