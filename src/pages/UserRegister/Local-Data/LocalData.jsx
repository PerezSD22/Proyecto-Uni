
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Context/AutContext";


 const LocalData = () => {

  const { register, formState: { errors } } = useForm([]);

  const { handleCountry, updateFormData } = useAuth();

  const [countries, setCountries] = useState([]);

   useEffect(() => {
    const getCountries = async () => {
      const dataCountries = await handleCountry();
  
      setCountries(dataCountries);
    };
    getCountries();
  }, [handleCountry, setCountries]);

  
   return (
    <div>
      <div className="Form-inputs Form-inputs-register">
        <input  type="text"
         {...register('address', { required: true, minLength: 5, maxLength: 50 })} 
          onChange={ e => {  updateFormData({address: e.target.value})}}
        
        />
        {errors.address?.type === 'required' && <small className="error-messaje" >el campo no puede estar vacio</small>}
        {errors.address?.type === 'minLength' && <small className="error-messaje" >el campo debe tener al menos 5 caracteres</small>}
        {errors.address?.type === 'maxLength' && <small className="error-messaje" >el campo no puede tener más de 15 caracteres</small>}
        <label>Dirección</label>
      </div>
       <div className='lista-opciones'>
        <label>País</label>
         <select  onChange={ e => {  updateFormData({contries: e.target.value})}}>
            {countries.map((country) => {
              return <option key={country.id}  >{country.name}</option>
            }
              
            )};
        </select>
      </div>
    </div>
  );
};
 export default LocalData;