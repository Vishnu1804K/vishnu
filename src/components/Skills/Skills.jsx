import React from 'react'
import "./skills.css";
import SkillCard from "../SkillCard/SkillCard.jsx";
import img1 from "../../Images/html.png";
import img2 from "../../Images/css.png";
import img3 from "../../Images/js.png";
import img4 from "../../Images/nodejs (2).png";
import img5 from "../../Images/react (1).png";
import img6 from "../../Images/icons8-mongoose-96.png";
import img7 from "../../Images/postman.png";
import img8 from "../../Images/github.png";
import img9 from "../../Images/c-.png"
import img10 from "../../Images/python.png"

const data = [
  {
    "id": 1,
    "img":img1,
    "name":"HTML",
  },
  {
    "id": 2,
    "img":img2,
    "name":"CSS",
  },
  {
    "id": 3,
    "img":img3,
    "name":"JavaScript",
  },
  {
    "id": 4,
    "img":img4,
    "name":"NodeJs",
  },
  {
    "id": 5,
    "img":img5,
    "name":"ReactJs",
  },
  {
    "id": 6,
    "img":img6,
    "name":"Mongoose",
  },
  {
    "id": 7,
    "img":img8,
    "name":"GitHub",
  },
  {
    "id": 8,
    "img":img9,
    "name":"C++",
  },
  {
    "id": 9,
    "img":img10,
    "name":"Python",
  }
];

const Skills = () => {
  return (
    <div className='SkillsAbove'>
    <h1 style={{textAlign:'center',borderBottom:'2px solid #7B2CBF'}}>Skills</h1>
    <div className="SkillContainer">
      {data.map((res) => (
        <SkillCard key={res.id} data={res} className="skillC"/>
      ))}
    </div>
    </div>
  );
};

export default Skills;
