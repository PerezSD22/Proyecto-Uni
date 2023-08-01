import { createContext, useContext, useState } from "react";
import{loginRequest, registerRequest} from "../services/Users/Login-Services";
import { Contrys } from "../services/GetServices/GetServices";

// se crea un context, el cualpuede dejarse vacio o crear un arreglo de objetos de tipo clave -> valor
export const GlobalContext = createContext(
{
  isAuthenticated: false, //en este caso se coloca un propiedad para definir la autentificacion del usuario como false
  getAccesToken: () =>" ",  //colocando el getter de accesToken en el contexto global
  getRefreshToken: () => "", //colocando el getter del refresh token en el contexto global

}




);

//creacion del hook useAuth para evitar repetir codigo
export const useAuth = () =>{
    const context= useContext(GlobalContext); // le asigno a un nuevo useContext el contexto creado

    if(!context){
        throw new Error("useAuth must be used within an AuthProvider\n", "Necesitas un AuthProvider para usar el useAuth"); //mensaje de error por si no existe un contexto previo
        
    }
    return context; //si ya existe un contexto devulve el contexto ya creado
}
//Creacion de la logica del contexto, donde se definen algunas funciones globales y llamadas de api





export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
 // manejo de tokes con use state
  const [accessToken, setAccesToken] = useState(""); //manejo de AccessToken
  // useState para manejar formularios:
  const [formData, setFormData] = useState({});
  
  //funcion tipo getter para el accesToken
  const getAccesToken = () =>{
    return accessToken
  }
  const getRefreshToken = () =>{
     const token = localStorage.getItem("token");
     if (token) {
      const {refreshToken} = JSON.parse(token);
      return refreshToken
     }
  }

  
  //guardando tokes en el localStorage
  const saveUser= (dataUser) =>{
    setAccesToken(dataUser.accessToken);


    localStorage.setItem("token", JSON.stringify(dataUser.refreshToken))
    setIsAuthenticated(true);
  }


  // seteando la informacion de los inputs en el use state
  const updateFormData = (newData) => {
    setFormData(prevData => ({ ...prevData, ...newData }));
  };

  const handleRegister = async () => { //logica para enviar datos a la api mediante el registro
    const res = await registerRequest(formData);
    console.log(res);
  
   
  };

  const handleLogin = async (user, password ) =>{
    try {
      const res = await loginRequest(user,password);
      const userData = res.data;

      saveUser(userData);
      console.log(userData);
      
      if (res && userData && userData.token) {
        setIsAuthenticated(true);// Cambiar el estado a true cuando el login es exitoso y se recibe un token
        return { ok: true };  
      } else {
        
        throw new Error("Error de autenticación: No se recibió un token válido");  // Mostrar un mensaje de error o realizar alguna acción si la respuesta de la API no es válida
    
      }
    } catch (error) {
      console.log("Ha surgido un error: " + error);
      return { ok: false };
    }
  };
  const handleCountry = async () => {
    try {
      const data = await Contrys();
 
      return data;
    } catch (error) {
      console.log("Ha surgido un error: " + error);
    }
  };






  return (
    <GlobalContext.Provider value={{ handleLogin, handleRegister, isAuthenticated, handleCountry, getAccesToken, getRefreshToken, saveUser,updateFormData,setFormData,formData }}>
      {children}
    </GlobalContext.Provider>
  );
};
