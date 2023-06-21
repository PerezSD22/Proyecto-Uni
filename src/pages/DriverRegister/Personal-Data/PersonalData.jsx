import React from "react";
import { useForm } from "react-hook-form";

const PersonalData = () =>{
    const {register, formState:{errors}} = useForm();
    return( <div>
        
        <h3 className="personal-data">Datos personales</h3>
                    <div className="Form-inputs Form-inputs-register">
                        
                        
                        <input  autocomplete="off" type="text" {...register('name', {required:true, minLength: 1, maxLength:25})}/>
                        {errors.name?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.name?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.name?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Nombre</label>
                    </div>
                
                    <div className="Form-inputs Form-inputs-register">
                    
                        
                        <input  autocomplete="off" type="text"{...register('lastname', {required:true, minLength: 5, maxLength:35})} />
                        {errors.lastName?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.lastName?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.lastName?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Apellido</label>
                    </div>
                    <div className="Form-inputs Form-inputs-register">
                        
                        
                        <input  autocomplete="off" type="text" {...register('address', {required:true, minLength: 5, maxLength:50})}/>
                        {errors.address?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.address?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.address?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Dirección</label>
                            
            
                </div>
        
                <div className='lista-opciones'>
                        <label>País</label>
                        <select >
                            <option >Venezuela</option>
                            <option >Ecuador</option>
                            <option >Colombia</option>
                        </select>
                </div>
    </div>
        
    )

}

export default PersonalData