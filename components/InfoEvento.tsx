import React from 'react'
import { useEvento } from '../contexts/evento';
import { Evento } from '../data/Evento';
import DivEvento from './divEvento';
type E ={E:Evento};


const InfoEvento = () => {

  const { evento, setEvento } = useEvento();
  console.log(evento.facultad)
  return (
    <>
    <div className='cajaBonita'>
    <div className='md:w-96 w-2/4 bg-azul-light rounded-3xl'>
      <h2>Información del evento ID: {evento.id}</h2>
      

          </div>
          <br></br>
          <div className='cajaBonita'>
            <p><strong>Lugar:</strong> {evento.lugar}</p>
            <p><strong>Nombre:</strong> {evento.nombre}</p>
            <p><strong>Hora inicio:</strong> {evento.horaInicio} <strong>Hora final:</strong> {evento.horaFin}</p>
           

          </div>
        
          <br></br>
    
          <div className='cajaBonita'>
            <p><strong>Descripción:</strong></p>
            <p>{evento.descripcion}</p>
          </div>
          
        
    </div>
        </>  
      
  )
}

export default InfoEvento