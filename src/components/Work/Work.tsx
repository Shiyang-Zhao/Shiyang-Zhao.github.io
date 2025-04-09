import Link from "next/link";
import "./Work.css";
import { work } from "@/data/portfolio";

export default function Work() {
  return (
    <section id="work" className="work-section py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Work</h2>
        <div className="space-y-10">
          {work.map((job, idx) => (
            <div
              key={idx}
              className="work-card flex flex-col md:flex-row md:items-start gap-6"
            >
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-16 h-16 object-contain"
              />
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-center">
                  <Link
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl font-semibold hover:underline"
                  >
                    {job.company}
                  </Link>
                  <span className="text-sm text-[var(--clr-text)] opacity-80">
                    {job.startDate} – {job.endDate}
                  </span>
                </div>

                <p className="text-[var(--clr-text)] opacity-90">
                  {job.jobTitle}
                </p>
                <p className="text-sm text-[var(--clr-text)] opacity-70 mb-2">
                  {job.location}
                </p>

                <ul className="list-disc list-outside pl-5 text-sm text-[var(--clr-text)] opacity-80 space-y-1">
                  {job.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-2 text-xs text-[var(--clr-text)] opacity-70">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-[var(--clr-card-bg)] border border-[var(--clr-border)] rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
