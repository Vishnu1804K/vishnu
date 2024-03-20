import React, { useState, useEffect } from 'react';
import './navbar.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 600); // Define your mobile view breakpoint

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600); // Adjust this value according to your desired breakpoint
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="left"></div>
      {isMobileView && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
          style={{
            color: 'white',
            borderRadius: '2px',
            border: '2px solid white',
            padding: '1px',
            paddingTop: '1px',
            margin: '5px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            zIndex: 200,
          }}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}

      {menuOpen && (
        <div className="right">
          <div className='span'>Skills</div>
          <div className='span'>Projects</div>
          <div className='span'>Contact Us</div>
          <div className="social">
              <div className='icon span'><LinkedInIcon /></div>
              <div className='icon span'><TwitterIcon /></div>
              <div className='icon span'><GitHubIcon /></div>
            </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
