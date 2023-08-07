import React from "react";
import Cards from "../../../Components/Cards/cards";
import "./services-home.css";

const ServicesHome = () => {
  const cardContent = [
    {
      Tarjetas: {
        tittle: "Alquiler",
        tittleCard: "Alquila los mejores Autos",
        content:
          "Encuentra los mejores autos para alquilar y vive una experiencia única. Desde compactos hasta lujosos, tenemos el vehículo perfecto para tus necesidades.",
        img: "img/alquiler.jpg",
        btn: "Alquila ahora",
        link:"/Servicios"
      },
    },
   {
    Tarjetas:{
        tittle:"Taxis",
        tittleCard: "Viaja seguro, Viaja con estilo",
        content:
          "Pide uno de nuestros taxis ahora mismo y disfruta de un viaje unico a tu destino.",
        img: "img/taxi-card.jpg",
        btn: "Pide uno ahora",
        link:"/Servicios"
    }
    },
    {
      Tarjetas:{
        tittle: "Delivery",
        tittleCard: "Los pedidos y Entregas mas rapidos",
        content:
       " Que el hambre no sea un problema, aprovecha nuestro servicios especializados en entrega de comida.",
        img: "img/food_delivery.jpg",
        btn: "Enterate de más",
        link:"/Servicios"
    } 
      
    },
    {
      Tarjetas:{
        tittle: "Paqueteria",
        tittleCard: "Tu comida a cualquier hora",
        content:
        "Pide lo que sea, en donde sea, cuando sea. Tenemos los repartidores mas confiables y mas rapido del mercado",
        img: "img/delivery.jpg",
        btn: "Enterate de más",
        link:"/Servicios"
    }
    }
  ];

  return (
    <section >
        <div className="info-container">
            <h1>Nuestros Servicios</h1>
            <p>En nuestra empresa, Mi Carrito Amarillo Seguro, nos enorgullece ofrecer una amplia gama de servicios diseñados para cubrir todas tus necesidades de movilidad y logística. Ya sea que estés buscando un medio de transporte confiable, rápido y seguro, o necesites enviar paquetes con eficiencia y cuidado, estamos aquí para ayudarte. Explora nuestros servicios a continuación:</p>
        </div>

       <section className="services-container ">
       {cardContent.map((cards, i) => {
         const { tittleCard,tittle, content, img, btn, link } = cards.Tarjetas;
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
       </section>
     
    </section>
  );
};

export default ServicesHome;
