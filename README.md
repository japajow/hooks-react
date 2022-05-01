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
    let variableName = "bruno"
    const [name,setName] = useState('Pedro')

    //criamos a funcao que ira mudar o nome 
    const handleChangeName = () => {

        variableName = "bruno hamawaki";
        setName("Pedro Kiyomi")
    }

    // setamos no HTML as variaveis
    {variableName}
    {name}

    //criamos o botao que ira receber a funcao click para modificar o nome 
    <button onClick={handleChangeName}>Click</button>

```


## useState e inputs 


