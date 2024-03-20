import React from 'react';
import './Contact.css';
import { Button, Input } from '@mui/material';

const Contact = () => {
  return (
    <div className='ContactSection'>
      <div className='ImageContainer'>
        <img src="https://i.pinimg.com/564x/60/d5/a1/60d5a19c799c72c0be3ed76db51c0742.jpg" alt="" />
      </div>
      <div className='ContentContainer'>
        <h1>Contact US</h1>
        <div className='InputContainer'>
          <Input placeholder="Username" className='CInput'/>
          <Input placeholder="Mobile Number" className='CInput' />
        </div>
        <Button className='CButton'>Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
