import React from "react";
import { v4 as uuidv4 } from "uuid";
import { education } from "../../data/portfolio";
import "./Education.css";
import Link from "next/link";
import Image from "next/image";

const Education: React.FC = () => {
  return (
    <React.Fragment>
      {education && (
        <section id="education" className="section education">
          <h2 className="section__title">Education</h2>
          <div className="education__grid">
            {education.map((ed) => (
              <div key={uuidv4()} className="education__item">
                <div>
                  <h3 className="education__university">
                    <Link href={ed.url} target="_blank" rel="noreferrer">
                      <Image
                        className="education__logo"
                        alt="logo"
                        src={ed.logo}
                        width={64}
                        height={64}
                        loading="lazy"
                      />
                    </Link>
                    {ed.university}
                  </h3>
                  <p className="education__degree">{ed.degree}</p>
                  <p className="education__date">{`${ed.startDate} - ${ed.endDate}`}</p>
                  <p className="education__gpa">GPA: {ed.GPA}</p>
                  <div className="education__honors">
                    <h4 className="education__honor-title">Honors:</h4>
                    <ul className="education__honor-list">
                      {ed.honor.map((h) => (
                        <li key={uuidv4()}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Education;
