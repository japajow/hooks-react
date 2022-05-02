import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { HookUseContext } from "./components/HookUseContext";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>React Hooks</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
