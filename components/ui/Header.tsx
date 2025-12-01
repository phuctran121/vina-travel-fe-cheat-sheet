"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home (Island Arch)", href: "/" },
  { label: "Tours (URL State)", href: "/tours" },
  { label: "Tours (Infinite Scroll)", href: "/tours-infinite" },
  { label: "Tours (Pagination)", href: "/tours-pagination" },
  {
    label: "Detail Demo (SSG+ISR)",
    // Hardcode slug này để bấm phát là vào test trang chi tiết luôn, đỡ phải tìm
    href: "/tours/kham-pha-ha-long-3n2d",
  },
  { label: "Dashboard (Streaming)", href: "/dashboard" },
  { label: "Blog (SSG)", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto h-16 flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
            V
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">
            VinaTravel
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary font-bold" : "text-gray-500"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Placeholder (Optional) */}
        <div className="md:hidden text-sm text-gray-500">Menu</div>
      </div>
    </header>
  );
}
