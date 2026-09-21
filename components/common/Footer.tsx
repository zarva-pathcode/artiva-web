import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="header">
        <h1>Mudah Untuk Memulai</h1>
        <p>
          Dapatkan update eksklusif tentang karya terbaru, event, dan penawaran
          spesial langsung di inbox Anda.
        </p>
        <div className="buttons">
          <Link href="/register">Belanja Sekarang</Link>
          <Link href="/register">Buat Akun</Link>
        </div>
      </div>
      <div className="content">
        <h2>Artiva.</h2>
        <p>
          Artiva adalah platform yang berfokus pada pelestarian dan promosi seni
          serta budaya lokal Indonesia. Kami percaya bahwa seni memiliki
          kekuatan untuk menghubungkan masyarakat dengan akar budaya mereka.
        </p>
        <p>artiva@gmail.com</p>
        <div className="links">
          <Link href="/">Beranda</Link> | <Link href="/about">Tentang Kami</Link>{" "}
          | <Link href="/galeri">Galeri</Link> |{" "}
          <Link href="/seniman">Seniman</Link> |{" "}
          <Link href="/register">Belanja</Link> |{" "}
          <a
            href="https://wa.me/6285604077466?text=Halo,%20saya%20ingin%20bertanya!"
            target="_blank"
            rel="noreferrer"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
      <div className="bot-footer">
        <p className="since">SINCE, 2024</p>
        <p className="copyright">© 2024 COPYRIGHT BY ZARVAISM - ARTIVA</p>
        <p>
          <a href="#">TERM, PRIVACY POLICY</a>
        </p>
      </div>
    </footer>
  );
}
