"use client";
import React, { useState } from "react";
import { useTheme } from "@/contexts/theme";
import {
  education,
  work,
  projects,
  skills,
  contact,
} from "@/data/portfolio";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { header } from "@/data/portfolio";
import "./Header.css";
import Link from "next/link";

const Header: React.FC = () => {
  const { homepage, title } = header;
  const { themeName, toggleTheme } = useTheme();
  const [showNavList, setShowNavList] = useState<boolean>(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <Link href={homepage} className="link">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>

      <nav className="center nav">
        <ul
          style={{ display: showNavList ? "flex" : undefined }}
          className="nav__list"
        >
          {education.length ? (
            <li className="nav__list-item">
              <Link
                href="#education"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Education
              </Link>
            </li>
          ) : null}

          {work.length ? (
            <li className="nav__list-item">
              <Link
                href="#work"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Work
              </Link>
            </li>
          ) : null}

          {projects.length ? (
            <li className="nav__list-item">
              <Link
                href="#projects"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Projects
              </Link>
            </li>
          ) : null}

          {skills.length ? (
            <li className="nav__list-item">
              <Link
                href="#skills"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Skills
              </Link>
            </li>
          ) : null}

          {contact.email ? (
            <li className="nav__list-item">
              <Link
                href="#contact"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Contact
              </Link>
            </li>
          ) : null}
        </ul>

        <button
          type="button"
          onClick={toggleTheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          title="Toggle the theme"
        >
          {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>

        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
