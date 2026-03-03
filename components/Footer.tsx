import Link from "next/link";
import { siteData } from "@/lib/data";

export default function Footer() {
  const [first, last] = siteData.name.split(" ");

  return (
    <footer className="px-16 py-16 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="font-playfair text-base text-ash">
        {first}
        <span className="text-amber">.</span>
        {last}
      </div>

      <div className="flex gap-8">
        {siteData.socials.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.7rem] tracking-widest uppercase text-ash hover:text-amber transition-colors duration-200"
          >
            {social.label}
          </Link>
        ))}
        <Link
          href={`mailto:${siteData.email}`}
          className="font-mono text-[0.7rem] tracking-widest uppercase text-ash hover:text-amber transition-colors duration-200"
        >
          Email
        </Link>
      </div>

      <p className="font-mono text-[0.65rem] tracking-widest text-[var(--border)]">
        © {new Date().getFullYear()} — All rights reserved
      </p>
    </footer>
  );
}
