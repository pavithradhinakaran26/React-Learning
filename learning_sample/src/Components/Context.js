// import React from 'react'
// import Container from './Container'

// function Context() {
//   return (
//     <div>
//       <h1>pavithra</h1>
//       <Container/>
//     </div>
//   )
// }

// export default Context


import React, { createContext, useState } from 'react';
import Container from './Container';


export const ThemeContext = createContext();

function Context() {
  const [Theme, setTheme] = useState("light");

 
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ Theme, toggleTheme }}>
      <div>
        <h1>Pavithra</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Container/>
      </div>
    </ThemeContext.Provider>
  );
}

export default Context;







