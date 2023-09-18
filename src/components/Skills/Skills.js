import React from 'react';
import uniqid from 'uniqid';
import { skills } from '../../portfolio';
import './Skills.css';

const Skills = () => {

  return (
    <React.Fragment>
      {skills && (<section className='section skills' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <ul className='skills__list'>
          {skills.map((skill) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain' title={skill.name}>
              <a href={skill.destination}>
                <img className='skills__list-item-icon' loading='lazy' src={skill.url} />
              </a>
            </li>
          ))}
        </ul>
      </section>)}
    </React.Fragment>
  )
}

export default Skills
