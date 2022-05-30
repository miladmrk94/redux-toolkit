import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "./features/counter/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Number:{counter.number}</h3>
      <button
        onClick={() => {
          dispatch(plus());
        }}
      >
        {" "}
        +{" "}
      </button>
      <button
        onClick={() => {
          dispatch(minus());
        }}
      >
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default Counter;
