import React from 'react'

function User(props) {
    console.log(props.Name)
  return (
    <div>
      <h1>{props.Name}</h1>  
      <h2>{props.Age}</h2>
      <h1>{props.PhoneNo}</h1>
      <h1>{props.mail}</h1>


    </div>
  )
}

export default User  
