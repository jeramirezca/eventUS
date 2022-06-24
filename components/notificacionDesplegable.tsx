import React from 'react'
import { useUser } from '../contexts/user';


const Desplegable =  (props:any ) =>{
    return(
        <div>
        <button>-<i className="fa-solid fa-bell pr-1"></i></button>
        <div className='notificacionDesplegable'>
          <p > { //pendiente estilizar esta parte de notificaciones
        }</p>
        </div>
      </div>
    );
}

export default Desplegable;