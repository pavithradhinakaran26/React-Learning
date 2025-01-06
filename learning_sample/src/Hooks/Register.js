


import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import register from './register.webp'; 
function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    city: '',
    gender: '',
    birthdate: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }
    if (!formData.address.trim()) {
      validationErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      validationErrors.city = 'City is required';
    }
    if (!formData.gender) {
      validationErrors.gender = 'Gender is required';
    }
    if (!formData.birthdate) {
      validationErrors.birthdate = 'Date of Birth is required';
    }
    return validationErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      alert('Registration successful!');
      navigate('/Material'); 
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    }


   
   
  };

  return (
    <div className="reg-container1">
      <img src={register} alt="System" className="img"/> 
    <div className="forms-register">
      
      <h1>Register Forms</h1>
      <form className="input-name" onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="form-name">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="form-name">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>

        <div className="input-row">
          <div className="form-name">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="form-name">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>

        <div className="input-row">
          <div className="form-name">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error">{errors.address}</p>} 
          </div>
          <div className="form-name">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange} 
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>
        </div>

        <div className="form-select">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        <div className="form-name">
          <label htmlFor="birthdate">Date of Birth:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
          {errors.birthdate && <p className="error">{errors.birthdate}</p>}
        </div>

        <div className="submit-btn"> 
          <button type="submit">Submit</button>
        </div>
        <p>Already have an account?  <a href="#" onClick={() => navigate('/Useeffect')}>Sign in</a>.</p>
      </form>
    </div>
    </div>
  );
}

export default Register;










