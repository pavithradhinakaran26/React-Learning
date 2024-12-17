import React from 'react'

function Conditional  ()  {
    const admin= true
    let result = null 
    if(admin === "html"){ 
        result= <h1>you are of admin user</h1>
    }
    else{
       result=<h1 className='you'>computer</h1>
    }
    
  return ( 
    <div>
       {result} 
       
    </div>
  )

 
}

export default Conditional
