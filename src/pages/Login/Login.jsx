import React from "react";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import "./Login.css"


const LoginForm = ()=>{
    const {register, handleSubmit, formState:{errors}} = useForm()

    const customSubmit =(data) =>{
        console.log(data)
    }
   
    return <Box sx={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        width:"100%",
        height:"100%",
        flexWrap:"wrap",
        position:"absolute",
        background:"#eea837",
        alignItems:"center",
                  
    }}
    component="section"
    
    >   
        <div className="img-container"></div>
        <div className="Form-Container">
            <form 
                onSubmit={handleSubmit(customSubmit)}
            >
                <h2>Iniciar Sesion</h2>
                <div className="Form-inputs">
                    
                    
                    <input  autocomplete="off" type="text" {...register('name', {required:true, minLength: 5, maxLength:15})}/>
                    {errors.name?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                    {errors.name?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                    {errors.name?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                    <label>Usuario</label>
                </div>
            
                <div className="Form-inputs">
                   
                    
                    <input  autocomplete="off" type="password"{...register('password', {required:true, minLength: 5, maxLength:15})} />
                    {errors.password?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                    {errors.password?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                    {errors.password?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                    <label>contraseña</label>
                </div>
                
                <div className="register">
                    <p>Aun no tienes cuenta? <Link className="link" to="/register">Registrate Ahora</Link> </p>
                </div>
                <Button className="submit" type="submit" variant="outlined" sx={{
                      marginTop: "2.5rem",
                      backgroundColor:"white",
                      color: "black",
                      borderColor:"white",  
                      transition:"all .5s",
                      "&:hover":{
                        backgroundColor:"transparent",
                        borderColor:" white",  
                        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                      }   
                    }}>
                    Iniciar Sesion
                </Button>
            </form>
        </div>
        
       

    </Box>
}

export default LoginForm