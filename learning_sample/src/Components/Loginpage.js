import React, { useState } from 'react'

function Loginpage() {
     
  const[name,createName] = useState(" hello world")
  console.log(name)
  return (
    <div>
      <h2 className='name'>{name}</h2>
      <button className='button' onClick={()=> createName('Hi')}>Hi state</button>
      s
    </div>

    
  )
}

export default Loginpage;  


