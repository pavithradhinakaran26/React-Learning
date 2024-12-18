import React from 'react'
import { Link } from 'react-router-dom'
function Rounter() {
    
  return (
    <div>
      <h2>Element</h2>
      
      <ul>
        <Link to ='/home'>Home</Link>
        <Link to ='/mail'>Mail</Link>
        <Link to ='/about'>About</Link> 

      </ul>
      
    </div>
  )
}

export default Rounter
