import React from "react";
import "./payment.css"

const PaymentInfo = () =>{
    return <section>
         
        <div className="Container">
             <h1 > Paga desde nuestra pagina </h1>
           <div className="contenido-texo">
                <p >En Mi Carrito Amarillo Seguro, nos comprometemos a proporcionarte una experiencia de pago confiable y segura. Sabemos que tu tiempo es valioso, por lo que hemos implementado un proceso de pago sencillo y seguro para que puedas completar tus transacciones sin complicaciones.</p>
                <br /> 
                <p>A través de nuestra página web, puedes realizar pagos de forma fácil y segura utilizando diferentes métodos de pago, incluyendo tarjetas de crédito, tarjetas de débito y transferencias bancarias. Sigue los pasos indicados en nuestra página de pago. Te guiaremos a través del proceso y te brindaremos la información necesaria para completar tu transacción de manera exitosa.</p>
                <br /> 
                <p>Si tienes alguna pregunta o necesitas asistencia durante el proceso de pago, puedes comunicarte con nosotros a través de nuestro formulario de contacto o por teléfono, y estaremos disponibles para responder a tus consultas y brindarte la asistencia necesaria.
</p>
           </div>
           
           <div className="contenido-imagen">
                <img src="img/trasancciones.jpg" alt="mision-vision" className="imagen-vision"/>
           </div>
           <div className="boton">
          
           </div>
        </div>
    </section>
}

export default PaymentInfo