import Navbar from "@/components/common/Navbar";
import AdminAddForm from "@/components/admin/AdminAddForm";

export const metadata = { title: "Tambah Produk — Artiva" };

export default function TambahShopPage() {
  return (
    <main>
      <Navbar variant="admin" />
      <AdminAddForm
        title="Tambah Produk"
        backHref="/admin/shop"
        fields={[
          { name: "title", label: "Nama Produk" },
          { name: "price", label: "Harga", type: "number" },
          { name: "stock", label: "Stok", type: "number" },
        ]}
      />
    </main>
  );
}
