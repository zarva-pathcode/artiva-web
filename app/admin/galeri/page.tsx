import Navbar from "@/components/common/Navbar";
import AdminTable from "@/components/admin/AdminTable";
import { artworks } from "@/lib/mock-data";

export const metadata = { title: "Kelola Galeri — Artiva" };

export default function AdminGaleriPage() {
  return (
    <main>
      <Navbar variant="admin" />
      <AdminTable
        title="Kelola Galeri"
        columns={[
          { key: "title", label: "Judul" },
          { key: "artist", label: "Seniman" },
        ]}
        rows={artworks.map((a) => ({
          id: a.id,
          title: a.title,
          artist: a.artist,
        }))}
        addHref="/admin/galeri/tambah"
      />
    </main>
  );
}
