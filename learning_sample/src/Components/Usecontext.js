import React, { useContext } from 'react';
import { ThemeContext } from './Context';

function Container() {
  
  const { Theme } = useContext(ThemeContext);

 
  const containerStyle = {
    backgroundColor: Theme === "light" ? "blue" : "#333",
    color: Theme === "light" ? "#000" : "red",
    
  };

  return (
    <div style={containerStyle}>
      <h2>Current Theme: {Theme}</h2> 
    </div>
  );
}

export default Container;

