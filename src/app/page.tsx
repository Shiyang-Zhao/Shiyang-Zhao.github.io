import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Work from "@/components/Work/Work";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="scroll-smooth bg-white text-gray-800">
      <Navbar />
      <About />
      <Education />
      <Work />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
