import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import profileImage from '../../files/ProfileImage/profileImage.jpg'
import { about } from '../../portfolio'
import Typewriter from 'typewriter-effect'
import './About.css'

const About = () => {
  const { name, role, description, resume, transcript, social } = about

  return (
    <div className='about'>
      <div className='about__left'>
        <img src={profileImage} alt='Profile' width={450} className='profile__image'/>
      </div>

      <div className='about__right'>
        {name && (
          <div className='about_greeting'>
            <h1>
              Hi, I am {name}
              <span>Hi, I am {name}</span>
              <span>Hi, I am {name}</span>
              <span>Software Engineer</span>
            </h1>
          </div>
        )}

        {role && <h2 className='about__role'>A {role}</h2>}
        <div className='about__desc'>
          <Typewriter onInit={(typewriter) => {
            typewriter
              .typeString(`${description && description}`)
              .pauseFor(1000)
              .start();
          }}></Typewriter>
        </div>
        <div className='about__contact center'>
          {resume && (
            <a href={resume} target="_blank" rel="noreferrer">
              <span type='button' className='btn btn--outline' >
                Resume
              </span>
            </a>
          )}
          {transcript && (
            <a href={transcript} target="_blank" rel="noreferrer">
              <span type='button' className='btn btn--outline' >
                Transcript
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                  target='_blank'
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                  target='_blank'
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              )}

              {social.instagram && (
                <a
                  href={social.instagram}
                  aria-label='instagram'
                  className='link link--icon'
                  target='_blank'
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
