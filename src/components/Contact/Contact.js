import { contact } from '../../portfolio'
import EmailIcon from '@mui/icons-material/EmailSharp'
import './Contact.css'
import { useState } from 'react'

const Contact = () => {

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a
        href={`mailto:${contact.email}`}
        aria-label='email'
        className='link link--icon'
        rel="noreferrer"
      >
        <EmailIcon />
      </a>
    </section >
  )
}

export default Contact
