import React, { useRef } from 'react'
import Link from 'next/link';
import { Evento } from '../data/Evento';
import { useUser } from '../contexts/user';
import { useAdmin } from '../contexts/admin';
import { Creador } from '../data/Creador';
import { Administrador } from '../data/Administrador';
import { toast } from 'react-toastify';
import router from 'next/router';
import { Notificacion } from '../data/Notificacion';
type E ={E:Evento};
let abierto = false;


const DivPropuesta = ({E}:E) => {

    const {user,setUser} = useUser();
    //const [evento,setEvento] = useState(admin.buscarEvento())
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
    
    const aprovarPropuesta = async () =>{
     
      var admiAux = admin;
      E.estado = true;
      console.log(E);
      var creador_tmp = user as Creador;
        let proponente:string = creador_tmp.aceptarEvento(E);
        //let admiAux:Administrador = admin;
        admiAux.buscarEstudiante(proponente).notificacionesPendientes.push(new Notificacion("evento "+E.nombre,new Date(),"tu evento fue aprobado!"));
        admiAux.buscarEstudiante(proponente).aceptarEvento(E.id);
         
        
      //admiAux.buscarEstudiante(proponente).borrarPropuesta(E);
      //culpa de palacios
        //salvamos los datos
        setAdmin(admiAux);
        setUser(creador_tmp);
        try {
          await guardarAdmin();
          toast.success("El estudiante ser?? informado", {
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
      
        //aqui deberia ir el codigo en el que se le borra el evento al creador
        
    }
    
    const denegarPropuesta = async () =>{
     
     
      console.log(E);
      var admiAux = admin;
      E.estado = false;
        let creador_tmp = user as Creador;
        let proponente:string = creador_tmp.rechazarEvento(E);
        admiAux.buscarEstudiante(proponente).borrarPropuesta(E);
        //let admiAux:Administrador = admin;
        admiAux.buscarEstudiante(proponente).noEvento(E.id);
        admiAux.buscarEstudiante(proponente).notificacionesPendientes.push(new Notificacion("evento "+E.nombre,new Date(),"tu evento no fue aprobado!"));
        //salvamos los datos
        setUser(creador_tmp);
        setAdmin(admiAux);
        try {
          await guardarAdmin();
          toast.success("El estudiante ser?? informado", {
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
        //recargas p??gina para ver actulizado
    
    }


  return (
    <>
    
    <div className='mostrarEvento' ref={EventoDiv} >
        <p>{E.getNombre()}    ID:   {E.getId()}</p>
        <button onClick={mostrarDescripcion}>Detalles</button>
        <button onClick={aprovarPropuesta}>Aprobar</button>
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
