import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "SQL", "C++", "C", "Python"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Angular", "AngularJS", "Redux", "Tailwind CSS", "Bootstrap", "PrimeNG"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets"]
  },
  {
    category: "Databases & Cache",
    skills: ["MySQL", "MongoDB", "Firebase", "Redis"]
  },
  {
    category: "Cloud & DevSecOps",
    skills: ["AWS Services", "AWS Lambda", "Amazon S3", "PySpark", "Git", "Bitbucket CI/CD"]
  },
  {
    category: "Concepts & Practices",
    skills: ["Full-Stack Development", "OOP", "System Design", "Agile/Scrum", "Code Reviews", "Caching", "Message Queues", "Cron Jobs"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Technical Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel" 
              style={{ padding: '2rem' }}
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                {category.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    style={{ 
                      fontSize: '0.85rem', 
                      padding: '0.3rem 0.8rem', 
                      borderRadius: '50px', 
                      background: 'var(--bg-glass)', 
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {skill}
                  </span>
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
