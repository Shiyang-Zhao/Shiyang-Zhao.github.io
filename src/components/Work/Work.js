import uniqid from 'uniqid'
import { work } from '../../portfolio'
import './Work.css'
import React from 'react'

const Work = () => {

  return (
    <React.Fragment>
      {work && (<section id='work' className='section work'>
        <h2 className='section__title'>Work Experience</h2>

        <div className='work__grid'>
          {work.map((job) => (
            <div key={uniqid()} className='work__item'>
              <h3 className='work__title'><a href={job.url} target="_blank">
                <img className='work__logo' src={job.logo} loading='lazy'/>
              </a>
                {job.jobTitle}
              </h3>
              <p className='work__company'>{job.company}</p>
              <p className='work__dates'>{`${job.startDate} - ${job.endDate}`}</p>
              <p className='work__location'>{job.location}</p>
              <p className='work__description'>{job.description}</p>
              <div className='work__skills'>
                <h4 className='work__skills-title'>Skills:</h4>
                <ul className='work__skills-list'>
                  {job.skills.map((skill) => (
                    <li key={uniqid()} className='work__skill'>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>)}
    </React.Fragment>
  )
}

export default Work
