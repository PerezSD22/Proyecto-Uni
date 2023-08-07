import {createBrowserRouter,  RouterProvider } from "react-router-dom";

import "./App.css"
import Perfil from "./pages/Perfil/Perfil";

import ErrorPage from "./Components/404/404";
import HomeIndex from "./pages/Home/Home";
import { AuthProvider } from "./Context/AutContext";
import LoginForm from "./pages/Login/Login";
import UserRegisterForm from "./pages/UserRegister/UserRegister";
import DriverFormRegister from "./pages/DriverRegister/DriverRegister";
import InfoAccunt from "./pages/InfoAccount/InfoAccount";
import Services from "./pages/ServicesPages/Services";
import About from "./pages/About/About";

import Layout from './Components/Header/Layaout';
import ProtectedRoute from "./Routes/ProtectedRoutes";




/* import Footer from "./Components/Footer/Footer"; */

const routes =createBrowserRouter( [
  {
    path:"/",
    element: <Layout><HomeIndex/> </Layout>

  },
  {
    path:"/",
    element:<ProtectedRoute/>,
    children:[{
      path: "/Perfil",
      element: <Layout> <Perfil/></Layout>
    }]
  },
  {
    path: "/Servicios",
    element: <Layout><Services/></Layout>
 
  },
  { 
    path:"/Sobre",
    element:<Layout><About/></Layout>

  },
  {
    path:"/Login",
    element: <Layout><LoginForm/> </Layout>
  },
  {
    path:"/Register",
    element:<Layout><InfoAccunt/></Layout> ,
   },
  {
    path:"/Register/Driver",
    element:<DriverFormRegister/> 
  },
  {
    path: "/Register/User",
    element:<UserRegisterForm/>
  },
  {
    path:"/",
    element:<ProtectedRoute/>,
    children:[{
      path: "https://perezsd22.github.io/Geolocalizacion/"
     
    }]

  },
  {
    path:"*",
    element:<ErrorPage/>
  }




])

function App() {



 
  return (
    <AuthProvider>

     <RouterProvider router={routes}/>
    </AuthProvider>
 
  );
}

export default App