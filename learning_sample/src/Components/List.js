import React, { useState } from 'react'

function List() {
    const items = ['Apple', 'Banana', 'Orange'];
    console.log(items) 
    
  return (
    <div>
        <h1 className='list'>List item</h1>
      <ul> 
        {items.map((item, index) => ( 
          <li key={index}>{item}</li> 
        ))}
      </ul>

    </div>
  )
}

export default List
