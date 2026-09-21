import Navbar from "@/components/common/Navbar";
import AdminTable from "@/components/admin/AdminTable";
import { artworks } from "@/lib/mock-data";

export const metadata = { title: "Kelola Shop — Artiva" };

export default function AdminShopPage() {
  return (
    <main>
      <Navbar variant="admin" />
      <AdminTable
        title="Kelola Shop"
        columns={[
          { key: "title", label: "Produk" },
          { key: "artist", label: "Seniman" },
        ]}
        rows={artworks.map((a) => ({
          id: a.id,
          title: a.title,
          artist: a.artist,
        }))}
        addHref="/admin/shop/tambah"
      />
    </main>
  );
}
