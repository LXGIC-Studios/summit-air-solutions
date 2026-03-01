"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-charcoal text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-teal">Summit</span> Air Solutions
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium hover:text-teal transition-colors">
              {l.label}
            </Link>
          ))}
          <a href="tel:5558765432" className="bg-teal hover:bg-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
            (555) 876-5432
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 border-t border-white/10">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium py-2 hover:text-teal transition-colors">
              {l.label}
            </Link>
          ))}
          <a href="tel:5558765432" className="block bg-teal text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
            (555) 876-5432
          </a>
        </div>
      )}
    </nav>
  );
}
