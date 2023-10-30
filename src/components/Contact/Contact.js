import { useState } from 'react'
import { about, contact } from '../../portfolio'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/EmailSharp'
import './Contact.css'

const Contact = () => {
  const { social } = about;
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div>
        {/* {social.github && (
          <a
            href={social.github}
            aria-label='github'
            className='link link--icon'
            target='_blank'
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        )} */}

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
        {contact.email && <a
          href={`mailto:${contact.email}`}
          aria-label='email'
          className='link link--icon'
          rel="noreferrer"
        >
          <EmailIcon />
        </a>}
      </div>
    </section >
  )
}

export default Contact
