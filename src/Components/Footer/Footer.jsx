import React from "react";
import "./footer.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="parent">
      <div className="container">
        <div className="img-footer">
            <ul>
                <li> <img src="img/taxi-logo.jpg" alt="logo" className="Logo" /></li>
                <li>Smart-Taxi</li>
            </ul>
         
        </div>
        <div className="additional-content">
        <ul>
            <li> <h4> Vision: </h4></li>
            <li>Ser la empresa líder en el sector de servicios de transporte, destacando por nuestra calidad, eficiencia y compromiso con la satisfacción del cliente. Deseamos transformar la experiencia de movilidad y entrega de paquetería y alimentos a domicilio, brindando soluciones integrales y confiables.</li>
            <li> <h4> Mision: </h4></li>
            <li>Nuestra misión es ofrecer servicios de transporte, alquiler de autos, entrega de paquetería y entrega de comida a domicilio de manera segura, eficiente y conveniente para nuestros clientes. Buscamos ser el proveedor preferido por aquellos que valoran la comodidad, la puntualidad y la calidad en cada uno de nuestros servicios.</li>
          </ul>
        </div>
        <div className="contact">
            <h5>Contactanos</h5>
          <ul className="Contact-list">
            
            <li><a href="https://www.youtube.com"  target="_blank" rel="noreferrer"><YouTubeIcon/></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><TwitterIcon/></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><InstagramIcon/></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
