import { Button } from '@mui/material';
import React from 'react';

function Form() {
  return (
    <form style={{display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px'}}>
        <h3>Post Your Query?</h3>
      <input type="text" placeholder="Your Name" className='input-text'/>
      <input type="email" placeholder="Your Email" className='input-text'/>
      <textarea placeholder="Your Request" className='input-text'></textarea>
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  );
}

export default Form;