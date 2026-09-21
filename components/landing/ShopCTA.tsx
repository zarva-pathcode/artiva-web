import Link from "next/link";

export default function ShopCTA() {
  return (
    <section id="belanja" className="belanja-kesenian">
      <div className="content">
        <div className="left-content">
          <div className="badge">Belanja Kesenian</div>
          <h1>Dukung Seniman Lokal dengan Setiap Pembelian</h1>
          <p>
            Dukung para seniman dan pengrajin lokal dengan menghargai, membeli,
            dan mengapresiasi karya mereka melalui platform kami.
          </p>
          <div className="cta-button">
            <Link href="/register">
              Belanja Sekarang
              <img
                src="/images/icon-arrow-right.svg"
                alt="Belanja sekarang"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className="right-content">
          <img
            alt="Seniman lokal di depan karyanya"
            src="/images/belanja-image.jpg"
          />
        </div>
      </div>
    </section>
  );
}
