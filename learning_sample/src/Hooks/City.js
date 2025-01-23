// import React, { useState } from 'react';
// import Country from './Country';

// function City() {
//   const [selectedCity, setSelectedCity] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form Submitted:", { ...formData, selectedCity });
//     setIsSubmitted(true);
//   };

//   return (
//     <div className="container">
//       <h1>Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Name */}
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter your name"
          
//           />
//         </div>

//         {/* Email */}
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
         
//           />
//         </div>

//         {/* Password */}
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Enter your password"
//             />
//         </div>

//         {/* City */}
//         <div className="form-group">
//           <label>Select City:</label>
//           <select
//             name="city"
//             value={selectedCity}
//             onChange={handleCityChange}
//             required
//           >
//             <option value="" disabled>
//               Select City
//             </option>
//             <option value="Thanjavur">Thanjavur</option>
//             <option value="Orathanadu">Orathanadu</option>
//             <option value="Pulavankadu">Pulavankadu</option>
//             <option value="Pudhur">Pudhur</option>
//           </select>
//         </div>

//         <button type="submit">Register</button>
//       </form> 

//       {/* Success  */}
//       {/* {isSubmitted && (
//         <div className="success-message">
//           <p>Form submitted successfully!</p>
//         </div>
//       )} */}

//       <Country city={selectedCity}/>
//     </div>
//   );
// }

// export default City;



// import React, { useState } from 'react';
// import Country from './Country';

// function City() {
//   const [selectedCity, setSelectedCity] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form Submitted:", { ...formData, selectedCity });
//     alert("Form submitted successfully!");  // Show alert on successful submission
//   };

//   return (
//     <div className="container">
//       <h1>Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Name */}
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter your name"
//           />
//         </div>

//         {/* Email */}
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Password */}
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Enter your password"
//           />
//         </div>

//         {/* City */}
//         <div className="form-group">
//           <label>Select City:</label>
//           <select
//             name="city"
//             value={selectedCity}
//             onChange={handleCityChange}
//             required
//           >
//             <option value="" disabled>
//               Select City
//             </option>
//             <option value="Thanjavur">Thanjavur</option>
//             <option value="Orathanadu">Orathanadu</option>
//             <option value="Pulavankadu">Pulavankadu</option>
//             <option value="Pudhur">Pudhur</option>
//           </select>
//         </div>

//         <button type="submit">Register</button>
//       </form>

//       <Country city={selectedCity}/>
//     </div>
//   );
// }

// export default City;



import React, { useState, useEffect } from 'react';
import Country from './Country';

function City() {
  const [selectedCity, setSelectedCity] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", { ...formData, selectedCity });
    setIsSubmitted(true);  
  };

  
  useEffect(() => {
    if (isSubmitted) {
      alert("Form submitted successfully!"); 
      setIsSubmitted(false);  
    }
  }, [isSubmitted]); 

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </div>

        {/* City */}
        <div className="form-group">
          <label>Select City:</label>
          <select
            name="city"
            value={selectedCity}
            onChange={handleCityChange}
            required
          >
            <option value="" disabled>
              Select City
            </option>
            <option value="Thanjavur">Thanjavur</option>
            <option value="Orathanadu">Orathanadu</option>
            <option value="Pulavankadu">Pulavankadu</option>
            <option value="Pudhur">Pudhur</option>
          </select>
        </div>

        <button type="submit" className='sumbit'>Register</button>
      </form>

      <Country city={selectedCity}/> 
    </div>
  );
}

export default City;






























