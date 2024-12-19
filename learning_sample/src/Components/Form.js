import React, { useState } from 'react'








function Form() {
  const[name,setname]= useState("");
  const[headingText,setheading] = useState()
  function handlechange(event) {
  
   setname(event.target.value)
   
  
  }

  function handleclick(event) {
    console.log("sumbit")
    setheading(name)
    event.preventDefault();
  }
 
  return (
    
    <div className='container'>
       <h1 className='login'> FORMS {name} </h1>
       <h1> After Submit FORMS {headingText} </h1>
      <form onSubmit ={handleclick}>
       <input onChange={ handlechange} type='text' placeholder='Enter your name' value={name}/>
       <button type="sumbit">sumbit</button>
       </form>
    </div>
  )
}

export default Form

