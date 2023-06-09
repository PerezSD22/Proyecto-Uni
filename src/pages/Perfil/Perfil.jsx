import React, { useState, useEffect } from 'react';
import "./Perfil.css"
import FristSection from "./Perfil-FristSection/FristSectio";
import SecundSection from "./Perfil-SecundSection/SecundSection";
import { getUserProfile } from '../../services/Users/user-api';
import { useParams } from 'react-router-dom';

const Perfil = ( ) =>{
    const { userId } = useParams(); // Obtén el ID del usuario de la URL
    const [user, setUser] = useState([]);
    
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const userData = await getUserProfile(userId); // Pasa el ID del usuario a la función getUserProfile()
          setUser(userData);
  
          console.log(userData); // Muestra los datos en la consola
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchUser();
    }, [userId]);
  
    if (!user) {
      return <div>Cargando perfil de usuario...</div>;
    }
  
    return  <div className="perfil-container">
        <h3 className="Titulo">{user.apellido}</h3>
        <div className="container">
        
          <FristSection  nombre={user.nombre} apellido={user.apellido} imagen={user.imagen}/>
        
        </div>
        <div className="container">
            <SecundSection/>
        </div>
       
    </div>

}

export default Perfil