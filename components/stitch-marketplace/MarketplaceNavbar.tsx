import Link from "next/link";
import { MARKETPLACE_AVATAR_IMAGE } from "@/lib/stitch-data";

// Port 1:1 header marketplace.html (Stitch).
export default function MarketplaceNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/90 dark:bg-background-dark/90 border-b border-[#e4d6d3] dark:border-[#2c3b38]">
      <div className="px-4 md:px-10 py-4 flex items-center justify-between max-w-[1440px] mx-auto w-full">
        <Link href="/marketplace" className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white">
            <span className="material-symbols-outlined">filter_vintage</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-[#191110]">
            Artiva
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/marketplace"
            className="text-sm font-bold uppercase tracking-wider text-primary"
          >
            Marketplace
          </Link>
          <Link
            href="/seniman"
            className="text-sm font-semibold text-[#191110] hover:text-primary transition-colors"
          >
            Artists
          </Link>
          <span className="text-sm font-semibold text-[#191110] hover:text-primary transition-colors cursor-pointer">
            Curated
          </span>
          <span className="text-sm font-semibold text-[#191110] hover:text-primary transition-colors cursor-pointer">
            Journal
          </span>
        </nav>
        <div className="flex items-center gap-3">
          <button className="flex size-10 items-center justify-center rounded-full text-[#191110] hover:text-primary hover:bg-black/5 transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="relative flex size-10 items-center justify-center rounded-full text-[#191110] hover:text-primary hover:bg-black/5 transition-colors">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-1 right-1 size-2.5 rounded-full bg-primary border-2 border-[#efe2c2]"></span>
          </button>
          <div
            className="hidden sm:block size-10 rounded-full bg-cover bg-center border-2 border-primary/40 shadow-xs"
            data-alt="User profile avatar"
            style={{ backgroundImage: `url('${MARKETPLACE_AVATAR_IMAGE}')` }}
          ></div>
        </div>
      </div>
    </header>
  );
}
