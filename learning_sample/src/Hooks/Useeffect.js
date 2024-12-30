import React, { useEffect, useState } from 'react'
import './Useeffect.css';
import { useNavigate } from 'react-router-dom';
function Useeffect() {
 
  const navigate = useNavigate()
  const goToRegister = () => {
    navigate("/register");
  };
  

return (
  <div className='container1'>
    <h1 className='form-title'>Register Form</h1> 
    <form >
      <div className='form-group'>
        <label className='form-label'>Name:</label>
        <input type="text"placeholder="Enter your name" className='form-input'/>
      </div>
      <div className='form-group'>
        <label className='form-label'>Password:</label>
        <input type="password"placeholder="Enter your password"required className='form-input'/>
      
        
    
      </div>
      <button type="submit" className='submit-btn'>Register</button>
      
  <div className='sign'>
    <p>Already have an account? <a href="#"onClick={ goToRegister}>Sign in</a>.</p>
  </div>
    </form>
  </div>
);
} 


export default Useeffect;
