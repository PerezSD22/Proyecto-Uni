import React from "react";
import Cards from "../../../Components/Cards/cards";
import "./services-home.css";

const ServicesHome = () => {
  const cardContent = [
    {
      Tarjetas: {
        titulo: "Alquila los mejores Autos",
        contenido:
          "Encuentra los mejores autos para alquilar y vive una experiencia única. Desde compactos hasta lujosos, tenemos el vehículo perfecto para tus necesidades.",
        img: "img/alquiler.jpg",
        btn: "Alquila ahora",
      },
    },
   {
    Tarjetas:{
        titulo: "Viaja seguro, Viaja con estilo",
        contenido:
          "Pide uno de nuestros taxis ahora mismo y disfruta de un viaje unico a tu destino.",
        img: "img/taxi-card.jpg",
        btn: "Pide uno ahora",
    }
    },
    {
        Tarjetas:{
            titulo: "Tu comida a cualquier hora",
            contenido:
            "Pide lo que sea, en donde sea, cuando sea. Tenemos los repartidores mas confiables y mas rapido del mercado",
            img: "img/delivery.jpg",
            btn: "Enterate de más",
        }
    },
    {
        Tarjetas:{
            titulo: "Los pedidos y Entregas mas rapidos",
            contenido:
           " Que el hambre no sea un problema, aprovecha nuestro servicios especializados en entrega de comida.",
            img: "img/food_delivery.jpg",
            btn: "Enterate de más",
        } 
    }
  ];

  return (
    <section >
        <div className="info-container">
            <h1>Nuestros Servicios</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis ratione sequi alias incidunt veritatis! Consectetur eligendi veritatis nam ipsa culpa illum, architecto eos enim. Similique in minima excepturi deserunt!</p>
        </div>

       <section className="services-container">
       {cardContent.map((cards, i) => {
         const { titulo, contenido, img, btn } = cards.Tarjetas;
        return (
          <Cards
            key={i}
            titulo={titulo}
            contenido={contenido}
            img={img}
            btn={btn}
          />
        );
      })}
       </section>
     
    </section>
  );
};

export default ServicesHome;
