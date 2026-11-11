"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/airport-transfer", label: "Airport" },
  { href: "/outstation", label: "Outstation" },
  { href: "/gallery", label: "Gallery" },
  { href: "/local-taxi", label: "Local" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 w-full z-50 bg-[#073b2a]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] py-2.5 sm:py-3"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" aria-label="Sri Ram Travels home" className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2.5 group">
          <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#082452] ring-2 ring-[#F5B800] shadow-md sm:h-16 sm:w-16">
            <Image
              src="/sri-ram-travels-logo.webp"
              alt="Sri Ram Travels logo"
              width={1254}
              height={1254}
              priority
              sizes="(max-width: 640px) 48px, 64px"
              className="h-full w-full rounded-full object-cover"
            />
          </span>
          <span className="font-display text-[12px] font-extrabold leading-tight tracking-wide text-white sm:text-base">
            SRI RAM <span className="text-[#B7F000]">TRAVELS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                  active
                    ? "bg-[#B7F000] text-[#073b2a]"
                    : "text-white/90 hover:bg-white/15 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+916399012525"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            +91 63990 12525
          </a>
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 rounded-full bg-white text-[#073b2a] flex flex-col items-center justify-center gap-1.5 transition"
            aria-label="Menu"
          >
            <span className={`w-5 h-0.5 bg-current transition ${open ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`w-5 h-0.5 bg-current transition ${open ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-y-auto ${open ? "max-h-[85vh] border-t border-zinc-100" : "max-h-0"}`}>
        <nav className="p-6 grid grid-cols-2 gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium text-center transition ${pathname === l.href ? "bg-[#F5B800] text-black font-bold" : "bg-zinc-50 text-zinc-700"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/book" onClick={() => setOpen(false)} className="col-span-2 mt-2 bg-black text-white px-4 py-3 rounded-xl text-sm font-bold text-center">BOOK A CAB OR TOUR →</Link>
          <a href="tel:+916399012525" className="col-span-2 bg-[#F5B800] text-black px-4 py-3 rounded-xl text-sm font-bold text-center">CALL +91 63990 12525</a>
        </nav>
      </div>
    </header>
  );
}
