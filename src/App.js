import React from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/home/Home";
import HomidiciosDolosos from "./pages/municipios/HomidiciosDolosos/homidiciosDo";
import HomidiciosCulposos from "./pages/municipios/HomidiciosCulposo/homidiciosCulp";
import Secuestro from "./pages/municipios/secuestros/secuestroEs";
import Feminicidios from "./pages/municipios/feminicidios/feminicidios";
import HomidiciosCulpososEstado from "./pages/estados/HomidiciosCulposos/HC";
import HomidiciosDolososEstado from "./pages/estados/HomidiciosDolosos/HD";
import SecuestroEstados from "./pages/estados/secuestros/secuestro";
import FeminicidioEstados from "./pages/estados/feminicidios/femincidioEstado";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/listado/Tamaulipas/homicidios/dolosos" element={<HomidiciosDolosos />} />
          <Route exact path="/listado/Tamaulipas/homicidios/culposos" element={<HomidiciosCulposos />} />
          <Route exact path="/listado/Tamaulipas/secuestro" element={<Secuestro />}/>
          <Route exact path="/listado/Tamaulipas/feminicidios" element={<Feminicidios />}/>
          <Route exact path="/listado/Estados/homicidios/dolosos" element={<HomidiciosDolososEstado />} />
          <Route exact path="/listado/Estados/homicidios/culposos" element={<HomidiciosCulpososEstado />} />
          <Route exact path="/listado/Estados/secuestro" element={<SecuestroEstados />} />
          <Route exact path="/listado/Estados/feminicidios" element={<FeminicidioEstados />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
