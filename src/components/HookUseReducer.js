import React, { useReducer } from "react";

export const HookUseReducer = () => {
  const funcReducer = (state, action) => {
    return Math.random(state);
  };

  const [number, dispatch] = useReducer(funcReducer);
  return (
    <div>
      <h2>useReducer</h2>
      <p>Numero : {number}</p>
      <button onClick={dispatch}>View Number</button>
      <hr />
    </div>
  );
};
