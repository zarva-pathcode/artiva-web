import Link from "next/link";

// Port 1:1 header gallery.html (Stitch).
export default function GalleryNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/90 dark:bg-background-dark/90 border-b border-[#dcd1b9] dark:border-[#2a3835] transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/gallery" className="flex items-center gap-1 group cursor-pointer">
          <span className="material-symbols-outlined text-3xl text-primary transform group-hover:rotate-12 transition-transform duration-500">
            palette
          </span>
          <span className="font-serif text-3xl font-medium tracking-tight text-stone-900">
            Artiva
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/gallery"
            className="text-sm font-semibold uppercase tracking-widest text-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary"
          >
            Gallery
          </Link>
          <Link
            href="/seniman"
            className="text-sm font-semibold text-stone-800 hover:text-primary transition-colors"
          >
            Artists
          </Link>
          <Link
            href="/event"
            className="text-sm font-semibold text-stone-800 hover:text-primary transition-colors"
          >
            Exhibitions
          </Link>
          <span className="text-sm font-semibold text-stone-800 hover:text-primary transition-colors cursor-pointer">
            Editorial
          </span>
        </nav>
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="p-2 text-stone-800 hover:text-primary hover:bg-black/5 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">search</span>
          </button>
          <button
            aria-label="Cart"
            className="p-2 text-stone-800 hover:text-primary hover:bg-black/5 rounded-full transition-colors relative"
          >
            <span className="material-symbols-outlined text-[24px]">
              shopping_bag
            </span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <Link
            href="/login"
            className="hidden sm:flex items-center gap-2 pl-2 pr-4 py-1.5 bg-stone-900 text-stone-100 rounded-full hover:bg-stone-800 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">
              account_circle
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
