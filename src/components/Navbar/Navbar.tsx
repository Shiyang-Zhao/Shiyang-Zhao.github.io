"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/contexts/theme";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { header } from "@/data/portfolio";
import "./Navbar.css";

const sections = [
  "about",
  "education",
  "work",
  "projects",
  "skills",
];

export default function Navbar() {
  const { themeName, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="navbar fixed top-0 w-full z-50 max-h-screen overflow-y-auto">
      <div className="w-full px-4 flex justify-between items-center py-4">
        <div className="text-xl font-bold">
          <Link href={header.homepage || "/"}>{header.title}</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="navbar-link"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          <Link
            onClick={(e) => {
              e.preventDefault();
              toggleTheme();
            }}
            href="#"
            className="navbar-link transition cursor-pointer"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {themeName === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center space-y-3 pb-4 h-screen">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              onClick={() => setOpen(false)}
              className="navbar-link"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          <button
            onClick={() => {
              toggleTheme();
              setOpen(false);
            }}
            className="navbar-link"
          >
            {themeName === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
        </div>
      )}
    </nav>
  );
}
