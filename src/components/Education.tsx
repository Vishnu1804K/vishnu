import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate } from 'react-icons/fa';

const Education: React.FC = () => {
  return (
    <section id="education" className="container" style={{ paddingBottom: '8rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        
        <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-30px', bottom: '-40px', opacity: 0.05, transform: 'rotate(-15deg)' }}>
            <FaUserGraduate size={250} />
          </div>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'flex-start', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  B.Tech in Computer Science and Engineering
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                  Vignan's Institute of Information Technology — Visakhapatnam
                </p>
              </div>
              <span style={{ padding: '0.4rem 1rem', borderRadius: '50px', background: 'var(--bg-glass-hover)', fontSize: '0.9rem', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}>
                2021 – 2025
              </span>
            </div>
            
            <div style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ 
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)', 
                padding: '0.5rem 1.25rem', 
                borderRadius: '8px', 
                color: 'white',
                fontWeight: 600,
                boxShadow: '0 4px 15px var(--accent-glow)'
              }}>
                CGPA: 8.6 / 10.0
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
