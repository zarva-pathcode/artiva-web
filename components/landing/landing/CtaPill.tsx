import Link from "next/link";

// Pill CTA sesuai Artiva-Design.png.
// Semua tombol: tinggi 42px, radius pill penuh, teks 16px weight 600,
// bulatan ikon 36px di kanan dengan panah diagonal (↗).
// Bedanya hanya 2 varian:
//   filled  -> background terracotta, teks putih,   ikon bulatan krem
//   outline -> border 2px terracotta, teks terracotta, ikon bulatan terracotta
const variants = {
  filled: {
    shell: "border border-transparent bg-brand text-white hover:bg-brand-soft",
    icon: "bg-cream text-brand",
  },
  outline: {
    shell: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
    icon: "bg-brand text-white",
  },
} as const;

export type CtaVariant = keyof typeof variants;

export default function CtaPill({
  href,
  children,
  variant = "outline",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: CtaVariant;
  className?: string;
}) {
  const v = variants[variant];

  return (
    <Link
      href={href}
      className={`group inline-flex h-[42px] items-center gap-3 rounded-full pl-[22px] pr-[3px] text-base font-semibold transition-colors ${v.shell} ${className}`}
    >
      <span>{children}</span>
      <span
        className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${v.icon}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </span>
    </Link>
  );
}
