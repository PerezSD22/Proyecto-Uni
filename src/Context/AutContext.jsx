import { createContext, useContext, useState } from "react";
import{loginRequest, registerRequest} from "../services/Users/Login-Services";
import { Contrys } from "../services/GetServices/GetServices";

// se crea un context, el cualpuede dejarse vacio o crear un arreglo de objetos de tipo clave -> valor
export const GlobalContext = createContext(
{
  isAuthenticated: false, //en este caso se coloca un propiedad para definir la autentificacion del usuario como false

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
  const [username, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleRegister = async (user) => { //logica para enviar datos a la api mediante el registro
    const res = await registerRequest(user);
    console.log(res.data);
    setUser(res.data);
  };

  const handleLogin = async (user, password ) =>{
    try {
      const res = await loginRequest(user,password);
      console.log(res);
      
      if (res && res.data && res.data.token) {
        setIsAuthenticated(true);
        return { ok: true };  // Cambiar el estado a true cuando el login es exitoso y se recibe un token
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
      console.log(data);
    } catch (error) {
      console.log("Ha surgido un error: " + error);
    }
  };
  return (
    <GlobalContext.Provider value={{ username, handleLogin, handleRegister, isAuthenticated, handleCountry }}>
      {children}
    </GlobalContext.Provider>
  );
};
