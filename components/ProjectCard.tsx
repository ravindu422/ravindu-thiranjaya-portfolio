import Link from "next/link";

interface Project {
  num: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

const GitHubIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-black p-10 overflow-hidden transition-colors duration-300 hover:bg-surface cursor-pointer">
      {/* Amber glow on hover */}
      <div className="absolute inset-0 bg-[var(--amber-glow)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="font-playfair text-[0.8rem] text-[var(--border)] mb-8 tracking-wider">
        {project.num}
      </div>

      <h3 className="font-playfair text-[1.3rem] font-semibold text-cream mb-3 leading-snug">
        {project.title}
      </h3>

      <p className="text-[0.9rem] text-ash font-light leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.65rem] tracking-wider px-2.5 py-1 border border-[var(--border)] text-ash uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-6">
        <Link
          href={project.github}
          className="flex items-center gap-1.5 font-mono text-[0.7rem] tracking-widest uppercase text-ash hover:text-amber transition-colors duration-200"
        >
          <GitHubIcon />
          GitHub
        </Link>
        <Link
          href={project.live}
          className="flex items-center gap-1.5 font-mono text-[0.7rem] tracking-widest uppercase text-ash hover:text-amber transition-colors duration-200"
        >
          <ExternalIcon />
          Live
        </Link>
      </div>
    </div>
  );
}
