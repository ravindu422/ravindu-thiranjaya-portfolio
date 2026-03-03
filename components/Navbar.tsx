"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteData } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: `mailto:${siteData.email}` },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-6 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-[var(--border)]"
          : "border-b border-transparent"
      }`}
    >
      <Link
        href="#hero"
        className="font-playfair text-xl tracking-wide text-cream"
      >
        {siteData.name.split(" ")[0]}
        <span className="text-amber">.</span>
        {siteData.name.split(" ")[1]}
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-mono text-[0.7rem] tracking-widest uppercase text-ash hover:text-amber transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
