"use client";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/EmailSharp";
import Typewriter from "typewriter-effect";
import { profileImageLight, profileImageDark } from "@/data/portfolio";
import { useTheme } from "@/contexts/theme";
import { about, contact } from "@/data/portfolio";
import "./About.css";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  const { themeName } = useTheme();
  const { name, role, description, resume, transcript, social } = about;

  return (
    <div className="about">
      <div className="about__left">
        {themeName === "light" ? (
          <Image
            src={profileImageLight}
            alt="Profile"
            className="profile__image__light"
            width={480}
            height={480}
            priority
          />
        ) : (
          <Image
            src={profileImageDark}
            alt="Profile"
            className="profile__image__dark"
            width={480}
            height={480}
            priority
          />
        )}
      </div>

      <div className="about__right">
        {name && (
          <div className="about__greeting">
            <h1>
              Hi, I am {name}
              <span>Hi, I am {name}</span>
              <span>Hi, I am {name}</span>
              <span>Software Engineer</span>
            </h1>
          </div>
        )}

        {role && <h2 className="about__role">A {role}</h2>}
        <div className="about__desc1">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(description).pauseFor(1000).start();
            }}
          />
        </div>
        <div className="about__contact center">
          {resume && (
            <Link href={resume} target="_blank" rel="noreferrer">
              <button type="button" className="btn btn--outline">
                Resume
              </button>
            </Link>
          )}
          {transcript && (
            <Link href={transcript} target="_blank" rel="noreferrer">
              <button type="button" className="btn btn--outline">
                Transcript
              </button>
            </Link>
          )}

          {social && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
