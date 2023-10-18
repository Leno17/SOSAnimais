import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./components/Login";
import MenuAnuncio from "./components/MenuAnuncio";
import MenuAdotar from "./components/MenuAdotar";
import OkScreen from "./components/AnConcluido";
import OkScreen2 from "./components/AdConcluido";
import './components/Login.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/anuncio" element={<MenuAnuncio />}></Route>
        <Route path="/adotar" element={<MenuAdotar />}></Route>
        <Route path="/AnuncioRealizado" element={<OkScreen />}></Route>
        <Route path="/PerfisVisualizados" element={<OkScreen2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;