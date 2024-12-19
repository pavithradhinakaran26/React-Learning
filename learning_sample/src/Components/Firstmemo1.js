import React, { memo } from 'react'

function Firstmemo1({val1}) {
    console.log("firstmemo re-rendering")
  return (
    <div>
      <h1>mithra {val1}</h1>
    </div>
  )
}

export default memo(Firstmemo1)
