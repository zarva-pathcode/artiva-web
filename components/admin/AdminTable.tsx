"use client";

import Link from "next/link";
import { useState } from "react";

// Port UI tabel admin (galeriAdmin/senimanAdmin/shopAdmin/eventAdmin): UI only,
// aksi tambah/hapus belum tersambung ke backend.
export interface AdminColumn {
  key: string;
  label: string;
}

export default function AdminTable({
  title,
  columns,
  rows,
  addHref,
}: {
  title: string;
  columns: AdminColumn[];
  rows: Record<string, string>[];
  addHref: string;
}) {
  const [deleted, setDeleted] = useState<string[]>([]);
  const visible = rows.filter((r) => !deleted.includes(r.id));

  return (
    <section className="container-karya">
      <h1 className="header">{title}</h1>
      <div style={{ margin: "0 30px 15px 25px" }}>
        <Link
          href={addHref}
          style={{
            display: "inline-block",
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: 5,
            textDecoration: "none",
          }}
        >
          + Tambah
        </Link>
      </div>
      <div style={{ margin: "0 30px 20px 25px", overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#fff",
          }}
        >
          <thead>
            <tr>
              {columns.map((c) => (
                <th
                  key={c.key}
                  style={{
                    border: "1px solid #ccc",
                    padding: 10,
                    background: "#f4f4f4",
                    textAlign: "left",
                  }}
                >
                  {c.label}
                </th>
              ))}
              <th
                style={{ border: "1px solid #ccc", padding: 10, background: "#f4f4f4" }}
              >
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  style={{ border: "1px solid #ccc", padding: 16, textAlign: "center" }}
                >
                  Belum ada data.
                </td>
              </tr>
            ) : (
              visible.map((row) => (
                <tr key={row.id}>
                  {columns.map((c) => (
                    <td
                      key={c.key}
                      style={{ border: "1px solid #ccc", padding: 10 }}
                    >
                      {row[c.key]}
                    </td>
                  ))}
                  <td style={{ border: "1px solid #ccc", padding: 10 }}>
                    <button
                      type="button"
                      style={{
                        background: "#dc3545",
                        color: "#fff",
                        border: "none",
                        borderRadius: 5,
                        padding: "6px 12px",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        setDeleted((d) => [...d, row.id])
                      }
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
