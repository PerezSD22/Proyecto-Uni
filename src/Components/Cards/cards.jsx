import React from "react";
import "./card.css";
import Button from "../Button/botton";

const Cards = (props) =>{
    const{tittle, content, img,btn,tittleCard,link} = props;

    return <div className="wrapper">
            <h2 className="tittle-card">{tittle}</h2>
        <div className="card">
            <img className="img-card" src={img} alt={tittleCard} />
            <div className="info">
                <h3>{tittleCard}</h3>
                <p> {content}</p>
                <Button tittle={btn} link={link} />
               
            </div>
           
        </div>
    </div>
}

export default Cards