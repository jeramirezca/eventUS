import React, { useRef } from 'react'
import Link from 'next/link';
import { Evento } from '../data/Evento';
import { useUser } from '../contexts/user';
import { useAdmin } from '../contexts/admin';
import { Creador } from '../data/Creador';
import { Administrador } from '../data/Administrador';
import { toast } from 'react-toastify';
import router from 'next/router';
type E ={E:Evento};
let abierto = false;


const DivPropuesta = ({E}:E) => {
    const {user,setUser} = useUser();
    const {admin,setAdmin} = useAdmin();    
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
    
    const aprovarPropuesta = () =>{
      var admiAux = admin;
        let creador_tmp = user as Creador;
        let proponente:string = creador_tmp.aceptarEvento(E);
        //let admiAux:Administrador = admin;
        admiAux.buscarEstudiante(proponente).agregarNotificaciones("evento"+E.id,new Date(),"tu evento fue aprobado!");
        //salvamos los datos
        setAdmin(admiAux);
        setUser(creador_tmp);
        try {
            guardarAdmin();
          toast.success("El estudiante será informado", {
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
        
        //buscamos al proponente para mandarle la notificacion
        if(EventoDiv.current !== null){
            EventoDiv.current.style.display = "none";
        }
        router.push("/creador/perfilCreador");
        //aqui deberia ir el codigo en el que se le borra el evento al creador
        
    }
    
    const denegarPropuesta = () =>{
      var admiAux = admin;
        let creador_tmp = user as Creador;
        let proponente:string = creador_tmp.rechazarEvento(E);
        //let admiAux:Administrador = admin;
        admiAux.buscarEstudiante(proponente).agregarNotificaciones("evento"+E.id,new Date(),"tu evento no fue aprobado!");
        //salvamos los datos
        setUser(creador_tmp);
        setAdmin(admiAux);
        try {
            guardarAdmin();
          toast.success("El estudiante será informado", {
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
        
        if(EventoDiv.current !== null){
            EventoDiv.current.style.display = "none";
        }
        //aqui deberia ir el codigo en el que se le borra el evento al creador
        //recargas página para ver actulizado
        router.push("/creador/perfilCreador");
    
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
