import Navbar from "@/components/common/Navbar";
import AdminTable from "@/components/admin/AdminTable";
import { artists } from "@/lib/mock-data";

export const metadata = { title: "Kelola Seniman — Artiva" };

export default function AdminSenimanPage() {
  return (
    <main>
      <Navbar variant="admin" />
      <AdminTable
        title="Kelola Seniman"
        columns={[
          { key: "name", label: "Nama" },
          { key: "style", label: "Aliran" },
        ]}
        rows={artists.map((a) => ({ id: a.id, name: a.name, style: a.style }))}
        addHref="/admin/seniman/tambah"
      />
    </main>
  );
}
