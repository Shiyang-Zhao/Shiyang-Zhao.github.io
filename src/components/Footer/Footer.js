import { contact } from '../../portfolio'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a href={`mailto:${contact.email}`} className='link footer__link'>
      shiyang2575326696@gmail.com
    </a>
  </footer>
)

export default Footer

