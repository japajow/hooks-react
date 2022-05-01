import React, { useState } from "react";

export const HookUseState = () => {
  //variavel
  let userName = "bruno";
  // useState
  const [name, setName] = useState("matheus");

  const changeName = () => {
    userName = "Bruno Hamawaki";

    setName("Matheus Battisti");
  };

  //   usestate com input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };

  return (
    <div>
      <h2>useState</h2>

      <p>Variavel : {userName}</p>
      <p>useState : {name}</p>
      <button onClick={changeName}>Mudar de Nome</button>

      {/* useState com Inputs */}
      <h2>useState com Inputs</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="enviar" />
      </form>
      <p>Voce tem {age} anos!</p>
      <hr />
    </div>
  );
};
