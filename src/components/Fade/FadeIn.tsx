"use client";
import React, { useState, useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const [isVisible, setVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState("scrollDown");
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      {
        rootMargin: "100px 0px",
      }
    );

    const currentDomRef = domRef.current;

    if (currentDomRef) {
      observer.observe(currentDomRef);
    }

    const handleScroll = () => {
      setPrevScrollY(window.scrollY);
      if (prevScrollY < window.scrollY) {
        setScrollDir("scrollDown");
      } else {
        setScrollDir("scrollUp");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (currentDomRef) {
        observer.unobserve(currentDomRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } ${scrollDir}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
