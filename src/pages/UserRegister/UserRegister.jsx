import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import "./register.css";
import PersonalData from "./Personal-Data/PersonalData";
import LocalData from "./Local-Data/LocalData";
import DataUser from "./User-Data/User-Data";
import { useAuth } from "../../Context/AutContext";
import { Navigate } from "react-router-dom";

const UserRegisterForm = () => {
  const {  handleSubmit } = useForm();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Datos personales","Datos Locales", "Datos de cuenta", "Confirmar registro"];
  const{isAuthenticated, setFormData,formData,handleRegister  } = useAuth();
  

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  if(isAuthenticated){
    return <Navigate to="/" />
}


const customSubmit = (Data) => {
  setFormData(Data);
  handleRegister(Data)
  //console.log(formData)
/*
  const formCustomer = {
    "name":formData.name,
    "lastname":formData.lastname,
    "address":formData.address
  }

  const formCustomerUser = {
    "user":formData.user,
    "password":formData.password,
    "email":formData.email,
    "countries":formData.contries,
  }
  console.log("---------Datos del Formulario--------------------");
  console.log("Datos del Cliente");
  console.log("-----------------------------");
  console.log(JSON.stringify(formCustomer));
  console.log("-----------------------------");
  console.log("-----------------------------");
  console.log("Datos del Cliente Usuario");
  console.log("-----------------------------");
  console.log(JSON.stringify(formCustomerUser));
  console.log("-----------------------------");
*/
};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height:{ xs: '120vh', md: 'auto' },
        flexWrap: "wrap",
        position: "absolute",
        background: "#eea837",
        alignItems: "center",
      }}component="section">
      <div className="Form-Container register-container">
        <h2>Registrarse</h2>
        <Stepper activeStep={activeStep} alternativeLabel sx={{width:"100%"}}>
          {steps.map((label) => (
            <Step  key={label}>
              <StepLabel >{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <form onSubmit={handleSubmit(customSubmit)}>
          {activeStep === 0 && (
            <div className="register-user">
              <div className="Form-inputs Form-inputs-register">
                <PersonalData />
            
              </div>
            </div>
          )}
          {activeStep === 1 && (
            <div className="register-user">
              <div className="Form-inputs Form-inputs-register">
                <LocalData/>
              </div>
            </div>
          )}
          {activeStep === 2 && (
            <div className="register-user">
              <div className="Form-inputs Form-inputs-register">
                <DataUser />
              </div>
            </div>
          )}

      

          <div className="register login">
        
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link className="link link-login" to="/login">
                Inicia sesión ahora
              </Link>{" "}

            </p>
            <p>
              ¿Quieres seguir navegando?{" "}
              <Link className="link link-login" to="/">
                Regresa al Home ahora
              </Link>{" "}
            </p>
          </div>
          <div className="button-container">
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ marginRight: "1rem" }}
              type="button"
            >
              Atrás
            </Button>
            {activeStep < steps.length - 1 ? (
              <Button variant="contained" onClick={handleNext}  type="button">
                Siguiente
              </Button>
            ) : (
              <Button type="submit" variant="contained">
                Registrarse
              </Button>
            )}
          </div>
        </form>
      </div>
    </Box>
  );
};

export default UserRegisterForm;
