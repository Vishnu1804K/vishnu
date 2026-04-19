import React from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container" style={{ paddingBottom: '8rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Have a question or want to work together? Leave your details below and I'll get back to you as soon as possible.
          </p>
          
          <form 
            action="https://formsubmit.co/srivishnukancherla@gmail.com" 
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* FormSubmit Configuration Settings */}
            <input type="hidden" name="_subject" value="New Contact Form Submission - Portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            {/* Replace this hidden field's value with the URL you want them redirected to after submitting, or let it default */}

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  style={{ padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  style={{ padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={5} 
                required 
                style={{ padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
              ></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', marginTop: '1rem', padding: '1rem 2rem' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message <FiSend size={18} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
