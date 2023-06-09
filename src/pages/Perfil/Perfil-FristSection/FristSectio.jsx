    import React from "react";
    import "./FristSection.css"

    const FristSection = (props) =>{
        const {nombre, imagen, apellido} = props
        return <div className="frist-section-container">
            <div className="photo-info-container">
                <img src={imagen} alt="user-logo" />
                <p>{nombre} {apellido}</p>
            </div>
            <div className="email-container">
            <p>samuel.d.perez.22@gmail.com</p>
            </div>
        </div>
    };

    export default FristSection;