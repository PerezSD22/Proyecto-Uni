import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Context/AutContext";
const PersonalData = () =>{
    const {register, formState:{errors}} = useForm();
    const {updateFormData} = useAuth();

    return( <div>
        

                    <div className="Form-inputs Form-inputs-register">
                        
                        
                        <input  autocomplete="off" type="text" {...register('name', {required:true, minLength: 1, maxLength:25})}
                         onChange={ e => {  updateFormData({name: e.target.value})}}
                        
                        
                        />
                        {errors.name?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.name?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.name?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Nombre</label>
                    </div>
                
                    <div className="Form-inputs Form-inputs-register">
                    
                        
                        <input  autocomplete="off" type="text"{...register('lastname', {required:true, minLength: 5, maxLength:35})}
                        onChange={ e => {  updateFormData({lastname: e.target.value})}}
                        
                        />
                        {errors.lastName?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.lastName?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.lastName?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Apellido</label>
                    </div>
    </div>
        
    )

}

export default PersonalData