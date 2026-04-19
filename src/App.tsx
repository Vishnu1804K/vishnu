
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProfessionalSummary from './components/ProfessionalSummary.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Achievements from './components/Achievements.tsx';
import Education from './components/Education.tsx';
import Contact from './components/Contact.tsx';

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
