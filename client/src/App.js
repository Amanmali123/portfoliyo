import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import DarkModeToggle from './DarkModeToggle';
import AboutMe from './AboutMe';

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-teal-200 to-blue-400 dark:from-gray-900 dark:to-gray-800 flex flex-col">
        {/* Navigation Bar */}
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-transparent">
          <div className="text-2xl font-bold text-white tracking-wide"></div>
          <ul className="flex space-x-8 text-white font-medium">
            <li><a href="#home" className="hover:text-blue-200 transition">Home</a></li>
            <li><a href="#portfolio" className="hover:text-blue-200 transition">Portfolio</a></li>
            <li><a href="#about" className="hover:text-blue-200 transition">About</a></li>
            <li><a href="#services" className="hover:text-blue-200 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-200 transition">Contact Me</a></li>
          </ul>
        </nav>
        {/* Hero Section */}
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between flex-1 px-8 md:px-20 py-12 md:py-0">
          {/* Background Image Overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/premium_photo.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.25,
              filter: 'blur(2px)'
            }}
            aria-hidden="true"
          ></div>
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 mt-8 md:mt-0">Hello, I'm</h1>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-2">Aman Mali</h2>
            <br></br>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">Full-stack developer & passionate coder</p>
           <p className="text-lg md:text-xl text-gray-500 dark:text-gray-200 mb-6">"Hard work beats talent when talent doesn't work hard"</p>
          </div>
          {/* Right: Illustration */}
          <div className="flex-1 flex justify-center items-center mb-8 md:mb-0 z-10">
            <img
              src="/image.png"
              alt="Man working on laptop illustration"
              className="w-80 h-80 object-contain drop-shadow-xl rounded-xl bg-white/60 p-2"
            />
          </div>
        </section>
        <AboutMe id="about" />
        <Projects id="portfolio" />
        <Skills />
        <Experience id="services" />
        <Certifications />
        <Contact id="contact" />
      </div>
      <Footer />
    </>
  );
}

export default App;
