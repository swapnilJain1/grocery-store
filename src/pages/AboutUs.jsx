import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
    const navigate = useNavigate();
    const buttonClick= () =>{
        navigate("/")
    }
  return (
    <div style={{minHeight: '80vh', padding: '20px'}}>
      <h2>About Us</h2>
      <p>This is the About Us page.</p>
      <Button variant="contained" onClick={buttonClick}>Go to Home</Button>
    </div>
  );
}

export default AboutUs;