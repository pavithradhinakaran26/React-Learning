import React, { useRef } from 'react';

function UseRef() {
  
  const inputRef = useRef(null);

  
  const focusInput = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <div>
      <input 
        ref={inputRef}
        type="text" 
        placeholder="Type something here"
      />
      <button onClick={focusInput}>Focus and Show Value in Console</button>
    </div>
  );
}

export default UseRef;








