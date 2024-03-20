import React from "react";
import "./SkillCard.css";
import { motion } from 'framer-motion';

const Card = ({ data }) => {
  const isEven = data.id % 2 === 0;
  const initialX = isEven ? -500 : 500;

  const getImageSize = () => {
    if (window.innerWidth <= 600) {
      return { height: 25, width: 25 };
    } else {
      return { height: 70, width: 70 };
    }
  };

  return (
    <motion.div
      className="CardContainer"
      initial={{ x: initialX, y: -500 }}
      animate={{ x: 0, y: 0 }}
      transition={{ ease: "easeIn", duration: (2 - 0.1 * data.id) }}
    >
      <img className="skillImg" src={data.img} alt="" style={getImageSize()} />
      <h4 className="skillName">{data.name}</h4>
    </motion.div>
  );
};

export default Card;
