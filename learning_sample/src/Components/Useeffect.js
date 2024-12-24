import React, { useEffect, useState } from 'react'

function Useeffect() {
    const[num1,setnum1]=useState(100)
    const[num2,setnum2]=useState(1000)
  useEffect(()=>{
    setnum1(200)
    console.log("from useEffect")
  },[num1])
  console.log("num1",num1);
  return (
    <div>
      <h1>{num1}</h1>
      <button className='use'  onClick={()=> setnum1(curr=>curr+1)}>Add</button>
      <h1>{num2}</h1>
      <button onClick={()=> setnum1(curr=>curr+1)}>Add</button>
    </div>
  )
}

export default Useeffect 
