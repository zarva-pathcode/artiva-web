import Navbar from "@/components/common/Navbar";
import AdminAddForm from "@/components/admin/AdminAddForm";

export const metadata = { title: "Tambah Galeri — Artiva" };

export default function TambahGaleriPage() {
  return (
    <main>
      <Navbar variant="admin" />
      <AdminAddForm
        title="Tambah Galeri"
        backHref="/admin/galeri"
        fields={[
          { name: "title", label: "Judul Karya" },
          { name: "artist", label: "Seniman" },
          { name: "price", label: "Harga", type: "number" },
          { name: "description", label: "Deskripsi" },
        ]}
      />
    </main>
  );
}
