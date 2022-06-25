import React, { useState } from 'react';
import Link from 'next/link';
import { Evento } from '../data/Evento';
import { useRef,  useLayoutEffect } from 'react';
type E ={E:Evento};
let abierto = false;
const DivEvento = ({E}:E) => {
    
const deOc = useRef<HTMLDivElement>(null); 
const tarjetaEvento = useRef<HTMLDivElement>(null);

const descrip = useRef<HTMLParagraphElement>(null); 
//const [cambiarTexto,setCambiarTexto] = useState("Vaya, que vacio...");

const mostrarDescripcion = ()=>{
    console.log("boton pulsado");
  
    
       //const _deOc = document.getElementById('deOc');
       if(abierto==false) {
           //deOc!.style.display = "block";
           
           if(deOc.current !== null && descrip.current !== null){
  //             setCambiarTexto(E.getDescripcion());
               descrip.current.innerHTML = E.getDescripcion();
               deOc.current.style.display = "block";
               
               console.log("deberia mostrarme");
               abierto = true;
           }
           //txt_desc!.innerHTML = ev.getDescripcion();
           
          
       }
       else{
           if(deOc.current !== null && descrip.current !== null){
               deOc.current.style.display = "none";
               console.log(deOc.current + "xd");
               abierto = false;
           }

       }
   }
 
  
    //usamos el state, y añadimos el set para modificar este.
  return (
    <>
    <div className='mostrarEvento' ref={tarjetaEvento}>
        <p>{E.getNombre()} ID: {E.getId()}</p>
        <button onClick={mostrarDescripcion}>Detalles</button>
     
    </div>
    <div className='descripcionOculta' ref={deOc}>
        <p ref={descrip} ></p>
        <button onClick={mostrarDescripcion}>Cerrar</button>
    </div>
    </>
  )
}






export default DivEvento;
