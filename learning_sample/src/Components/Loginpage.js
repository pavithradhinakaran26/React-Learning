import React, { useState } from 'react'

function Loginpage() {
     
  const[name,createName] = useState("Hello World")
  console.log(name)
  return (
    <div>
      <h2 className='name'>{name}</h2>
      <button className='button' onClick={()=> createName('Hi')}>Hi state</button>
    </div>
    
  )
}

export default Loginpage; 

