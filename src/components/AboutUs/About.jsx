import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
    <h1 className="AboutHead" style={{textAlign:'center',borderBottom:'2px solid #7B2CBF',marginBottom:'45px',padding:'10px'}}>About Me</h1>
    <div className='AboutContainer'>
      <div className='AboutPhoto'>
       <img src="https://i.pinimg.com/236x/c8/72/bd/c872bd07738e9b32ec79da9c8428fa12.jpg" alt="img" />
      </div>
      <div className='AboutPara'>
       <p>
       🎓 B.Tech in CSE, I am a UnderGraduate with a Bachelor's degree in Computer Science and Engineering from [VIIT], Vignan Institute of Information Technology Vishakapatanam.
My academic journey equipped me with a solid understanding of software engineering principles, data structures, algorithms, and problem-solving techniques.
🖥️ I'm well-versed in the latest frontend technologies, including HTML5, CSS3, JavaScript, Bootstrap and modern libraries and frameworks like React.js. My goal is to transform ideas into visually stunning and interactive websites/web-apps that provide seamless user experiences.
       </p>
      </div>
    </div>
    </>
  )
}

export default About
