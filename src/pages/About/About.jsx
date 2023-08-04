import React from 'react'
import "./About.css"

import VisioMisionCards from '../../Components/Cards/Visio-Mision-Cards'
import Colaborador from '../../Components/Cards/Colaborador'
const About = () => {
    const card = [
        {
            Tarjetas: {
              tittle: "VISIÓN",
             
              content:
                "Nuestra misión en Mi Carrito Amarillo Seguro es proporcionar soluciones de movilidad y logística confiables y seguras a nuestros clientes, brindando un servicio excepcional y adaptado a sus necesidades. Nos esforzamos por ser líderes en el sector, ofreciendo opciones de transporte y entrega eficientes que superen las expectativas de nuestros clientes y contribuyan a su comodidad y tranquilidad.",
       
            },
          },
         {
          Tarjetas:{
              tittle:"MISIÓN",
               content:
                "Nuestra misión en Mi Carrito Amarillo Seguro es proporcionar soluciones de movilidad y logística confiables y seguras a nuestros clientes, brindando un servicio excepcional y adaptado a sus necesidades. Nos esforzamos por ser líderes en el sector, ofreciendo opciones de transporte y entrega eficientes que superen las expectativas de nuestros clientes y contribuyan a su comodidad y tranquilidad. ",
           
          }
        }]
    const programerTeam = [
        {
            colaborator:{
                name: "Samuel Peréz",
                jobTitle: "Fronte-End",
                image:"img/fotoSamuel.jpg",
                color:"#6FC577",
            }
        },
        {
            colaborator:{
                name: "Jordan Castro",
                jobTitle: "Back-End",
                image:"img/fotoJordan.jpeg",
                color:"#6FC577",
            } 
        }
    
    ] 

    const leadTeam = [

        {
            colaborator:{
                name: "Raquel Peréz",
                jobTitle: "Product-Owner",
                image:"img/fotoKarla.jpeg",
                color:"#63A5D8",
            }
        },
        {
            colaborator:{
                name: "Laura Santillan",
                jobTitle: "Scrum-Master",
                image:"img/fotoLau.jpeg",
                color:"#63A5D8",
            } 
        },
        {
            colaborator:{
                name: "Katty Ramos",
                jobTitle: "Analista de datos",
                image:"img/fotoKatty.jpeg",
                color:"#63A5D8",
            } 
        },

    ]
  return (
    <section className='About__Container'>
        <div className="Container">
             <h1 > ¿Quiénes somos? </h1>
           <div className="about-content">
                <p className="About-Text">Mi Carrito Amarillo Seguro somos un equipo de expertos comprometidos en ofrecer seguros automotrices confiables y personalizados. Tu seguridad y tranquilidad son nuestra prioridad, y estamos aquí para ayudarte en cada paso del camino.</p>
                <p className="About-Text">¡Confía en nosotros para proteger tu vehículo y disfrutar de la paz mental que mereces! No dudes en contactarnos para obtener más información o solicitar una cotización personalizada. Estamos ansiosos por ser parte de tu viaje en carretera.</p>
            
           </div>
           
           <div className="about-img">
                <img src="img/Taxi-About.jpg" alt="mision-vision" className="imagen-vision"/>
           </div>
                
        </div>

        <div className='About__Vision-container  '>
            <h1>Nuestra misión y visión</h1>
            <p className='About__Vision-text'>Nuestro objetivo es liderar el sector, superando las expectativas de nuestros clientes al ofrecer opciones de transporte y entrega eficientes que marquen la diferencia. En Mi Carrito Amarillo Seguro, nos enorgullecemos de ser más que solo un proveedor de servicios, somos aliados en el éxito de quienes confían en nosotros.</p>
            <div className="Card__About_container">
            {
                card.map((cards, i)=>{
                    const {tittle, content} = cards.Tarjetas
                    return <VisioMisionCards  
                        key= {i}
                        tittle ={tittle}
                        content= {content}
                    
                    />
                })
            }
            </div>
           
        </div>
     
       <div className="Colaborator-Team">
            <div className="Colaborator-info">
                <h1>Nuestro Equipo de desarrollo</h1>
                <p>Contamos con un grupo de profesionales apasionados y dedicados que se especializan en crear experiencias digitales excepcionales. Nuestro equipo está formado por expertos en diseño web, programación, desarrollo front-end y back-end, así como en la implementación de soluciones tecnológicas de vanguardia. Trabajamos en estrecha colaboración para ofrecer soluciones personalizadas y funcionales que superen las expectativas de nuestros clientes.</p>
            </div>
            
            
       </div>
       <div className='Colaborator-Team-detail'>
            <h2>Programadores</h2>
            <div className="ProgramerTeam">
               { 
                programerTeam.map((programer, i ) =>{
                    const {name,jobTitle,image,color } = programer.colaborator

                    return <Colaborador
                        key={i}
                        name={name}
                        jobTitle={jobTitle}
                        image={image}
                        color={color}
                    
                    />
                })
                
               
               }
            </div>

               
        </div>
        <div className='Colaborator-Team-detail Logistica'>
            <h2>Logistica</h2>
            <div className="ProgramerTeam logic-team">
               { 
                leadTeam.map((colaborators, i ) =>{
                    const {name,jobTitle,image,color } = colaborators.colaborator

                    return <Colaborador
                        key={i}
                        name={name}
                        jobTitle={jobTitle}
                        image={image}
                        color={color}
                    
                    />
                })
                
               
               }
            </div>
               
               
        </div>

    </section>
  )
}

export default About