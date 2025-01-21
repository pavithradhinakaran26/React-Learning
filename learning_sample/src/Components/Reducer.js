import React, { useReducer } from "react";


function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}
 

function Reducer() {
  const [count, dispatch] = useReducer(reducer, 0); 

  return (
    <div style={{ textAlign: "center", marginTop: "100px",}}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
export default Reducer; 

