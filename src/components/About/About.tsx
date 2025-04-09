import "./About.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { about, contact, profileImage } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about-section py-40 px-4 text-center">
      <div className="flex flex-col items-center space-y-6">
        <Image
          src={profileImage}
          alt={about.name}
          width={128}
          height={128}
          className="rounded-full object-cover shadow-lg"
          priority
        />

        <h1 className="text-4xl font-bold">{about.name}</h1>

        {about.description && (
          <p className="max-w-2xl text-[var(--clr-text)] opacity-80 text-base leading-relaxed">
            {about.description}
          </p>
        )}

        <div className="flex space-x-5 text-2xl">
          {about.social.github && (
            <Link
              href={about.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub />
            </Link>
          )}
          {about.social.linkedin && (
            <Link
              href={about.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </Link>
          )}
          {about.social.instagram && (
            <Link
              href={about.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </Link>
          )}
          {contact.email && (
            <Link
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="text-2xl hover:text-[var(--clr-primary)] transition-colors"
            >
              <FaEnvelope />
            </Link>
          )}
        </div>

        {/* Résumé & Transcript */}
        <div className="mt-4 flex gap-6 text-sm font-medium">
          {about.resume && (
            <Link
              href={about.resume}
              target="_blank"
              rel="noreferrer"
              className="underline text-[var(--clr-text)] hover:text-[var(--clr-primary)] transition-colors"
            >
              Résumé
            </Link>
          )}
          {about.transcript && (
            <Link
              href={about.transcript}
              target="_blank"
              rel="noreferrer"
              className="underline text-[var(--clr-text)] hover:text-[var(--clr-primary)] transition-colors"
            >
              Transcript
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
