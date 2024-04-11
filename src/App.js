import './App.css'
import { useContext, useState, useEffect, useRef } from 'react'
import { ThemeContext } from './contexts/theme'
import Background from './contexts/background'
import Header from './components/Header/Header'
import About from './components/About/About'
import Education from './components/Education/Education'
import Work from './components/Work/Work'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Life from './components/Life/Life'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [scrollDir, setScrollDir] = useState("scrollDown");
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    }, {
      rootMargin: '120px 0px',
    });

    observer.observe(domRef.current);

    const handleScroll = () => {
      setPrevScrollY(window.scrollY);
      if (prevScrollY < window.scrollY) {
        setScrollDir("scrollDown");
      } else {
        setScrollDir("scrollUp");
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.unobserve(domRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div ref={domRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${scrollDir}`}>
      {props.children}
    </div>
  )
}

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        {/* <Background /> */}
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Education />
        </FadeInSection>
        <FadeInSection>
          <Work />
        </FadeInSection>
        <FadeInSection>
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <Skills />
        </FadeInSection>
        <FadeInSection>
          <Life />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
