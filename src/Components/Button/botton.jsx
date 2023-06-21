import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const Button = (props) =>{
    const {tittle, link} = props;

    return <Link className="botton" to={link}
    >
       <span className={`button`}>{tittle}</span> 
    </Link>
}
export default Button;