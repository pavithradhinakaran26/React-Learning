// import React from 'react'
// import Country from './Country'

// function City() {
//   return (
//     <div>





// <label className="city" fullname="country">
              
//                 <select
//                     className="table1"
//                     name="city">
//                     <option value="" disabled select>
//                     Select City   
//                     </option>
                   
//                     <option value="Thanjavur">Thanjavur</option>
//                     <option value="Orathanadu">Orathanadu</option>
//                     <option value="Pulavankadu">Pulavankadu</option>
//                     <option value="Pudhur">Pudhur</option>
//                 </select>
//                 </label>
//        <Country/>
//     </div>
   
//   )
// }

// export default City



import React, { useState } from 'react';
import Country from './Country';

function City() {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <label className="city">
        <select
          className="table1"
          name="city"
          value={selectedCity}
          onChange={handleCityChange}>
          <option value="" disabled>
            Select City
          </option>
          <option value="Thanjavur">Thanjavur</option>
          <option value="Orathanadu">Orathanadu</option>
          <option value="Pulavankadu">Pulavankadu</option>
          <option value="Pudhur">Pudhur</option>
         </select>
       </label>
    <Country city={selectedCity}/>
</div>
  );
}

export default City;
