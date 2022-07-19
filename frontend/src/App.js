import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./barra.css";

//------------------------------------------------IMPORTS VIEWS-----------------------------------------------
import Home from "./Views/Home.js";
import Branding from "./Views/branding.js";
import Comunicacaoeconsultoria from "./Views/comunicacaoeconsultoria.js";
import Design from "./Views/design";
import Siteslojas from "./Views/siteslojas.js";
import Supermix from "./Views/supermix.js";
import Menu from "./Views/menu.js";
import Mktdigital from "./Views/mktdigital";


//------------------------------------------------CLASS APP-----------------------------------------------
function App() {
  return (
    <Router>
    <div id="ancora">
     <ul className="navbar" style={{backgroundColor: 'rgba(55, 58, 60, 0.3)'}}>
  <li className="logo barra"><a href="/"><img src="images/logotipoincommun.png"  width={250}/></a></li>
  <li className="hamburguer barra"><a href="/menu"><img src="images/hamburguer.png" width={25} /></a></li>
  <li className="menu barra"><a href="/menu">Menu</a></li>
</ul>



    
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/branding" element={<Branding />} />
        <Route exact path="/comunicacaoeconsultoria" element={<Comunicacaoeconsultoria />} />
        <Route exact path="/design" element={<Design />} />
        <Route exact path="/mktdigital" element={<Mktdigital />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/siteslojas" element={<Siteslojas />} />
        <Route exact path="/supermix" element={<Supermix />} />
      </Routes>

      <a href="#ancora"> <button id="myBtn">
        <img src="images/up-arrow.png" alt="alternative" />
      </button></a>

      </div>
    </Router>
    



  );
}

export default App;

