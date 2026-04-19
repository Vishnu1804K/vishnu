import React from 'react';
import { motion } from 'framer-motion';
import { FiTerminal } from 'react-icons/fi';

const ProfessionalSummary: React.FC = () => {
  return (
    <section id="summary" className="container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Professional Summary</h2>
        
        <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05 }}>
            <FiTerminal size={200} />
          </div>
          
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
            Software Engineer with 1.5+ years of experience building and scaling web applications in a product-driven environment. Full-stack developer skilled in React, Angular, and Node.js. 
            <br /><br />
            Worked extensively with Cloud Technologies (AWS), maintaining a strong focus on performance optimization and reusable architecture. Experienced in developing REST APIs, implementing Redis caching, and setting up CI/CD pipelines to deliver reliable, scalable, and high-impact solutions.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalSummary;
