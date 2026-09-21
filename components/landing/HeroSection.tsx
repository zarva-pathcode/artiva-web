import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="landing" className="landing-page">
      <div className="content">
        <div className="text">
          <span className="label">Asli Indonesia</span>
          <h1>Temukan Keindahan Seni dan Budaya Lokal Indonesia</h1>
          <p>
            Dukung para seniman dan pengrajin lokal dengan menghargai, membeli,
            dan mengapresiasi karya mereka melalui platform kami.
          </p>
          <div className="buttons">
            <Link href="/galeri">
              Telusuri Karya
              <img
                src="/images/icon-arrow-right.svg"
                alt="Telusuri karya"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className="image">
          <img
            src="/images/landing-image.png"
            alt="Seni tradisional Indonesia"
          />
        </div>
      </div>
    </section>
  );
}
