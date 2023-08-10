import { useEffect, useRef, useCallback, useMemo  } from 'react';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Research from './Research';
import Home from './Home';
import Head from 'next/head';
import { FaHome, FaBriefcase, FaFlask, FaUser, FaEnvelope } from 'react-icons/fa';


export default function Layout() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const researchRef = useRef(null);
    const contactRef = useRef(null);

    const sections = useMemo(() => [
        homeRef, aboutRef, experienceRef, researchRef, contactRef
    ], [homeRef, aboutRef, experienceRef, researchRef, contactRef]);

    const currentSectionIndex = useRef(0);

    const scrollToSection = useCallback((index) => {
        sections[index].current.scrollIntoView({ behavior: 'smooth' });
        currentSectionIndex.current = index;
    }, [sections]);

    useEffect(() => {
        let lastScrollTime = 0;

        const handleScroll = (e) => {
            const currentTime = new Date().getTime();

            if (currentTime - lastScrollTime > 200) { 
                const isScrollingUp = e.deltaY < 0;
                
                if (isScrollingUp) {
                    currentSectionIndex.current = Math.max(currentSectionIndex.current - 1, 0); // Updated this line
                } else {
                    currentSectionIndex.current = Math.min(currentSectionIndex.current + 1, sections.length - 1); // Updated this line
                }

                scrollToSection(currentSectionIndex.current); // Updated this line
                lastScrollTime = currentTime;
            }

            e.preventDefault();
        };

        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => window.removeEventListener('wheel', handleScroll);
    }, [scrollToSection, sections.length]);

    return (
        <div>
            <Head>
            <title>Thijs Overmeer - Scientific Programmer | AI Expert at EAISI | University of Technology in Eindhoven Graduate</title>
                {/* Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-T8RTM21YR1"></script>
                <script>
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-T8RTM21YR1');
                    `}
                </script>
            </Head>
            <header>
                <div className="logo">Thijs Overmeer</div>
                <div>
                    <button onClick={() => scrollToSection(0)}>
                        <FaHome />
                    </button>
                    <button onClick={() => scrollToSection(1)}>
                        <FaUser />
                    </button>
                    <button onClick={() => scrollToSection(2)}>
                        <FaBriefcase />
                    </button>
                    <button onClick={() => scrollToSection(3)}>
                        <FaFlask />
                    </button>
                    <button onClick={() => scrollToSection(4)}>
                        <FaEnvelope />
                    </button>
                </div>
            </header>

            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={experienceRef}>
                <Experience />
            </div>
            <div ref={researchRef}>
                <Research />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </div>
    );
}
