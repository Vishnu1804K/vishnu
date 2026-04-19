import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiDatabase, FiCloud, FiCommand } from 'react-icons/fi';

const skillCategories = [
  {
    category: "Languages",
    icon: <FiCode size={24} />,
    skills: ["JavaScript (ES6+)", "TypeScript", "SQL", "C++", "C", "Python"]
  },
  {
    category: "Frontend",
    icon: <FiLayout size={24} />,
    skills: ["React.js", "Angular", "Tailwind CSS", "Bootstrap", "PrimeNG"]
  },
  {
    category: "Backend & APIs",
    icon: <FiServer size={24} />,
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "JWT"]
  },
  {
    category: "Databases & Cache",
    icon: <FiDatabase size={24} />,
    skills: ["MySQL", "MongoDB", "Redis"]
  },
  {
    category: "Cloud, CI/CD",
    icon: <FiCloud size={24} />,
    skills: ["AWS (CloudFront, EC2, Lambda)", "Git (GitHub, Bitbucket)", "Bitbucket Pipelines", "BullMQ"]
  },
  {
    category: "Concepts",
    icon: <FiCommand size={24} />,
    skills: ["Full-Stack Development", "OOP", "System Design", "Code Reviews", "Caching", "Message Queues", "Cron Jobs", "Pub/Sub", "Indexing", "Concurrency"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container" style={{ paddingBottom: '8rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Technical Expertise</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '2rem',
                alignItems: 'center',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '2rem',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                borderColor: 'var(--accent-primary)',
                boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.15)',
                x: 5
              }}
            >
              {/* Left side: Category Title & Icon */}
              <div style={{ flex: '1 1 200px', display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ 
                  width: '56px', height: '56px', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  borderRadius: '16px', 
                  background: 'var(--bg-primary)', 
                  color: 'var(--accent-primary)', 
                  border: '1px solid var(--border-color)',
                  boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)'
                }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 600, color: 'var(--text-primary)' }}>
                  {category.category}
                </h3>
              </div>

              {/* Right side: Skill Pills */}
              <div style={{ flex: '3 1 400px', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ 
                      y: -2, 
                      scale: 1.05,
                      background: 'var(--accent-primary)', 
                      color: '#fff', 
                      borderColor: 'var(--accent-primary)' 
                    }}
                    style={{
                      padding: '0.55rem 1.2rem',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500,
                      cursor: 'default',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
