import { useReducer, useState } from 'react';
import counterReducer from './reducers/counterReducer';

const Counter = () => {
  //useReducer hook has two arguments
  //1. first arg is our reducer function
  //2. second arg is initial state
  //the returns an array with  [current state, dispatch]
  //dispatch is a function for triggering changes
  
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({type: "INCREMENT"})}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({type: "RESET"})}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
