import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/EmailSharp'

import { profileImageLight, profileImageDark } from '../../portfolio'
import { ThemeContext } from '../../contexts/theme'
import { about, contact } from '../../portfolio'
import { useContext } from 'react'
import Typewriter from 'typewriter-effect'
import './About.css'


const About = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const { name, role, description, resume, transcript, social } = about

  return (
    <div className='about'>
      <div className='about__left'>
        {/* <img src={themeName === 'light' ? profileImageLight : profileImageDark} alt='Profile' className='profile__image' /> */}
        {themeName === 'light' ? <img src={profileImageLight} alt='Profile' className='profile__image__light' /> : <img src={profileImageDark} alt='Profile' className='profile__image__dark' />}
      </div>

      <div className='about__right'>
        {name && (
          <div className='about__greeting'>
            <h1>
              Hi, I am {name}
              <span>Hi, I am {name}</span>
              <span>Hi, I am {name}</span>
              <span>Software Engineer</span>
            </h1>
          </div>
        )}

        {role && <h2 className='about__role'>A {role}</h2>}
        <div className='about__desc1'>
          <Typewriter onInit={(typewriter) => {
            typewriter
              .typeString(`${description && description}`)
              .pauseFor(1000)
              .start();
          }}></Typewriter>
        </div>
        <div className='about__desc2'>{description}</div>
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

              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  aria-label='email'
                  className='link link--icon'
                  rel="noreferrer"
                >
                  <EmailIcon />
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
