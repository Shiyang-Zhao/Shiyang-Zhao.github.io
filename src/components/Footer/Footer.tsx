import Link from "next/link";
import "./Footer.css";
import { about, contact } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer-section py-6 px-4 text-center text-sm">
      <div className="max-w-4xl mx-auto">
        <p className="mb-2">
          Made with ❤️ by {about.name}. Feel free to reach out:
          <Link
            href={`mailto:${contact.email}`}
            className="footer-link underline ml-1"
          >
            {contact.email}
          </Link>
        </p>
        <p className="text-gray-500">
          © {new Date().getFullYear()} {about.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
