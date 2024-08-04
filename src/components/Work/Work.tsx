import { v4 as uuidv4 } from "uuid";
import { work } from "@/data/portfolio";
import "./Work.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Work: React.FC = () => {
  return (
    <React.Fragment>
      {work && (
        <section id="work" className="section work">
          <h2 className="section__title">Work Experience</h2>

          <div className="work__grid">
            {work.map((job) => (
              <div key={uuidv4()} className="work__item">
                <h3 className="work__title">
                  <Link href={job.url} target="_blank" rel="noreferrer">
                    <Image
                      className="work__logo"
                      alt="logo"
                      src={job.logo}
                      width={64}
                      height={64}
                      loading="lazy"
                    />
                  </Link>
                  {job.jobTitle}
                </h3>
                <p className="work__company">{job.company}</p>
                <p className="work__dates">{`${job.startDate} - ${job.endDate}`}</p>
                <p className="work__location">{job.location}</p>
                <div className="work__description">
                  {job.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </div>
                <div className="work__skills">
                  <h4 className="work__skills-title">Skills:</h4>
                  <ul className="work__skills-list">
                    {job.skills.map((skill) => (
                      <li key={uuidv4()} className="work__skill">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Work;
