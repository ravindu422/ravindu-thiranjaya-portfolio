import { siteData } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="px-16 py-32 bg-surface border-t border-b border-[var(--border)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
        {/* Left: Bio */}
        <div>
          <p className="reveal font-mono text-[0.7rem] tracking-[0.2em] uppercase text-amber mb-4">
            About Me
          </p>
          <h2 className="reveal font-playfair text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-tight text-cream mb-4">
            Built on
            <br />
            curiosity.
          </h2>
          <div className="reveal w-12 h-0.5 bg-amber mb-10" />

          <div className="reveal space-y-5">
            {siteData.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-ash-light font-light leading-[1.9] text-[1.05rem]"
                dangerouslySetInnerHTML={{
                  __html: paragraph
                    .replace(
                      /Alex Mercer/g,
                      `<strong class="text-cream font-medium">Alex Mercer</strong>`
                    )
                    .replace(
                      /REST and GraphQL APIs/g,
                      `<strong class="text-cream font-medium">REST and GraphQL APIs</strong>`
                    )
                    .replace(
                      /performance, maintainability,/g,
                      `<strong class="text-cream font-medium">performance, maintainability,</strong>`
                    ),
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Skills */}
        <div className="reveal">
          <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-amber mb-4">
            Tech Stack
          </p>
          <div className="skills-grid">
            {siteData.skills.map((group) => (
              <div key={group.category} className="skill-group">
                <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-amber mb-4">
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[0.9rem] text-ash-light"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--amber-dim)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
