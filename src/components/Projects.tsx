import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX } from 'react-icons/fi';

interface Project {
  title: string;
  link?: string;
  techStack: string[];
  description: string;
  points: string[];
}

const projects: Project[] = [
  {
    title: "RealtyForum360",
    link: "https://realtyforum360.com/",
    techStack: ["React.js", "Node.js", "MongoDB"],
    description: "A specialized real estate discussion platform connecting property buyers, investors, and consultants through peer-vetted project reviews and market insights.",
    points: [
      "Implemented server-side rendering (SSR) for high-traffic Forum pages, improving initial load times.",
      "Optimized Landmark Website achieving 100% SEO score, 90% best practices rating, and 78% performance score, attracting 30 lakh+ visitors.",
      "Built 5+ reusable React custom hooks reducing duplicate logic across 15+ components.",
      "Designed and implemented Bitbucket CI/CD pipelines to automate build and deployment processes."
    ]
  },
  {
    title: "Prospects (CMS Platform)",
    // CMS typically internal, no public live link provided
    techStack: ["Angular", "Node.js", "MongoDB"],
    description: "Specialized real estate CRM designed to track leads and manage the transition from initial bids to active projects.",
    points: [
      "Implemented thread-safe OAuth token refresh in ZoomService using semaphores.",
      "Integrated Zoom Webinar APIs with cron job scheduling and message queues for 500+ clients.",
      "Implemented Redis server-side caching optimizing user permissions and API latency.",
      "Added lazy loading and server-side pagination reducing bundle size by 40%."
    ]
  },
  {
    title: "Inncircles Arena",
    link: "https://inncircles.com/",
    techStack: ["Angular", "MongoDB"],
    description: "AI-powered, cloud-based construction management platform that digitizes the entire project lifecycle from planning to handover.",
    points: [
      "Integrated Socket.io to build a real-time chat support feature enabling seamless communication.",
      "Built data-heavy Angular modules from Figma designs for Equipment, Bid Management, and Expense Tracker.",
      "Wrote complex MongoDB aggregation pipelines for deep data insights and tracking.",
      "Developed Node.js scripts to handle smooth data migration between schemas."
    ]
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel" 
              style={{ display: 'flex', flexDirection: 'column', padding: '2rem', cursor: 'pointer' }}
              onClick={() => setSelectedProject(project)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.4rem' }}>{project.title}</h3>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-glass-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiExternalLink size={16} style={{ color: 'var(--text-secondary)' }} />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.techStack.map(tech => (
                  <span key={tech} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--accent-primary)', border: '1px solid var(--border-color)' }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flexGrow: 1, margin: 0 }}>
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(5, 5, 5, 0.85)', backdropFilter: 'blur(12px)',
              zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '1200px',
                height: '80vh',
                display: 'flex',
                overflow: 'hidden',
                position: 'relative'
              }}
              onClick={e => e.stopPropagation()}
              className="project-modal-content"
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                style={{ 
                  position: 'absolute', top: '15px', right: '15px', zIndex: 10, 
                  background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', 
                  color: 'white', width: '40px', height: '40px', borderRadius: '50%', 
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <FiX size={20} />
              </button>

              {/* Left Side iframe */}
              <div className="modal-iframe-container" style={{ flex: '1', borderRight: '1px solid var(--border-color)', background: 'var(--bg-secondary)', position: 'relative' }}>
                {selectedProject.link ? (
                  <iframe 
                    src={selectedProject.link} 
                    style={{ width: '100%', height: '100%', border: 'none', background: 'white' }} 
                    title={selectedProject.title} 
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--border-hover)' }}>
                    <FiExternalLink size={64} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                    <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>No External Preview</span>
                  </div>
                )}
              </div>
              
              {/* Right Side Content */}
              <div className="modal-info-container" style={{ flex: '1.2', padding: '3.5rem', overflowY: 'auto' }}>
                <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  {selectedProject.title}
                </h2>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {selectedProject.techStack.map(tech => (
                    <span key={tech} style={{ fontSize: '0.85rem', padding: '0.3rem 1rem', borderRadius: '50px', background: 'var(--bg-glass)', color: 'var(--accent-primary)', border: '1px solid var(--border-color)' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  {selectedProject.description}
                </p>

                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  My Work & Responsibilities
                </h3>
                
                <ul style={{ paddingLeft: '0', listStyleType: 'none', color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {selectedProject.points.map((pt, i) => (
                    <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent-primary)', marginTop: '6px' }}>•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
