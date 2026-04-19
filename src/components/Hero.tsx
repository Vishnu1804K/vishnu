import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, stiffness: 300, damping: 24 }
    }
  };

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '800px' }}
        >
          <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-glass)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px var(--accent-glow)' }}></span>
            <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Software Engineer</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>
            Hi, I'm <br />
            <span className="text-gradient">Kancherla Sri Vishnu</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
            Building scalable web applications, optimizing performance, and delivering high-impact solutions with modern web technologies.
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <a href="#projects" className="btn btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:srivishnukancherla@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'var(--text-secondary)' }}><FiMail size={22} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'var(--text-secondary)' }}><FiLinkedin size={22} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'var(--text-secondary)' }}><FiGithub size={22} /></a>
            <a href="https://leetcode.com/u/BoltHead/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'var(--text-secondary)' }}><SiLeetcode size={22} /></a>
            <a href="https://www.codechef.com/users/c0der_star_7" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'var(--text-secondary)' }}><SiCodechef size={22} /></a>
            <a href="https://codeforces.com/profile/K_Sri_Vishnu" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'var(--text-secondary)' }}><SiCodeforces size={22} /></a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
