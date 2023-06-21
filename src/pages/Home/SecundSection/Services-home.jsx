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
    }
    }
  ];

  return (
    <section >
        <div className="info-container">
            <h1>Nuestros Servicios</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis ratione sequi alias incidunt veritatis! Consectetur eligendi veritatis nam ipsa culpa illum, architecto eos enim. Similique in minima excepturi deserunt!</p>
        </div>

       <section className="services-container ">
       {cardContent.map((cards, i) => {
         const { tittleCard,tittle, content, img, btn } = cards.Tarjetas;
        return (
          <Cards
            key={i}
            tittle={tittle}
            tittleCard={tittleCard}
            content={content}
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
