import React, { useState } from 'react';
import Link from 'next/link';
import { Evento } from '../data/Evento';
import { useRef,  useLayoutEffect } from 'react';
import { useAdmin } from '../contexts/admin';
import { useUser } from '../contexts/user';
import Eventos from './Eventos';
import { toast } from 'react-toastify';
type E ={E:Evento};
let abierto = false;
const DivMod = ({E}:E) => {
const {admin,setAdmin} = useAdmin();
const {user,setUser} = useUser();

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
 


const borrarEvento = async () =>{
    var adminAux = admin;
    let evn:Evento[] = adminAux.buscarCreador(user.id).eventosCreados;
    //borra al evento
    evn.splice(evn.indexOf(E),1);
    adminAux.buscarCreador(user.id).eventosCreados = evn;
    setAdmin(adminAux);

    try {
       await guardarAdmin();
      toast.success("evento borrado", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.log(err);
    }

    if(tarjetaEvento.current != null){
        tarjetaEvento.current.style.display = "none";
    }

}

async function guardarAdmin() {
    console.log(admin.toJSON());
    const response = await fetch("/api/datos", {
      method: "PATCH",
      body: admin.toJSON(),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
}


  
    //usamos el state, y añadimos el set para modificar este.
  return (
    <>
    <div className='mostrarEvento' ref={tarjetaEvento}>
        <p>{E.getNombre()} ID: {E.getId()}</p>
        <button className='botonInfo' onClick={borrarEvento}>Borrar</button>
        <button className='botonInfo' onClick={mostrarDescripcion}>Detalles</button>
       



     
    </div>
    <div className='descripcionOculta' ref={deOc}>
        <p ref={descrip} ></p>
        <button onClick={mostrarDescripcion}>Cerrar</button>
    </div>
    </>
  )
}






export default DivMod;
