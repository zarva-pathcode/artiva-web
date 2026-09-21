import Navbar from "@/components/common/Navbar";
import AdminTable from "@/components/admin/AdminTable";
import { events } from "@/lib/mock-data";

export const metadata = { title: "Kelola Event — Artiva" };

export default function AdminEventPage() {
  return (
    <main>
      <Navbar variant="admin" />
      <AdminTable
        title="Kelola Event"
        columns={[
          { key: "title", label: "Event" },
          { key: "date", label: "Tanggal" },
          { key: "status", label: "Status" },
        ]}
        rows={events.map((e) => ({
          id: e.id,
          title: e.title,
          date: e.date,
          status: e.status,
        }))}
        addHref="/admin/event/tambah"
      />
    </main>
  );
}
