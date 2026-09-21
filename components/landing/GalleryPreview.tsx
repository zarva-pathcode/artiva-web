import Link from "next/link";

export default function GalleryPreview() {
  return (
    <section id="galeri" className="galeri-seni">
      <div className="content">
        <h1>GALERY SENI KARYA</h1>
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
        <div className="row-content">
          <div className="image-container">
            <img
              alt="Patung dengan detail rumit"
              src="/images/garuda-wisnu.png"
            />
            <img
              className="tengah"
              alt="Lukisan perahu layar"
              src="/images/sailing-boat.png"
            />
            <img
              alt="Karya bertema mitologi"
              src="/images/barong.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
