import React, { useState } from 'react';


const useCounter = (value) => {
    const [count, setCount] = useState(0);
    function incrementCount() {
      setCount(prevState => prevState + value);
    }
  
    function decrementCount() {
      setCount(prevState => prevState - value);
    }
  
    return {
      count,
      incrementCount,
      decrementCount
    };
  };
  
  export default useCounter;
  