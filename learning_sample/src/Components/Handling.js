import React from 'react'

function Handling() {
     console.log("book");
    
  return (
    <div>
    <button onClick={Handling}>Click Me</button>
    <input type='text' onChange={(e) =>{
      console.log(e.target.value)
    }}></input>
    
    </div>
  )
}

export default Handling