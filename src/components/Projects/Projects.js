import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import React from 'react'

const Projects = () => {

  return (
    <React.Fragment>
      {projects && (<section id='projects' className='section projects'>
        <h2 className='section__title'>Projects</h2>

        <div className='projects__grid'>
          {projects.map((project) => (
            <div className='project__item'>
              <ProjectContainer key={uniqid()} project={project} />
            </div>
          ))}
        </div>
      </section>)}
    </React.Fragment>
  )
}

export default Projects
