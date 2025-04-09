import Link from "next/link";
import "./Skills.css";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <Link
              key={skill.name}
              href={skill.destination}
              target="_blank"
              rel="noreferrer"
              className="skill-item text-[var(--clr-text)] hover:opacity-90 transition"
              title={skill.name}
            >
              <div className="icon-wrapper bg-white p-3 rounded shadow w-fit mx-auto mb-2">
                <img
                  src={skill.url}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="text-sm opacity-90">{skill.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
