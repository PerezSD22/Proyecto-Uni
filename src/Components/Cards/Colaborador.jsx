import "./Colaborador.css"


const Colaborador = (props) =>{
    const {name, jobTitle, image, color} = props

    return (
        <div className="ColaboratorContainer">
            <div className='Colaborador' >
      
                <div className='Encabezado' style={{backgroundColor: color}}>
                    <img src={image} alt={name} />
                </div>
                <div className='Info'>
                    <h4>{name }</h4>
                    <h5>{jobTitle}</h5>
                
                    
                    
                </div>
            </div>
        </div>
    )

}

export default Colaborador