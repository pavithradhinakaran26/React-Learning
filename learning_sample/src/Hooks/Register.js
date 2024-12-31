// import React, { useState } from 'react';
// import './Register.css';
// import { useNavigate } from 'react-router-dom';

// function Register() {

//   const navigate = useNavigate()
//   const goToLogin = () => {
//     navigate("/Useeffect");
//   };


//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     phone: '',
//     password: '',
//     address: '',
//     city: '',
//     gender: '',
//     birthdate: ''
//   });

 
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };


//   const handleSubmit = async (event) => {
//     event.preventDefault();


//     console.log('Form Data:', formData);

//     try {
//       const response = await fetch( "https://672f26e4229a881691f1fdd9.mockapi.io/Loginforms/Register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

    
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

      
//       const data = await response.json(); 
//       console.log("Success:", formData);
//       alert("Registration successful!");
//     } catch (error) {
//       console.error("Error:", error);
//       // alert("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="forms-register" onSubmit={handleSubmit}>
//       <h1>Register Forms</h1>

//       <form className="input-forms">
        
//         <div className="input-row">
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input type="text" id="username" name="username" placeholder="Enter your username"   value={formData.username}onChange={handleChange}/> 
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" placeholder="Enter your email"/> 
//           </div>
//         </div>

       
//         <div className="input-row">
//           <div className="form-group">
//             <label htmlFor="phone">Phone Number:</label>
//             <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"/>
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" name="password" placeholder="Enter your password"/>
//           </div>
//         </div>

       
//         <div className="input-row">
//           <div className="form-group">
//             <label htmlFor="address">Address:</label> 
//             <input type="text" id="address" name="address" placeholder="Enter your address"/>
//           </div>
//           <div className="form-group">
//             <label htmlFor="city">City:</label>
//             <input type="text" id="city" name="city" placeholder="Enter your city"/>
//           </div>
//         </div>

       
//         <div className="form-group">
//           <label htmlFor="gender">Gender:</label>
//           <select id="gender" name="gender">
//             <option value="" disabled> Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </div>

        
//         <div className="form-group">
//           <label htmlFor="birthdate">Date of Birth:</label>
//           <input type="date" id="birthdate" name="birthdate"/>
//         </div>

        
//         <div className="submit-btn">
//           <button type="submit">sumbit</button>
//         </div>

//         <p>Already have an account? <a href="#"onClick={ goToLogin}>Sign in</a>.</p> 
//       </form>
//     </div>
//   );
// }

// export default Register;
import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/Useeffect");
  };

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Data before submit:', formData); // Log data before submission

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
      // alert('Registration successful!');
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="forms-register">
      <h1>Register Forms</h1>
      <form className="input-forms" onSubmit={handleSubmit}>
        
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-row">
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
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
        </div>

        <div className="form-group">
          <label htmlFor="birthdate">Date of Birth:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
        </div>

        <div className="submit-btn">
          <button type="submit">Submit</button>
        </div>

        <p>Already have an account? <a href="#" onClick={goToLogin}>Sign in</a>.</p>
      </form>
    </div>
  );
}

export default Register;
