import React from 'react';
import SecCard from './SecCard.jsx';
import './section.css';
const Section = () => {
  const secCardData = [
    {
      name: "InsightFulEcho",
      para: "The application provides a platform for bloggers to share their thoughts and ideas through written content.",
      img: "https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1481.jpg",
      stack:["#React","#MongoDb","#RestApi","#CSS"],
      repo:"https://github.com/Vishnu1804K/InsightFul-Echo"
    },
    {
      name: "Talkrr",
      para: "The project leverages to provide interactive communication can join chat room and interact with each other.",
      img: "https://i.pinimg.com/236x/d1/d6/fd/d1d6fde9b2b81c1ac28fe22135cf569f.jpg",
      stack:["#HTML","#CSS","#ExpressJs","#Socket.Io"],
      repo:"https://github.com/Vishnu1804K/Talkrr"
    },
    {
      name: "ResumeBuilder",
      para: "This project offers a user-friendly interface for quickly generating polished resumes, perfect for both new graduates and seasoned professionals.",
      img: "https://i.pinimg.com/564x/9f/66/60/9f6660f8607cb9e271f93e6838d8dca7.jpg",
      stack:["#React","#MongoDb","#Express"],
      repo:"https://github.com/Vishnu1804K/Resume-Builder"
    },
    {
      name: "BlackBoard",
      para: "Aims to enhance the user experience by providing context-awareness through sound analysis.",
      img: "https://i.pinimg.com/564x/ad/99/fd/ad99fde8322ddc76179b698cc70f6eb8.jpg",
      stack:["#React","#MongoDb","#RestApi"]
    },
    {
      name: "SocialMedia",
      para: "Aims to enhance the user experience by providing context-awareness through sound analysis.",
      img: "https://i.pinimg.com/236x/a1/6d/f5/a16df5e1ec68630bc17a9ec0d7c45b32.jpg",
      stack:["#React","#MongoDb","#RestApi"]
    },
    {
      name: "DoctorVerse",
      para: "Aims to enhance the user experience by providing context-awareness through sound analysis.",
      img: "https://i.pinimg.com/564x/41/7c/2f/417c2fdaa640b1fbff25c2660c770ad8.jpg",
      stack:["#React","#RestApi","#WebRTC"]
    }
  ];


  return (
    <>
    <h1 className="ProjectHead" style={{textAlign:'center',borderBottom:'2px solid #7B2CBF',marginBottom:'25px',padding:'10px'}}>Projects</h1>
    <div className='Section'>
      {secCardData.map((p, index) => (
        <a href={p.repo}>
        <SecCard key={index} {...p} />
        </a>
      ))}
    </div>
    </>
  );
}

export default Section;
