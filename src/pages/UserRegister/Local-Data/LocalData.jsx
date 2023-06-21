
import React from "react";
import { useForm } from "react-hook-form";
import paises from "./paiseObje";

const LocalData = ( ) =>{
    const {register, formState:{errors}} = useForm();
    return(
        <div>
            <div className="Form-inputs Form-inputs-register">
                        
                        
                <input  autocomplete="off" type="text" {...register('address', {required:true, minLength: 5, maxLength:50})}/>
                {errors.address?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                {errors.address?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                {errors.address?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                <label>Dirección</label>
                    
            </div>

            <div className='lista-opciones'>
                <label>Equipos</label>
                <select >
                    <option >Venezuela</option>
                    <option >Ecuador</option>
                    <option >Colombia</option>
                </select>
            </div>

        </div>
    )
}

export default LocalData