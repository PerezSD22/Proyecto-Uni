import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css"
import Perfil from "./Components/Content/perfil/Perfil";
import NavMenu from "./Components/Header/navMenu";
import ErrorPage from "./Components/404/404";
import Inicio from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
  <div className="app" > 
    <Router className="router">
        <NavMenu/>
     
        <Routes>
          <Route path='/'  element={<Inicio/>}/>
          <Route path='/Perfil'  element={<Perfil/>} />
          <Route path='/Servicios' />
          <Route path='/Billetera' />
          <Route path='/Sobre' />


          <Route path='*'  element={<ErrorPage/>}/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
