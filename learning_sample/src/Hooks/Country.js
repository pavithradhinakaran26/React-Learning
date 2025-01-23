


import React, { useState } from 'react';

function Country() {
  const[City,setcity]=useState('')

  const handlecitychange = (e) =>{
    setcity(e.target.value);
  }
  return (
  

    <div>
      {/* <label>City:</label>
        <select id='city'  value={City} onChange={handlecitychange}>
          <option value="" disabled>Select Country</option>
          <option value="Thanjavur">Thanjavur</option>
          <option value="Chennai">Chennai</option>
          <option value="Pulavankadu">Pulavankadu</option>
          <option value="Pudhur">Pudhur</option>
        </select> */}
    </div> 
  );
}

export default Country;












