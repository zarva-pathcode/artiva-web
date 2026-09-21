import Navbar from "@/components/common/Navbar";
import AdminAddForm from "@/components/admin/AdminAddForm";

export const metadata = { title: "Tambah Event — Artiva" };

export default function TambahEventPage() {
  return (
    <main>
      <Navbar variant="admin" />
      <AdminAddForm
        title="Tambah Event"
        backHref="/admin/event"
        fields={[
          { name: "title", label: "Judul Event" },
          { name: "date", label: "Tanggal", type: "date" },
          { name: "description", label: "Deskripsi" },
        ]}
      />
    </main>
  );
}
