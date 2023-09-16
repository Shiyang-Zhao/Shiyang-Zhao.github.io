import uniqid from 'uniqid'
import { education } from '../../portfolio'
import './Education.css'
import React from 'react'

const Education = () => {

  return (
    <React.Fragment>
      {education && (<section id='education' className='section education'>
        <h2 className='section__title'>Education</h2>

        <div className='education__grid'>
          {education.map((ed) => (
            <div key={uniqid()} className='education__item'>
              <h3 className='education__university'>{ed.university}</h3>
              <p className='education__degree'>{ed.degree}</p>
              <p className='education__date'>{`${ed.startDate} - ${ed.endDate}`}</p>
              <p className='education__gpa'>GPA: {ed.GPA}</p>
              <div className='education__honors'>
                <h4 className='education__honor-title'>Honors:</h4>
                <ul className='education__honor-list'>
                  {ed.honor.map((h) => (
                    <li key={uniqid()}>{h}</li>
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

export default Education
