import React from "react";
import { v4 as uuidv4 } from "uuid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { projects } from "@/data/portfolio";
import "./Projects.css";
import Link from "next/link";

const Projects: React.FC = () => (
  <React.Fragment>
    {projects && (
      <section id="projects" className="section projects">
        <h2 className="section__title">Projects</h2>
        <div className="projects__grid">
          {projects.map((project) => (
            <div className="project__item" key={uuidv4()}>
              <div className="project">
                <h3>{project.name}</h3>
                <div className="project__description">
                  {project.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </div>
                {project.stack && (
                  <ul className="project__stack">
                    {project.stack.map((item) => (
                      <li key={uuidv4()} className="project__stack-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {project.sourceCode && (
                  <Link
                    href={project.sourceCode}
                    aria-label="source code"
                    className="link link--icon"
                  >
                    <GitHubIcon />
                  </Link>
                )}
                {project.livePreview && (
                  <Link
                    href={project.livePreview}
                    aria-label="live preview"
                    className="link link--icon"
                  >
                    <LaunchIcon />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
  </React.Fragment>
);

export default Projects;
