import React, { useState } from 'react'

function List() {
    const fruits= ['Apple', 'Banana', 'Orange'];
    console.log("items") 

    let result = fruits.map((fruit,index) => {
      return(
        <div key={index}>
          <h2>{fruit}</h2>
          <p>Item lists</p>
        </div>
      )
    })
    return(
      <div>
         {fruits} 
         {result} 
      </div>
     
    )
 
}

export default List 
