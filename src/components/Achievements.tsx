import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar } from 'react-icons/fi';
import { FaMedal } from 'react-icons/fa';

const achievements = [
  {
    icon: <FiAward size={28} style={{ color: 'var(--accent-primary)' }} />,
    text: "Ranked in the top 0.5% globally (Rank 2441) in Google Farewell Round A among 20,000+ participants."
  },
  {
    icon: <FiStar size={28} style={{ color: 'var(--accent-secondary)' }} />,
    text: "Achieved Global Ranks 334 and 262 in CodeChef Starters contests with peak ratings of 1619 (LeetCode) and 1615 (CodeChef)."
  },
  {
    icon: <FaMedal size={28} style={{ color: 'var(--text-primary)' }} />,
    text: "Secured Top 5 position in a HackerEarth coding contest among 200+ participants at the college level."
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass-panel"
        style={{ padding: '4rem', background: 'linear-gradient(135deg, var(--bg-glass) 0%, rgba(59, 130, 246, 0.05) 100%)' }}
      >
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>Achievements</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {achievements.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
            >
              <div style={{ padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {item.icon}
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, paddingTop: '0.5rem' }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
