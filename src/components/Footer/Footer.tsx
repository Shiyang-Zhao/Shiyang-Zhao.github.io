import React from "react";
import { contact } from "../../data/portfolio";
import "./Footer.css";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="footer">
    <Link href={`mailto:${contact.email}`} className="link footer__link">
      {contact.email}
    </Link>
  </footer>
);

export default Footer;
