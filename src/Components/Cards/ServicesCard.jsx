import React from 'react'
import "./ServicesCard.css"
import Button from '../Button/botton'
const ServicesCard= (props) => {
    const {tittle, content,btn,link,img} = props

  return (
    <div className="Card__Container__services">
    <div className='Content_services_Container'>
        <h2 className="Tittle__Card__Services">
              { tittle}
        </h2>
        <p className="content__services">
           {content}
        </p>
        <div className='Botton-Services'>
            <Button tittle={btn} link={link} type='typeButton' />
        </div>
  
    </div>
    
    <div className="service__img__container">
        <img src={img} alt="delevery" />
    </div>
</div>
  )
}

export default ServicesCard