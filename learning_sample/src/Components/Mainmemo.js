import { useState } from 'react'
import Firstmemo from './Firstmemo'
import Firstmemo1 from './Firstmemo1'

function Mainmemo() {
    const[firstmemo,setfirstmemo]= useState(5) 
    const[firstmemo1,setfirstmemo1]= useState(4)

    function change(){
        setfirstmemo(firstmemo+2)     
    }
    function change1(){
        setfirstmemo1(firstmemo1+2)     
    }
    // console.log("mainmemo")

  return (
    <div>
          <button onClick={change}> Button</button>
          <button onClick={change1}> Button</button>

      <Firstmemo val = {firstmemo}/>
      <Firstmemo1 val1={firstmemo1}/>
    </div>
  )
}

export default Mainmemo
