// import React from 'react'
// import Display from './Display'

// function Country() {
//   return (
//     <div>
//       <Display/>
//     </div>
//   )
// }

// export default Country


import React from 'react';

function Country({ city }) {
  return (
    <div>
      {city ? <h2>Selected City: {city}</h2> : <h2>Please select a city.</h2>}
    </div>
  );
}

export default Country;

