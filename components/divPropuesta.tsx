import React from 'react'
import Link from 'next/link';
import { Evento } from '../data/Evento';
type E ={E:Evento};
let abierto = false;

const DivPropuesta = ({E}:E) => {
  return (
    <>
    
    <div className='mostrarEvento'>
        <p>{E.getNombre()}    ID:   {E.getId()}</p>
        <button onClick={mostrarDescripcion}>Detalles</button>
        <button onClick={aprovarPropuesta}>Aprovar</button>
        <button onClick={denegarPropuesta}>Denegar</button>
     
    </div>
    <div className='descripcionOculta2' id='deOc2'>
        <p id="descrip">{E.getDescripcion()}</p>
        <button onClick={mostrarDescripcion}>Cerrar</button>
    </div>
    </>
  )
}


function mostrarDescripcion():void{
    const espacio_desc = document.getElementById('deOc2');
    if(abierto==false) {

        espacio_desc!.style.display = "block";
        abierto = true;
    }
    else{
        espacio_desc!.style.display = "none"; 
        abierto = false;
    }
}

function aprovarPropuesta(){

}

function denegarPropuesta(){
    
}


export default DivPropuesta;
