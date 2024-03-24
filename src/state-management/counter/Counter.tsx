import { useReducer, useState } from "react";
import useCounterStore from "./store";

const Counter = () => {
  //useReducer hook has two arguments
  //1. first arg is our reducer function
  //2. second arg is initial state
  //the returns an array with  [current state, dispatch]
  //dispatch is a function for triggering changes

  const { counter, increment, reset } = useCounterStore();

  return (
    <div>
      Counter ({counter})
      <button onClick={() => increment()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default Counter;
