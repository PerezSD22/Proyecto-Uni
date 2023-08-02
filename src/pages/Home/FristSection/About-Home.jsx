import React from "react";
import Box from '@mui/material/Box';
import "./About-home.css"
import Button from "../../../Components/Button/botton";

const AboutHome = () =>{
    const buttonProps = {
        tittle: 'Saber Más',
        link: '/Sobre'

    }

    return(
     <Box component="div" >
   
        <div className="Container">
             <h1 > ¿Quiénes somos? </h1>
           <div className="contenido-texo">
                <p >Mi Carrito Amarillo Seguro somos un equipo de expertos comprometidos en ofrecer seguros automotrices confiables y personalizados. Tu seguridad y tranquilidad son nuestra prioridad, y estamos aquí para ayudarte en cada paso del camino.</p>
                <br /> 
                <p>¡Confía en nosotros para protegert mientras tu disfrutar de la paz mental que mereces! No dudes en contactarnos para obtener más información o solicitar una cotización personalizada. Estamos ansiosos por ser parte de tu viaje en carretera.</p>
           </div>
           
           <div className="contenido-imagen">
                <img src="img/Taxi_vision-mision.png" alt="mision-vision" className="imagen-vision"/>
           </div>
           <div className="boton">
            <Button tittle={buttonProps.tittle} link={buttonProps.link} />
           </div>
        </div>
       
        
     </Box>
       
  
    )
}

export default AboutHome