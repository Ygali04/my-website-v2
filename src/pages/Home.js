import { useRef } from 'react';
import '../styles/Home.css';

// Import all components
import Sidebar from '../components/Sidebar.js';
import Intro from '../components/Intro.js';
import MyChat from '../components/MyChat.js';
import Experience from '../components/Experience.js';
import Projects from '../components/Projects.js';
import Skills from '../components/Skills.js';
import About from '../components/About.js';
import Footer from '../components/Footer.js';

export default function Home() {
    const introRef = useRef(null);
    const chatRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const aboutRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex">
            <Sidebar
                onNavigate={(section) => {
                    switch (section) {
                        case 'intro':
                            scrollToSection(introRef);
                            break;
                        case 'mychat':
                            scrollToSection(chatRef);
                            break;
                        case 'experience':
                            scrollToSection(experienceRef);
                            break;
                        case 'projects':
                            scrollToSection(projectsRef);
                            break;
                        case 'skills':
                            scrollToSection(skillsRef);
                            break;
                        case 'about':
                            scrollToSection(aboutRef);
                            break;
                        case 'footer':
                            scrollToSection(footerRef);
                            break;
                        default:
                            console.error('Unknown section:', section);
                    }
                }}
            />
            <div className="ml-16 flex-grow">
                <div ref={introRef}>
                    <Intro chatRef={chatRef} />
                </div>
                <div ref={chatRef}>
                    <MyChat />
                </div>
                <div ref={experienceRef}>
                    <Experience />
                </div>
                <div ref={projectsRef}>
                    <Projects />
                </div>
                <div ref={skillsRef}>
                    <Skills />
                </div>
                <div ref={aboutRef}>
                    <About />
                </div>
                <div ref={footerRef}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
