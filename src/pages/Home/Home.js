import React, { useContext } from "react";
import { HookUseCallback } from "../../components/HookUseCallback";
import { SomeContext } from "../../components/HookUseContext";
import { HookUseEffect } from "../../components/HookUseEffect";
import { HookUseReducer } from "../../components/HookUseReducer";
import { HookUseRef } from "../../components/HookUseRef";
import { HookUseState } from "../../components/HookUseState";
import "./Home.css";

//useContext

export const Home = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>UseContext</h2>
      <p>{contextValue}</p>
      <HookUseRef />
      <HookUseCallback />
    </div>
  );
};
