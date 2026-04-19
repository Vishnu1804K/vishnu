import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: "Software Engineer",
    company: "Inncircles Technologies Private Limited",
    period: "May 2025 – Present",
    description: "Developing scalable full-stack applications with an emphasis on code quality, performance, and best practices.",
    techStack: ["React.js", "Node.js", "MongoDB", "AWS", "CI/CD"]
  },
  {
    role: "SDE Intern",
    company: "Inncircles Technologies Private Limited",
    period: "August 2024 – April 2025",
    description: "Assisted in building core modules, optimizing database queries, and setting up standardized tools for cross-functional teams.",
    techStack: ["Angular", "Node.js", "MongoDB", "Redis", "Socket.io"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="container" style={{ position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>

        <div style={{ position: 'relative', marginLeft: '1rem' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '20px', top: '10px', bottom: '10px', width: '2px', background: 'var(--border-color)' }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ position: 'relative', paddingLeft: '4rem' }}
              >
                {/* Timeline Dot */}
                <div style={{ 
                  position: 'absolute', 
                  left: '11px', 
                  top: '6px', 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--accent-primary)',
                  boxShadow: '0 0 10px var(--accent-glow)'
                }}></div>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                      <p style={{ color: 'var(--accent-primary)', fontWeight: 500 }}><FiBriefcase size={16} style={{ display: 'inline', marginBottom: '-2px', marginRight: '6px' }}/>{exp.company}</p>
                    </div>
                    <span style={{ padding: '0.25rem 0.75rem', borderRadius: '50px', background: 'var(--bg-glass-hover)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{exp.period}</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{exp.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.techStack.map(tech => (
                      <span key={tech} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'var(--bg-secondary)', color: 'var(--accent-secondary)', border: '1px solid var(--border-color)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
