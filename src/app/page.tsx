"use client";
import { useTheme } from "@/contexts/theme";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Work from "@/components/Work/Work";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import FadeIn from "@/components/Fade/FadeIn";

const Home = () => {
  const { themeName } = useTheme();

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Education />
        </FadeIn>
        <FadeIn>
          <Work />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
