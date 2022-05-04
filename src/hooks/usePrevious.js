import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("---- CUstom hook e useDebugValue ");
  useDebugValue("---- o numero onterior e " + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
