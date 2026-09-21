import Navbar from "@/components/common/Navbar";
import AdminAddForm from "@/components/admin/AdminAddForm";

export const metadata = { title: "Tambah Seniman — Artiva" };

export default function TambahSenimanPage() {
  return (
    <main>
      <Navbar variant="admin" />
      <AdminAddForm
        title="Tambah Seniman"
        backHref="/admin/seniman"
        fields={[
          { name: "name", label: "Nama Seniman" },
          { name: "style", label: "Aliran Seni" },
          { name: "famousWork", label: "Karya Terkenal" },
        ]}
      />
    </main>
  );
}
