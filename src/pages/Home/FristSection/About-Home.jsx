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
                <p className="texto-vision">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel laborum facilis temporibus soluta totam, est aperiam modi unde sequi sint provident rerum cupiditate quibusdam inventore quas omnis enim suscipit aliquid?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore optio maiores sed, assumenda autem, perferendis illo nesciunt accusantium eos similique dolor laudantium culpa atque aperiam quae doloremque in. Provident.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore optio maiores sed, assumenda autem, perferendis illo nesciunt accusantium eos similique dolor laudantium culpa atque aperiam quae doloremque in. Provident.</p>
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