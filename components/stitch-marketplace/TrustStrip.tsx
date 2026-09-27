// Port 1:1 trust banner + footer + FAB marketplace.html (Stitch).
const items = [
  {
    icon: "verified",
    tint: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    title: "Verified Authenticity",
    desc: "Every artwork comes with a blockchain-recorded Certificate of Authenticity.",
  },
  {
    icon: "lock",
    tint: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
    title: "Secure Escrow",
    desc: "Funds are held safely in escrow until the artwork is delivered and verified.",
  },
  {
    icon: "package_2",
    tint: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
    title: "Insured Shipping",
    desc: "Global shipping with full insurance coverage for peace of mind.",
  },
];

export default function TrustStrip() {
  return (
    <>
      <div className="w-full bg-white border-t border-[#d6cbb3] py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((it) => (
              <div
                key={it.title}
                className="flex flex-col items-center text-center gap-3"
              >
                <div
                  className={`size-12 rounded-full ${it.tint} flex items-center justify-center mb-2`}
                >
                  <span className="material-symbols-outlined text-3xl">
                    {it.icon}
                  </span>
                </div>
                <h4 className="font-extrabold text-lg text-[#191110]">{it.title}</h4>
                <p className="text-sm text-stone-700 max-w-xs font-medium leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-[#efe2c2] py-8 text-center border-t border-[#d6cbb3]">
        <p className="text-xs text-stone-700 font-medium">
          © 2024 Artiva Gallery. All rights reserved.
        </p>
      </footer>
      <button className="md:hidden fixed bottom-6 right-6 size-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center z-50">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span className="absolute top-3 right-3 size-2 rounded-full bg-white"></span>
      </button>
    </>
  );
}
