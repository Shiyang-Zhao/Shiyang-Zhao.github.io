import Link from "next/link";
import "./Projects.css";
import { projects } from "@/data/portfolio";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="projects-section min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="project-card p-4 border rounded shadow"
            >
              <h3 className="font-semibold text-xl text-[var(--clr-text)]">
                {project.name}
              </h3>

              <ul className="mt-2 list-disc list-outside pl-5 text-sm text-[var(--clr-text)] opacity-80 space-y-1">
                {project.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--clr-text)] opacity-70">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-[var(--clr-card-bg)] border border-[var(--clr-border)] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4 text-[var(--clr-primary)] text-sm items-center">
                <Link
                  href={project.sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Source"
                  className="flex items-center gap-1 hover:opacity-80"
                >
                  <FaGithub size={16} />
                  <span>Code</span>
                </Link>
                <Link
                  href={project.livePreview}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live Preview"
                  className="flex items-center gap-1 hover:opacity-80"
                >
                  <FiExternalLink size={16} />
                  <span>Live</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
