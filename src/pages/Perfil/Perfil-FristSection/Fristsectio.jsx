import React from "react";
import "./FristSection.css"

const FristSection = () =>{
    return <div className="frist-section-container">
        <div className="photo-info-container">
            <img src="img/user-logo.png" alt="user-logo" />
            <p>user</p>
        </div>
        <div className="email-container">
          <p>samuel.d.perez.22@gmail.com</p>
        </div>
    </div>
};

export default FristSection;