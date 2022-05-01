## Hooks do React

> useState

- O useState e um dos procipais hooks do React
- O principal proposito e gerenciar valores
- Podemos consultar um valor e alterar
- Isso nos permite re-renderizar um componente, o que nao acontece com a manipulacao de variaveis

instalando o npm i react-router-dom

importamos o BrowserRouter,Roues,Route

```tsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```

Criamos 2 paginas
pages/Home.js pages/About.js

Configuramos as rotas no App.js

```tsx
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <>
      <div className="App">
        <h1>React Hooks</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```

Criamos o navbar e estilizamos

apos ter feito o navbar vamos criar uma pasta chamada components e colocar os nossos Hooks dentro dele

components/HookUseState.js

```tsx
//criando as variaveis e o estado
let variableName = "bruno";
const [name, setName] = useState("Pedro");

//criamos a funcao que ira mudar o nome
const handleChangeName = () => {
  variableName = "bruno hamawaki";
  setName("Pedro Kiyomi");
};

// setamos no HTML as variaveis
{
  variableName;
}
{
  name;
}

//criamos o botao que ira receber a funcao click para modificar o nome
<button onClick={handleChangeName}>Click</button>;
```

## useState e inputs

- Alterando o useState a um iput podemos fazer algumas acoes
- Alteracao de um state por evento de onChange
- Limpeza de inputs Controlled input
- Apos preenchimento total do form unir os states e fazer um envio dos dados para o backend

Criamos a variavel estado
Criamos a funcao handleSubimit
Criamos um formulario que recebar os valores com input e mostre

```tsx
 //   usestate com input
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    };

     /* useState com Inputs */
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

```

## useReducer

- O useReducer tem a mesma funcao que o useState, ele gerencia valores
- Porem temos a possibilidade de executar uma funcao na hora da alteracao do valor
- Entao temos que o useReducer recebe um valor para gerenciar e uma funcao para alterar este valor

Criamos o hook novo HookUseReducer.js

Criar a variavel atribuida com valores no useReducer

```tsx

 const [number, dispacth] = useReducer((state,action) => {
     return Math.random(state)
 })

// Criamos um boato que ira receber a funcao dispatch  e ao clicar muda o number
<button onClick={dispatch}>Clique aqui</button>


//Finalizando assim

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
```
