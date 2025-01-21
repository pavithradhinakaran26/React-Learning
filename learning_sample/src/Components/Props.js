
import React from 'react'
import User from './User'

function Props() {
      
    const userdata ={
       Name:"pavithra",
       Age:21,
       email:"pavithra@gmail.com",
       Phone: "7010993298",
       
    }
 const Newuser={...userdata,Gender:"Female",Age:30 ,Phone:"8489837729"} 
 console.log(Newuser)
  return (
    
    <div className='class'>
      <h1>Hello World</h1>
      <h1>Hello :</h1>  
      <User  Name= { userdata.Name} Age={userdata.Age} mail={userdata.email} PhoneNo={userdata.Phone}/>
     
    </div>

  )
}

export default Props;
