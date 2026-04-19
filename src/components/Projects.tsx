import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX } from 'react-icons/fi';

interface Project {
  title: string;
  link?: string;
  techStack: string[];
  description: string;
  role: string;
  points: string[];
}

const projects: Project[] = [
  {
    title: "RealtyForum360",
    link: "https://realtyforum360.com/",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "BitBucket Pipelines (CI/CD)", "REST APIs", "SEO Optimization", "AWS CloudFront"],
    description: "RealtyForum360 is a specialized real estate discussion platform that connects property buyers, investors, and consultants through community-reviewed project reviews and market insights. It is particularly active in the Hyderabad market, providing a community space to track construction updates, discuss legal approvals, and share honest feedback on major residential developments.",
    role: "Worked as an individual contributor, collaborating closely with team leads and senior developers to streamline technical workflows and deliver features supporting successful project releases.",
    points: [
      "Implemented server-side rendering (SSR) for high-traffic Forum pages, improving initial load times and search engine indexability.",
      "Optimized RealtyForum360 platform achieving 100% SEO score, 90% best practices rating, and 78% performance score in production, attracting 30 lakh+ website visitors from various global regions.",
      "Built 5+ reusable React custom hooks (data fetching, debounce, intersection observer, localStorage, cached API), reducing duplicate logic across 15+ components and improving development efficiency by 30%.",
      "Built reusable shared components across RealtyForum360 applications improving reusability, consistency, and enforcing standard coding practices.",
      "Designed and implemented CI/CD pipelines to automate build and deployment processes, ensuring consistent and reliable releases."
    ]
  },
  {
    title: "Prospects (CMS Platform)",
    techStack: ["Angular", "Node.js", "Express.js", "MongoDB", "Redis", "REST APIs", "BullMQ", "EJS", "CronJobs", "Zoom API", "TailwindCSS", "PrimeNg"],
    description: "Prospects is a specialized real estate CRM designed to track leads and manage the transition from initial bids to active projects. It features data-driven analytics to monitor user engagement during webinars and site visits, helping developers optimize their sales funnel and increase conversion rates.",
    role: "Independently led the project for three months, managing end-to-end workflows while mentoring and training an intern to enhance team productivity.",
    points: [
      "Implemented thread-safe OAuth token refresh in a singleton ZoomService using semaphores to handle race conditions across 8+ concurrent requests, achieving 100% token refresh reliability.",
      "Integrated Zoom Webinar APIs with cron jobs and message queues to automate event notifications for 500+ clients, saving manual effort by 10 hours per week",
      "Implemented server-side caching using Redis and in-memory caching to optimize user permissions and API responses, reducing database load, and improving API latency.",
      "Developed 4+ reusable UI components to standardize the interface and reduce duplicate code across the Prospects Platform.",
      "Added lazy loading and server-side pagination in Prospects Platform, reducing initial bundle size by 40% and lowering memory usage by 35% for datasets exceeding 10,000 records.",
      "Created reusable email templates using EJS to generate dynamic, user-specific content."
    ]
  },
  {
    title: "Inncircles Arena",
    link: "https://inncircles.com/",
    techStack: ["Angular", "Node.js", "Express.js", "MongoDB"],
    description: "Inncircles Arena is an AI-powered, cloud-based construction management platform that digitizes the entire project lifecycle from planning to handover. It streamlines field-to-office communication through real-time mobile updates, automated document control, and predictive analytics to prevent cost overruns and schedule delays.",
    role: "Collaborated closely with team leads and senior developers to streamline technical workflows and deliver features that contributed to successful project launches.",
    points: [
      "Developed Excel export functionality in Inncircles Arena Platform, streamlining data extraction across multiple modules and improving reporting efficiency.",
      "Built data-heavy modules from Figma designs for Equipment Management, Bid Management, and Expense Tracker modules.",
      "Wrote complex aggregation for Bid Management and Expense Tracker modules.",
      "Developed Node.js scripts to handle schema changes ensuring, seamless data migration and system continuity for Equipment Management and Expense Tracker modules."
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
                {project.techStack.slice(0, 5).map(tech => (
                  <span key={tech} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--accent-primary)', border: '1px solid var(--border-color)' }}>
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 5 && (
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'transparent', color: 'var(--text-secondary)' }}>
                    +{project.techStack.length - 5} more
                  </span>
                )}
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flexGrow: 1, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
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
              zIndex: 1000, 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem 1rem',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch'
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
                height: 'auto',
                minHeight: '600px',
                display: 'flex',
                overflow: 'hidden',
                position: 'relative',
                margin: 'auto 0'
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
              <div className="modal-info-container" style={{ flex: '1.2', padding: '3.5rem' }}>
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

                <div style={{ marginBottom: '2.5rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>About</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', margin: 0 }}>
                    {selectedProject.description}
                  </p>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Role</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem', margin: 0 }}>
                    {selectedProject.role}
                  </p>
                </div>

                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  My Contributions
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
