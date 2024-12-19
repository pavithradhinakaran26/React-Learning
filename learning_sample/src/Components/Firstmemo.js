import React, {memo} from 'react'

function Firstmemo({val}) {
    console.log("firstmemo re-rendering1");
    
  return (
    <div>
      <h1>pavithra {val}</h1>
    </div>
  )
}

export default memo (Firstmemo) 
