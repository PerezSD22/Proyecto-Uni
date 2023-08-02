import React from 'react'
import "./InfoAccount.css"
import Cards from '../../Components/Cards/cards'
import { useAuth } from '../../Context/AutContext'
import { Navigate } from 'react-router-dom'


const InfoAccunt = () => {
  const cardContent = [
    {
      Tarjetas: {
        tittle:"Cuenta Cliente",
        tittleCard: "Cuenta Cliente",
        content:
          "Encuentra los mejores autos para alquilar y vive una experiencia única. Desde compactos hasta lujosos, tenemos el vehículo perfecto para tus necesidades.",
        img: "img/ClientAccount.jpg",
        btn: "Registrate ahora",
        link: "/Register/user"
      },
    },
   {
    Tarjetas:{
      tittle:"Cuenta Conductor",
      tittleCard: "Cuenta  Conductor",
      content:
        "Encuentra los mejores autos para alquilar y vive una experiencia única. Desde compactos hasta lujosos, tenemos el vehículo perfecto para tus necesidades.",
      img: "img/DriverAccount.jpg",
      btn: "Registrate ahora",
      link: "/Register/Driver"
    }
    },
  
  ];

  const{isAuthenticated } = useAuth()
  if(isAuthenticated){
    return <Navigate to="/" />
}

  return (
  <section className='body-color'>
        <div className='info-account-container'> 
          <div className="info-account-container-info">  
            <div className="info-account">
              <h2>Nuestras cuentas</h2>

              <p>¡Bienvenido(a) a las cuentas  en Mi Carrito Amarillo Seguro!</p>
              <p>Nuestras Cuentas, Cliente y conductor brindan acceso a una variedad de funciones y beneficios diseñados para hacer que tu experiencia sea más conveniente y satisfactoria, podrás gestionar tus servicios, realizar pagos, acceder a información importante, obtendrás recursos que te ayudarán a administrar tu trabajo de manera eficiente y mantener una comunicación efectiva con nosotros.   </p>
            </div>
          </div>
          <div className="info-account-card">
          {cardContent.map((cards, i) => {
            const { tittle,tittleCard, content, img, btn, link } = cards.Tarjetas;
            return (
            
          
              <Cards
                key={i}
                tittle={tittle}
                tittleCard={tittleCard}
                content={content}
                img={img}
                btn={btn}
                link={link}
              />
                    
            
            
            );
          })}
          </div>


         </div>

  </section>
  
  )
}

export default InfoAccunt