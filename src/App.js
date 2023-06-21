import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css"
import Perfil from "./pages/Perfil/Perfil";
import NavMenu from "./Components/Header/navMenu";
import ErrorPage from "./Components/404/404";
import HomeIndex from "./pages/Home/Home";
import { useState, useEffect } from "react";
import { getUserProfile } from "./services/Users/user-api";
import axios from "axios";
import LoginForm from "./pages/Login/Login";
import UserRegisterForm from "./pages/UserRegister/UserRegister";
import DriverFormRegister from "./pages/DriverRegister/DriverRegister";
import InfoAccunt from "./pages/InfoAccount/InfoAccount";

/* import Footer from "./Components/Footer/Footer"; */

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const response = await axios.get('https://future-vine-plier.glitch.me/obtener'); // Reemplaza con la ruta correcta hacia tu API para obtener el usuario autenticado
        const userId = response.data.id; // Ajusta esto según la estructura de respuesta de tu API
        const userProfile = await getUserProfile(userId);

        if (userProfile) {
          setIsAuthenticated(true);
          setUser(userProfile);
        }
      } catch (error) {
        console.error('Error al autenticar al usuario:', error);
      }
    };

    authenticateUser();
  }, []);
  return (
  <div className="app" > 
    <Router className="router">
        <NavMenu auntenticador={isAuthenticated} user={user}/>
     
        <Routes>
          <Route path='/'  element={<HomeIndex/>}/>
          <Route path='/Perfil/:userId' element={<Perfil/>}  />
          <Route path='/Servicios' />
          <Route path='/Billetera' />
          <Route path='/Sobre' />
          <Route path='/login' element={<LoginForm/>} />
          <Route path='/Register' element={<InfoAccunt/>}  />
          <Route path='/Register/user'  element={<UserRegisterForm/>} />
          <Route path='/Register/driver' element={<DriverFormRegister/>}/>
           
        

          <Route path='*'  element={<ErrorPage/>}/>

        </Routes>
      
      </Router>
    </div>
  );
}

export default App