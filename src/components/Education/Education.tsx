import Link from "next/link";
import "./Education.css";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="education-section py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-10">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="education-card flex flex-col md:flex-row md:items-start gap-6"
            >
              <img
                src={edu.logo}
                alt={`${edu.university} logo`}
                className="w-16 h-16 object-contain"
              />
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-center">
                  <Link
                    href={edu.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl font-semibold hover:underline"
                  >
                    {edu.university}
                  </Link>
                  <span className="text-sm text-[var(--clr-text)] opacity-80">
                    {edu.startDate} – {edu.endDate}
                  </span>
                </div>

                <p className="text-[var(--clr-text)] opacity-90">{edu.degree}</p>
                <p className="text-sm text-[var(--clr-text)] opacity-70 mb-2">
                  {edu.GPA}
                </p>

                {edu.honor.length > 0 && (
                  <ul className="list-disc list-outside pl-5 text-sm text-[var(--clr-text)] opacity-80 space-y-1">
                    {edu.honor.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
