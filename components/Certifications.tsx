import { siteData } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="px-16 py-32 bg-surface border-t border-[var(--border)]"
    >
      <p className="reveal font-mono text-[0.7rem] tracking-[0.2em] uppercase text-amber mb-4">
        Credentials
      </p>
      <h2 className="reveal font-playfair text-[clamp(2rem,4vw,3.2rem)] font-semibold text-cream mb-4">
        Certifications
      </h2>
      <div className="reveal w-12 h-0.5 bg-amber mb-12" />

      <div className="reveal border border-[var(--border)]">
        {siteData.certifications.map((cert, i) => (
          <div
            key={cert.abbr}
            className={`flex items-center gap-8 px-8 py-7 transition-colors duration-200 hover:bg-surface-2 cursor-pointer ${
              i < siteData.certifications.length - 1
                ? "border-b border-[var(--border)]"
                : ""
            }`}
          >
            {/* Logo box */}
            <div className="w-11 h-11 border border-[var(--border)] flex items-center justify-center font-mono text-[0.6rem] text-amber tracking-wider flex-shrink-0">
              {cert.abbr}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[0.95rem] font-medium text-cream mb-1">
                {cert.name}
              </p>
              <p className="font-mono text-[0.7rem] text-ash tracking-wider">
                {cert.issuer}
              </p>
            </div>

            {/* Year */}
            <div className="hidden md:block font-mono text-[0.75rem] text-[var(--amber-dim)] tracking-widest flex-shrink-0">
              {cert.year}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
