import React from "react";
import { about, contact } from "@/data/portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/EmailSharp";
import "./Contact.css";
import Link from "next/link";

const Contact: React.FC = () => {
  const { social } = about;

  return (
    <section id="contact" className="section contact">
      <h2 className="section__title">Contact</h2>
      <div className="icons">
        {social.github && (
          <Link
            href={social.github}
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </Link>
        )}
        {social.linkedin && (
          <Link
            href={social.linkedin}
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </Link>
        )}
        {social.instagram && (
          <Link
            href={social.instagram}
            aria-label="instagram"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </Link>
        )}
        {contact.email && (
          <Link
            href={`mailto:${contact.email}`}
            aria-label="email"
            className="link link--icon"
            rel="noreferrer"
          >
            <EmailIcon />
          </Link>
        )}
      </div>
    </section>
  );
};

export default Contact;
