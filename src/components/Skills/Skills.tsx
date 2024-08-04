import React from "react";
import { v4 as uuidv4 } from "uuid";
import { skills } from "@/data/portfolio";
import "./Skills.css";
import Link from "next/link";
import Image from "next/image";

const Skills: React.FC = () => {
  return (
    <React.Fragment>
      {skills && (
        <section className="section skills" id="skills">
          <h2 className="section__title">Skills</h2>
          <ul className="skills__list">
            {skills.map((skill) => (
              <Link
                href={skill.destination}
                target="_blank"
                key={uuidv4()}
                rel="noopener noreferrer"
              >
                <li
                  className="skills__list-item btn btn--plain"
                  title={skill.name}
                >
                  <Image
                    className="skills__list-item-icon"
                    loading="lazy"
                    width={48}
                    height={48}
                    src={skill.url}
                    alt={skill.name}
                  />
                </li>
              </Link>
            ))}
          </ul>
        </section>
      )}
    </React.Fragment>
  );
};

export default Skills;
