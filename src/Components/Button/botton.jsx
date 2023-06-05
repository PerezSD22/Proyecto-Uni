import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const Button = (props) =>{
    const {titulo, direccion, color} = props;

    return <Link className="botton" to={direccion}
    >
       <span className={`button-${color}`}>{titulo}</span> 
    </Link>
}
export default Button;