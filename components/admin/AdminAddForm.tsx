"use client";

import Link from "next/link";

// Port UI form tambah*.php: UI only, submit belum tersambung ke backend.
export default function AdminAddForm({
  title,
  fields,
  backHref,
}: {
  title: string;
  fields: { name: string; label: string; type?: string }[];
  backHref: string;
}) {
  return (
    <section className="container-karya">
      <h1 className="header">{title}</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          margin: "0 30px 20px 25px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: 10,
          padding: 24,
          maxWidth: 640,
        }}
      >
        {fields.map((f) => (
          <div key={f.name} style={{ marginBottom: 14 }}>
            <label
              htmlFor={f.name}
              style={{ display: "block", marginBottom: 6, fontWeight: 600 }}
            >
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type ?? "text"}
              required
              style={{
                width: "100%",
                padding: 10,
                border: "1px solid #ccc",
                borderRadius: 8,
              }}
            />
          </div>
        ))}
        <div style={{ display: "flex", gap: 12 }}>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Simpan
          </button>
          <Link
            href={backHref}
            style={{
              padding: "10px 20px",
              background: "#e0e0e0",
              color: "#000",
              borderRadius: 5,
              textDecoration: "none",
            }}
          >
            Kembali
          </Link>
        </div>
      </form>
    </section>
  );
}
