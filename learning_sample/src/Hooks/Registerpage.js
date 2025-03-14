// import React, { useState, useEffect } from 'react';
// import './Registerpage.css';
// import { useNavigate } from 'react-router-dom';

// function RegisterPage() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     password: '',
//     city: '',
//     state: '',
//   });

//   useEffect(() => {
//     const editUser = JSON.parse(localStorage.getItem('editUser'));
//     if (editUser) {
//       setFormData(editUser);
//       localStorage.removeItem('editUser');
//     }
//   }, []);

//   const cities = ['Chennai', 'Bangalore', 'Hyderabad', 'Mumbai', 'Delhi'];
//   const states = ['Tamil Nadu', 'Karnataka', 'Telangana', 'Maharashtra', 'Delhi'];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     let users = JSON.parse(localStorage.getItem('users')) || [];

//     const index = users.findIndex((user) => user.username === formData.username);
//     if (index !== -1) {
//       users[index] = formData; 
//     } else {
//       users.push(formData); 
//     }

//     localStorage.setItem('users', JSON.stringify(users));
//     navigate('/tablec'); 
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <h2 className="register-title">Create an Account</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label className="form-label">Full Name</label>
//             <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Username</label>
//             <input type="text" name="username" className="form-input" value={formData.username} onChange={handleChange} required />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Password</label>
//             <input type="password" name="password" className="form-input" value={formData.password} onChange={handleChange} required />
//           </div>
          
//           <div className="dropdown-container">
//             <div>
//               <label className="form-label">City</label>
//               <select name="city" className="form-dropdown" value={formData.city} onChange={handleChange} required>
//                 <option value="">Select City</option>
//                 {cities.map((city, index) => (
//                   <option key={index} value={city}>{city}</option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="form-label">State</label>
//               <select name="state" className="form-dropdown" value={formData.state} onChange={handleChange} required>
//                 <option value="">Select State</option>
//                 {states.map((state, index) => (
//                   <option key={index} value={state}>{state}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <button type="submit" className="register-button">Register</button>
//           <p>
//             Already have an account?{' '}
//             <span className="login-register" onClick={() => navigate('/Useeffect')} style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}>
//               View Data
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegisterPage;





import React, { useState, useEffect } from 'react';
import './Registerpage.css';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    city: '',
    state: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const editUser = JSON.parse(localStorage.getItem('editUser'));
    if (editUser) {
      setFormData(editUser);
      localStorage.removeItem('editUser');
    }
  }, []);

  const cities = ['Chennai', 'Bangalore', 'Hyderabad', 'Mumbai', 'Delhi'];
  const states = ['Tamil Nadu', 'Karnataka', 'Telangana', 'Maharashtra', 'Delhi'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const index = users.findIndex((user) => user.username === formData.username);
    if (index !== -1) {
      users[index] = formData; 
    } else {
      users.push(formData); 
    }

    localStorage.setItem('users', JSON.stringify(users));
    navigate('/tablec'); 
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input type="text" name="username" className="form-input" value={formData.username} onChange={handleChange} required />
          </div>
          
          <div className="form-group password-container">
            <label className="form-label">Password</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                className="form-input password-input" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
              <span className="password-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="dropdown-container">
            <div>
              <label className="form-label">City</label>
              <select name="city" className="form-dropdown" value={formData.city} onChange={handleChange} required>
                <option value="">Select City</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label">State</label>
              <select name="state" className="form-dropdown" value={formData.state} onChange={handleChange} required>
                <option value="">Select State</option>
                {states.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="register-button">Register</button>
          <p>
            Already have an account?{' '}
            <span className="login-register" onClick={() => navigate('/Useeffect')} style={{ cursor: 'pointer', color: '#007bff',  }}>
              View Data
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
