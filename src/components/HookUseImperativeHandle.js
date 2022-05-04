import { useRef } from "react";
import { SomeComponents } from "./SomeComponents";

export const HookUseImperativeHandle = () => {
  const inputRef = useRef();
  return (
    <div>
      <h1>useImperativeHandle</h1>
      <SomeComponents ref={inputRef} />
      <button onClick={() => inputRef.current.validate()}>Validate</button>
      <hr />
    </div>
  );
};
