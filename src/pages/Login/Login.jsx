    import React from "react";
    import { Link } from "react-router-dom";
    import { useForm } from "react-hook-form";
    import { useState } from "react";
    import { useAuth } from "../../Context/AutContext";
    import Box from '@mui/material/Box';
    import Button from '@mui/material/Button';
    import "./Login.css"
    import { Navigate, useNavigate } from "react-router-dom";



    const LoginForm = ()=>{
     
        const {register, handleSubmit, formState:{errors}} = useForm()//registro
        const [userName, setUserName] = useState('')
        const [password, setPassword] = useState('')
        const{ handleLogin, isAuthenticated, saveUser  } = useAuth();
        const navigate = useNavigate();

        if(isAuthenticated){
            return <Navigate to="/" />
        }



    
        return <Box sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            width:"100%",
            height:"auto",
            flexWrap:"wrap",
            position:"absolute",
            background:"#eea837",
            alignItems:"center",
            overflowY:"hidden",
                    
        }}
        component="section"
        
        >   
            <div className="img-container"></div>
            <div className="Form-Container">
                <form 
                    onSubmit={handleSubmit(async (data) => {
                        try{
                            
                            const response = await handleLogin(data.username, data.password);
                          
                            if(response.ok){
                                console.log(response.ok)
                                console.log("Login exitoso");
                           
                                const json = await response.json();
                                if(json.body && json.body.Token && json.body.refreshToken){
                                   saveUser()
                                }


                                return navigate("/")
                            }else{
                                console.log("login fallido")
                            }
                            
                        }catch(error){
                            console.log("Ha surgido un error: " + error);
                        }
                    })} 
                >
                    <h2>Iniciar Sesion</h2>
                    <div className="Form-inputs">
                        
                        
                        <input 
                        autocomplete="off" type="text" {...register('username', {required:true, minLength: 5, maxLength:15})}
                        value={userName}
                        onChange={(e => {
                            setUserName(e.target.value)
                            
                        })}
                        />
                        {errors.name?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.name?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.name?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Usuario</label>
                    </div>
                
                    <div className="Form-inputs">
                    
                        
                        <input  autocomplete="off" type="password"
                        {...register('password', {required:true, minLength: 5, maxLength:15})} 
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        
                        />
                        {errors.password?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.password?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.password?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>} 
                        <label>contraseña</label>
                    </div>
                    
                    <div className="register">
                        <p>Aun no tienes cuenta? <Link className="link" to="/register">Registrate Ahora</Link> </p>
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
                    </div>
                
                </form>


            </div>
            
        

        </Box>
    }



    export default LoginForm