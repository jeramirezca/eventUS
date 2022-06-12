import React, { useRef } from 'react'
import Link from 'next/link';
import { Evento } from '../data/Evento';
type E ={E:Evento};
let abierto = false;

const DivPropuesta = ({E}:E) => {
    
    const deOc = useRef<HTMLDivElement>(null); 
    const descrip = useRef<HTMLParagraphElement>(null); 
    const EventoDiv = useRef<HTMLDivElement>(null);
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
    
    const aprovarPropuesta = () =>{
        if(EventoDiv.current !== null){
            EventoDiv.current.style.display = "none";
        }
        //aqui deberia ir el codigo en el que se le borra el evento al creador
        
    }
    
    const denegarPropuesta = () =>{

        if(EventoDiv.current !== null){
            EventoDiv.current.style.display = "none";
        }
        //aqui deberia ir el codigo en el que se le borra el evento al creador
        
    }


  return (
    <>
    
    <div className='mostrarEvento' ref={EventoDiv} >
        <p>{E.getNombre()}    ID:   {E.getId()}</p>
        <button onClick={mostrarDescripcion}>Detalles</button>
        <button onClick={aprovarPropuesta}>Aprovar</button>
        <button onClick={denegarPropuesta}>Denegar</button>
     
    </div>
    <div className='descripcionOculta2' ref={deOc}>
        <p ref={descrip}></p>
        <button onClick={mostrarDescripcion}>Cerrar</button>
    </div>
    </>
  )
}





export default DivPropuesta;
