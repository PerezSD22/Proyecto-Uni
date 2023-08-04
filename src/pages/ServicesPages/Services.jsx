import React from 'react'
import "./Services.css"
import ServicesCard from '../../Components/Cards/ServicesCard'

const Services = () => {
    const cardContent = [
        {
          Tarjetas: {
            tittle: "Alquiler",
            tittleCard: "Alquila los mejores Autos",
            content:
              "Contamos con una flota de vehículos modernos y bien mantenidos disponibles para alquiler a corto o largo plazo. Nuestro proceso de alquiler es fácil y conveniente, y nuestro equipo estará encantado de ayudarte a encontrar el vehículo adecuado para satisfacer tus necesidades.",
            img: "img/alquiler.jpg",
            btn: "Alquila ahora",
          },
        },
       {
        Tarjetas:{
            tittle:"Taxis",
            tittleCard: "Viaja seguro, Viaja con estilo",
            content:
              "¿Necesitas un automóvil para desplazarte por la ciudad? Nuestro servicio de taxis es la solución ideal cuando necesitas un transporte seguro y conveniente en la ciudad. Contamos con conductores profesionales y amigables que te llevarán a tu destino de manera puntual y segura. ",
            img: "img/taxi-card.jpg",
            btn: "Pide uno ahora",
            link: "https://perezsd22.github.io/Geolocalizacion/"
        }
        },
        {
          Tarjetas:{
            tittle: "Delivery",
            tittleCard: "Los pedidos y Entregas mas rapidos",
            content:
           " ¿Tienes hambre y quieres disfrutar de una deliciosa comida en la comodidad de tu hogar? Nuestro servicio de entrega de comida está listo para satisfacer tus antojos. Ya sea que desees pizza, sushi, hamburguesas o cualquier otro platillo, te aseguramos que recibirás tu pedido de manera rápida y segura.",
            img: "img/food_delivery.jpg",
            btn: "Enterate de más",
        } 
          
        },
        {
          Tarjetas:{
            tittle: "Paqueteria",
            tittleCard: "Tu comida a cualquier hora",
            content:
            "¿Necesitas enviar paquetes de manera segura y eficiente? Nuestro servicio de paquetería está aquí para ayudarte. Nos ocuparemos de tus envíos, ya sea que sean documentos importantes, regalos especiales o productos comerciales, y nos aseguraremos de que lleguen a su destino de manera rápida y confiable",
            img: "img/delivery.jpg",
            btn: "Enterate de más",
            
        }
        }
      ];
    


  return (
    <section className='Container-Services'>
              {cardContent.map((cards, i) => {
         const { tittleCard,tittle, content, img, btn, link } = cards.Tarjetas;
        return (
          <ServicesCard
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
    </section>
  )
}

export default Services