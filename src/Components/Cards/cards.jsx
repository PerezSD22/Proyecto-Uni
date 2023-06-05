import React from "react";
import "./card.css";
import Button from "../Button/botton";

const Cards = (props) =>{
    const{titulo, contenido, img,btn} = props;

    return <div className="wrapper">
        <div className="card">
            <img className="img-card" src={img} alt="alquiler" />
            <div className="info">
                <h1>{titulo}</h1>
                <p> {contenido}</p>
                <Button titulo={btn} color="services"/>
               
            </div>
           
        </div>
    </div>
}

export default Cards