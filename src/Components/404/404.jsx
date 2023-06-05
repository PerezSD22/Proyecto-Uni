import React from "react";
import Button from "../Button/botton";
import "./404.css"

const ErrorPage = () =>{

    return <div className="error-container">
        
        <div className="error-card">
            <div className="text-conteiner">
                <h3> Error 404 </h3>
            </div>
            <div className="img-conteiner">
                <img src="img/404_error.png" alt="" />
                
            </div>
            <div className="texto-error">
                <span className="texto">Parece que algo salio mal... regresa a casa</span>
            </div>
            
           <div className="button-error">
           
             <Button  titulo="Regresar a casa" direccion="/"/>
           </div>
           
        </div>
        
    </div>

}


export default ErrorPage;