const stats = [
  { number: "8,2 jt", title: "Pelaku Ekonomi Kreatif" },
  { number: "300", title: "Lokasi Galeri Seni" },
  { number: "500 rb", title: "Seniman Indonesia" },
];

export default function WhyArtiva() {
  return (
    <section id="about" className="mengapa-artiva">
      <div className="container">
        <div className="content">
          <div className="images">
            <img
              className="first"
              alt="Seni Bali"
              height={250}
              src="/images/Balinese_Art.png"
              width={150}
            />
            <img
              className="second"
              alt="Seni patung"
              height={250}
              src="/images/Statue_Art.png"
              width={150}
            />
            <img
              className="third"
              alt="Seni tari"
              height={250}
              src="/images/Tari_Art.png"
              width={150}
            />
            <img
              className="fourth"
              alt="Seni wayang"
              height={250}
              src="/images/Wayang_Art.png"
              width={150}
            />
          </div>
          <div className="text">
            <h1>Mengapa Artiva?</h1>
            <p>
              Artiva hadir untuk memperkenalkan seni dan budaya tradisional
              Indonesia ke panggung dunia digital. Kami percaya bahwa setiap
              karya seni memiliki cerita, nilai, dan sejarah yang patut
              dilestarikan.
            </p>
            <div className="stats">
              {stats.map((s) => (
                <div key={s.title}>
                  <p className="number">{s.number}</p>
                  <p className="title">{s.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
