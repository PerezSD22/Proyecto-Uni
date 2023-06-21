import React from "react";
import { useForm } from "react-hook-form";

const CarData = () =>{
    const {register, formState:{errors}} = useForm();
    return( <div>
 
                    <div className="Form-inputs Form-inputs-register">
                        
                        
                        <input  autocomplete="off" type="text" {...register('carModel', {required:true, minLength: 1, maxLength:25})}/>
                        {errors.carModel?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.carModel?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.carModel?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Modelo del auto</label>
                    </div>
                
                    <div className="Form-inputs Form-inputs-register">
                    
                        
                        <input  autocomplete="off" type="text"{...register('licensePlate', {required:true, minLength: 5, maxLength:35})} />
                        {errors.licensePlate?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.licensePlate?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.licensePlate?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Matricula del auto</label>
                    </div>
                    <div className="Form-inputs Form-inputs-register">
                        
                        
                        <input  autocomplete="off" type="text" {...register('driverLicense', {required:true, minLength: 5, maxLength:50})}/>
                        {errors.driverLicense?.type=== 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
                        {errors.driverLicense?.type=== 'minLength' && <small className="error-messaje" >el campo debe tener almenos 5 caracteres</small>}
                        {errors.driverLicense?.type=== 'maxLength' && <small className="error-messaje" >el campo no puede tener mas de 15 caracteres</small>}
                        <label>Licencia de conducir</label>
                            
            
                </div>
        
               
    </div>
        
    )

}

export default CarData