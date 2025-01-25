import React from 'react'
import { useParams } from 'react-router-dom'

function Dyanamic() {
   const {userName} = useParams()
  return (
    <div>
      <h1>Pavithra {userName}</h1> 
    </div>
  )
}

export default Dyanamic 








