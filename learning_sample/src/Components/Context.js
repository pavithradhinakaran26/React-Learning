


// import React, { createContext, useState } from 'react';
// import Container from './Container';


// export const ThemeContext = createContext();

// function Context() {
//   const [Theme, setTheme] = useState("light");

 
//   const toggleTheme = () => {
//     setTheme((curr) => (curr === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ Theme, toggleTheme }}>
    
//       <div>
//         <h1>Pavithra</h1>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//         <Container/>
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default Context;





import React, { createContext, useState } from "react";
import Container from "./Container";

export const ThemeContext = createContext();

function Context() {
  const [Theme, setTheme] = useState("light");

 
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ Theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: Theme === "light" ? "#f5f5f5" : "#1a1a1a",
          color: Theme === "light" ? "#000" : "#fff",
          minHeight: "100vh",
          padding: "20px",
          textAlign: "center",
          transition: "all 0.3s ease",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Pavithra
        </h1>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: Theme === "light" ? "#007bff" : "#4a90e2",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
          }}
        >
          Toggle to {Theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: Theme === "light" ? "#fff" : "#2c2c2c",
            boxShadow:
              Theme === "light"
                ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                : "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Container />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Context;







