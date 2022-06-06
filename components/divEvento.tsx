import React from 'react'
import Link from 'next/link';
import { Evento } from '../data/Evento';
type E ={E:Evento};
let abierto = false;

const DivEvento = ({E}:E) => {
  return (
    <>
    <div className='mostrarEvento'>
        <p>{E.getNombre()} ID: {E.getId()}</p>
        <button onClick={mostrarDescripcion}>Detalles</button>
     
    </div>
    <div className='descripcionOculta' id='deOc'>
        <p id="descrip">{E.getDescripcion()}</p>
        <button onClick={mostrarDescripcion}>Cerrar</button>
    </div>
    </>
  )
}

function mostrarDescripcion():void{
    const espacio_desc = document.getElementById('deOc');
    if(abierto==false) {
        espacio_desc!.style.display = "block";
        abierto = true;
    }
    else{
        espacio_desc!.style.display = "none"; 
        abierto = false;
    }
}


export default DivEvento;
