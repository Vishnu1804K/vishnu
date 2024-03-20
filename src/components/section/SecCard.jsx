import React from 'react';
import './secCard.css';

const SecCard = (props) => {
  return (
    <div className='Container'>
      <img src={props.img} alt="icon" />
      <h2>{props.name}</h2>
      <p>{props.para}</p>
      <ul>
        {props.stack.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default SecCard;
