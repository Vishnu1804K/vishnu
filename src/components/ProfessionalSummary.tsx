import { motion } from 'framer-motion';

const ProfessionalSummary: React.FC = () => {
  return (
    <section id="summary" className="container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Professional Summary</h2>
        
        <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden', padding: '3rem' }}>
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--accent-primary)', opacity: '0.1', filter: 'blur(40px)', borderRadius: '50%' }}></div>
          
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, position: 'relative', zIndex: 1, margin: 0 }}>
            Software Engineer with 1.5+ years of experience building and scaling web applications in a product-driven environment. Full-stack developer skilled in React, Angular, Node.js. 
            <br /><br />
            Working experience in AWS cloud technologies, with a strong focus on performance optimization and reusable architecture. Experienced in developing REST APIs, implementing Redis caching, and setting up CI/CD pipelines to deliver reliable, scalable, and high-impact solutions. Leveraged AI-assisted coding tools to improve development efficiency and accelerate feature delivery.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalSummary;
