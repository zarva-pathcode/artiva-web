import type { Metadata } from "next";
import "./globals.css";
import "./artiva-legacy.css";

export const metadata: Metadata = {
  title: "Artiva — Galeri Seni Indonesia",
  description:
    "Artiva adalah platform pelestarian dan promosi seni serta budaya lokal Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" style={{ scrollBehavior: "smooth" }}>
      <body>{children}</body>
    </html>
  );
}
