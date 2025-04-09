"use client";
import Link from "next/link";
import { useTheme } from "@/contexts/theme";
import { FiSun, FiMoon } from "react-icons/fi";
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

  return (
    <nav className="navbar fixed top-0 w-full z-50">
      <div className="w-full px-4 flex justify-between items-center py-4">
        <div className="text-xl font-bold">
          <Link href={header.homepage || "/"}>{header.title}</Link>
        </div>
        <div className="flex items-center space-x-4">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="navbar-link text-gray-700 hover:text-blue-500"
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
            className="navbar-link text-gray-700 hover:text-blue-500 transition cursor-pointer"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {themeName === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </Link>
        </div>
      </div>
    </nav>
  );
}
