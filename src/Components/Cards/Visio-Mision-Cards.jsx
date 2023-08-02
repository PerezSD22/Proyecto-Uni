import React from 'react'
import "./Visio-Mision-Cards.css"
const VisioMisionCards = (props) => {
    const {tittle, content} = props;

  return (
    <div className='Card__Container'>
        <div className="Card__Content">
            <div className="Card__tittle">
                <h2>{tittle}</h2>
            </div>
            <div className="Card__Content__text">
                <p>{content}</p>
            </div>
        </div>
     
    </div>
    
  )
}
export default VisioMisionCards