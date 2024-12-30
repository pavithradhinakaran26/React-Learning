import React, { useState } from 'react'

function Login2() {
    const [name,setname]=useState("")
    const [html,sethtml]=useState("")
    const [city,setcss]=useState("")
    
    const handlenameChange = (e) => {
        setname(e.target.value);
      };
      const handlehtmlchange = (e) => {
        sethtml(e.target.value);
      };
      const handlecitychange = (e) => {
        setcss(e.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !html || !city) {
            alert('alert message!');
            return;
        }
        console.log( name);
        console.log( html);
        console.log( city);
       
      };
    
     return (
  
    
    <div className='container'>
        <h1 className='login-page'>Login Page</h1>
      <div class="form-page"><br/>
      <label className='value'>Name:</label><br/>
      <select value={name} onChange={handlenameChange}>
        <option value="" disabled selected>Select your option</option>
        <option value="pavithra">pavithra</option>
        <option value="Mithra">mithra</option>
        <option value="Shakthi">shakthi</option>
        <option value="Mukil">mukil</option>
        <option value="Lavanya">lavanya</option>
        <option value="Vino">vino</option>
    </select>
    </div>
    <div class="form-page">
      <label className='value'>Email:</label><br/>
      <select  value={html} onChange={handlehtmlchange}>
        <option value="" disabled selected>Select your option</option>
        <option value="Pavithta@gmail.com">Pavithta@gmail.com</option> 
        <option value="Mithra@gmail.com">Mithra@gmail.com</option>
        <option value="Jaya@gmail.com">Jaya@gmail.com</option> 
        <option value="Vino@gmail.com">Vino@gmail.com</option> 
      </select>
    </div>
    <div class="form-page">
      <label className='value'>City:</label>
      <select  value={city} onChange={handlecitychange}>
        <option value="" disabled selected>Select your option</option> 
         <option value="orthanadu">orthanadu</option>
         <option value="Thanjavur">Thanjavur</option>
         <option value="Pulavankadu">Pulavankadu</option> 
         <option value="Kakkarai">Kakkarai</option> 
     </select>
     
    </div>
    <button  className='handle'  onClick={handleSubmit}>sumbit</button>
    </div>
  )
}

export default Login2
