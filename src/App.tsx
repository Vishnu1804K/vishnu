import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfessionalSummary from './components/ProfessionalSummary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-layout">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <Navbar />
      
      <main className="main-content">
        <Hero />
        <ProfessionalSummary />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <p style={{ color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} Kancherla Sri Vishnu. Built with React & Framer Motion.
        </p>
      </footer>
    </div>
  );
}

export default App;
