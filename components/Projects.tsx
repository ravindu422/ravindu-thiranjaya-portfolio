import { siteData } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-16 py-32 bg-black">
      <p className="reveal font-mono text-[0.7rem] tracking-[0.2em] uppercase text-amber mb-4">
        Selected Work
      </p>
      <h2 className="reveal font-playfair text-[clamp(2rem,4vw,3.2rem)] font-semibold text-cream mb-4">
        Projects
      </h2>
      <div className="reveal w-12 h-0.5 bg-amber mb-12" />

      <div className="reveal projects-grid">
        {siteData.projects.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>
    </section>
  );
}
