import Link from "next/link";
import { siteData } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-16 overflow-hidden"
    >
      {/* Background lines */}
      <div className="absolute top-0 bottom-0 right-[30%] w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
      <div className="absolute top-0 bottom-0 right-[60%] w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent opacity-40" />

      {/* Amber orb */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,148,58,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Content */}
      <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-amber mb-6 animate-fade-up delay-200">
        {siteData.role}
      </p>

      <h1 className="font-playfair text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[1.05] tracking-tight text-cream animate-fade-up delay-400">
        Crafting systems
        <br />
        that{" "}
        <em className="text-amber not-italic">actually</em> scale.
      </h1>

      <p className="mt-6 text-[1.05rem] font-light text-ash max-w-[480px] leading-relaxed animate-fade-up delay-600">
        I design and engineer end-to-end web applications — from polished
        interfaces to resilient backends — with a focus on clarity and craft.
      </p>

      <div className="mt-12 flex gap-5 animate-fade-up delay-800">
        <Link
          href="#projects"
          className="px-8 py-3.5 bg-amber text-black font-mono text-[0.75rem] tracking-widest uppercase font-medium transition-all duration-200 hover:bg-[#d9a24a] hover:-translate-y-0.5"
        >
          View Projects
        </Link>
        <Link
          href={`mailto:${siteData.email}`}
          className="px-8 py-3.5 border border-[var(--border)] text-ash-light font-mono text-[0.75rem] tracking-widest uppercase transition-all duration-200 hover:border-amber hover:text-amber hover:-translate-y-0.5"
        >
          Get in Touch
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-16 flex items-center gap-4 animate-fade-up delay-1200">
        <div className="scroll-line" />
        <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-ash">
          Scroll
        </span>
      </div>

      {/* Stats */}
      <div className="hidden md:flex absolute right-16 bottom-12 gap-12 animate-fade-up delay-1000">
        {siteData.stats.map((stat) => (
          <div key={stat.label} className="text-right">
            <div className="font-playfair text-3xl text-cream">
              {stat.num.replace("+", "")}
              <span className="text-amber">+</span>
            </div>
            <div className="font-mono text-[0.65rem] tracking-widest uppercase text-ash mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
