import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import './header.css';
import WaveLine from './WaveLine.jsx';
import { motion } from 'framer-motion';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import img9 from '../../Images/3d-casual-life-boy-with-laptop-sitting-on-floor.png';
import { Link } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
      <Navbar />
      <div className='head'>
        <WaveLine className="waves"/>
        <div className='hin'>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5, slice: 14 }}
          >
            Kancherla Sri Vishnu
          </motion.h1>
          <h3>I am a FullStack Web Developer having specialization in Backend and Frontend</h3>
          <a href="link_to_resume" target="_blank" rel="noopener noreferrer">
            <button id='confirm' type='button'>
              <DescriptionIcon/>Resume
            </button>
          </a>
          <a href="https://github.com/Vishnu1804K" target="_blank" rel="noopener noreferrer">
            <button id='cancel' type='button'>
              <GitHubIcon/>GitHub
            </button>
          </a>
        </div>
        <motion.div className='logo3d'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5, slice: 14 }}> 
          <img src={img9} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
