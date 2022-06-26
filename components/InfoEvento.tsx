import React from 'react'
import { useEvento } from '../contexts/evento';
import { Evento } from '../data/Evento';
import DivEvento from './divEvento';
type E ={E:Evento};


const InfoEvento = () => {

  const { evento, setEvento } = useEvento();
  return (
    <>
    <div className='cajaBonita'>
    <div className='md:w-96 w-2/4 bg-azul-light rounded-3xl'>
      <h2>Información del evento {evento.id}</h2>
      
      {
       <p></p>
       
      }

          </div>
          <br></br>
          <div className='cajaBonita'>
            <p>Lugar: {evento.lugar}</p>
            <p>Nombre: {evento.nombre}</p>
            <p>Facultad: {evento.facultad}</p>
            <p>Hora inicio: {evento.horaInicio} Hora final: {evento.horaFin}</p>

          </div>
        <div>
        <br></br>
    
          <div className='cajaBonita'>
            <p><strong>Descripción:</strong></p>
            <p>{evento.descripcion}</p>
          </div>
          
        </div>
    </div>
        </>  
      
  )
}

export default InfoEvento