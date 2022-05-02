import React, { useContext } from "react";
import { SomeContext } from "../../components/HookUseContext";
import "./About.css";

export const About = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <h1>About</h1>
      <h2>UseContext</h2>
      <p>{contextValue}</p>
    </div>
  );
};
