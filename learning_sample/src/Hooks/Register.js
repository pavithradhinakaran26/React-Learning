import React, { useState } from 'react';
import './Register.css';

function Register() {

    const [formData, setFormData] = useState({ 
        username: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        city: '',
        gender: '',
        birthdate: '',
      });
          
      const[name,setname]=useState()
      const[mail,setmail]=useState()
      const[phoneno,setphoneno]=useState()
      
 


  return (
    <div className="forms-register">
      <h1>Register Forms</h1>

      <form className="input-forms">
        
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username"/> 
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email"/>
          </div>
        </div>

       
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password"/>
          </div>
        </div>

       
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="address">Address:</label> 
            <input type="text" id="address" name="address" placeholder="Enter your address"/>
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" placeholder="Enter your city"/>
          </div>
        </div>

       
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        
        <div className="form-group">
          <label htmlFor="birthdate">Date of Birth:</label>
          <input type="date" id="birthdate" name="birthdate"/>
        </div>

        
        <div className="submit-btn">
          <button type="submit">sumbit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
