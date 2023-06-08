import React from "react";
import "./Perfil.css"
import FristSection from "./Perfil-FristSection/FristSectio";
import SecundSection from "./Perfil-SecundSection/SecundSection";
const Perfil = ( ) =>{

    return  <div className="perfil-container">
        <h3 className="Titulo">Datos Generales</h3>
        <div className="container">
         <FristSection/>
        </div>
        <div className="container">
            <SecundSection/>
        </div>
       
    </div>

}

export default Perfil