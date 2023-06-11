    import React from "react";
    import "./FristSection.css"
    import { useState, useEffect } from "react";
    const FristSection = (props) =>{
        const {nombre, imagen, apellido} = props


        const fullName = `${nombre} ${apellido}`;
      
        const [nameValue, setNameValue] = useState(fullName);
      
        const handleNameChange = (event) => {
          setNameValue(event.target.value);
        };
      
        useEffect(() => {
          const storedName = localStorage.getItem("name");
          if (storedName) {
            setNameValue(storedName);
          }
        }, []);
      
        useEffect(() => {
          localStorage.setItem("name", nameValue);
        }, [nameValue]);

        return <div className="frist-section-container">
            <div className="photo-info-container">
                <img src={imagen} alt="user-logo" />
                <input value={nameValue} onChange={handleNameChange} />
            </div>
            <div className="email-container">
            <p>samuel.d.perez.22@gmail.com</p>
            </div>
        </div>
    };

    export default FristSection;