import React, { useState } from 'react';
import './Useeffect.css';
import { useNavigate } from 'react-router-dom';

function Useeffect() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 
  const goToRegister = () => {
    navigate("/Register");
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const newUser = { Name: name, Password: password };

    
    try {
      const response = await fetch('https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }

     
      navigate("/Data", { state: { submittedData: newUser } });
    } catch (error) {
      console.error('Error saving data:', error);
    }

    console.log("Name:", name);
    console.log("Password:", password);
  };

  return (
    <div className='container1'>
      <h1 className='form-title'>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='form-label'>Name:</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className='form-input' 
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Password:</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className='form-input' 
          />
        </div>
        <button type="submit" className='submit-btn'>Login</button>
        <div className='sign'>
          <p>Already have an account? <a href="#" onClick={goToRegister}>Sign in</a>.</p>
        </div>
      </form>
    </div>
  );
}

export default Useeffect;


     



